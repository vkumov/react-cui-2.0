/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { resolve, join, basename } = require("path");
const {
  readFile,
  writeFile,
  copy,
  appendFileSync,
  remove,
} = require("fs-extra");
const glob = require("fast-glob");
var replace = require("replace");
const { spawn } = require("node:child_process");
const chalk = require("chalk");

const packagePath = process.cwd();
const distPath = join(packagePath, "./build");

const writeJson = (targetPath, obj) =>
  writeFile(targetPath, JSON.stringify(obj, null, 2), "utf8");

function globJsFiles(bn) {
  const gl = join(distPath, "**/*.js");
  const all = glob
    .sync(gl)
    .map((l) => l.replace(distPath, "."))
    .filter((l) => l !== `./${bn}` || l.startsWith("cjs"));
  return all;
}

async function createPackageFile() {
  const packageData = await readFile(
    resolve(packagePath, "./package.json"),
    "utf8"
  );
  const { scripts, devDependencies, ...packageOthers } =
    JSON.parse(packageData);

  const main_file = `./cjs/${basename(packageOthers.main)}`;
  const module_file = `./${basename(packageOthers.module)}`;

  const regx = new RegExp("\\./([^\\/]+)/(.*)\\.js");
  const all = globJsFiles(basename(packageOthers.module));

  // console.log(regx);
  // console.log(all);

  const exps = all.reduce((comb, curr) => {
    const m = curr.match(regx);
    if (m) {
      if (m[2] === "index") {
        comb[`./${m[1]}`] = {
          import: { types: `./${m[1]}/${m[2]}.d.ts`, default: curr },
        };
      } else {
        comb[`./${m[1]}/${m[2]}`] = {
          import: { types: `./${m[1]}/${m[2]}.d.ts`, default: curr },
        };
      }
    }
    return comb;
  }, {});

  const newPackageData = {
    ...packageOthers,
    private: false,
    typings: "./index.d.ts",
    types: "./index.d.ts",
    main: main_file,
    module: module_file,
    type: "module",
    exports: {
      ".": {
        import: module_file,
        require: main_file,
      },
      "./css/styles.css": "./css/styles.css",
      ...exps,
    },
  };

  delete newPackageData.files;

  const targetPath = resolve(distPath, "./package.json");

  await writeJson(targetPath, newPackageData);
  console.log(chalk.green.bold(`✓ Created package.json in ${targetPath}`));
}

async function includeFileInBuild(file) {
  const sourcePath = resolve(packagePath, file);
  const targetPath = resolve(distPath, basename(file));
  await copy(sourcePath, targetPath);
  console.log(chalk.green.bold(`✓ Copied ${sourcePath} to ${targetPath}`));
}

async function generateDeclarations() {
  const packageData = await readFile(
    resolve(packagePath, "./package.json"),
    "utf8"
  );
  const { module: m, name: packageName } = JSON.parse(packageData);
  const all = globJsFiles(basename(m)).filter(
    (f) => !f.includes("/cjs/") && !f.includes("/typings/")
  );

  const declarations = await Promise.all(
    all.map(async (f) => {
      const m = await import(join(resolve("./build/"), f));
      const mName = f
        .replace(/^\.\//, "")
        .replace(/index\.js$/, "")
        .replace(/\.js$/, "")
        .replace(/\/$/, "");
      // const bName = basename(f);
      const keys = Object.keys(m);
      const declaration = `
declare module "${packageName}/${mName}" {
  import { ${keys.join(", ")} } from "${packageName}";
  export { ${keys.join(", ")} };
}`;
      return declaration;
    })
  );

  appendFileSync(resolve("./build/index.d.ts"), declarations.join("\n"));
  console.log(
    chalk.green.bold(`✓ Generated declarations in ./build/index.d.ts`)
  );
}

async function removeTypeModule() {
  const packageData = await readFile(resolve("./build/package.json"), "utf8");
  const pkg = JSON.parse(packageData);

  delete pkg.type;

  const targetPath = resolve(distPath, "./package.json");

  await writeJson(targetPath, pkg);
}

async function replaceAndRemove() {
  replace({
    regex: `"src/`,
    replacement: `"../`,
    paths: ["./build/"],
    include: "*.d.ts,*.ts",
    recursive: true,
    silent: false,
  });

  replace({
    regex: /import ".*\.css";/g,
    replacement: "",
    paths: ["./build/"],
    include: "*.d.ts",
    recursive: true,
    silent: false,
  });

  console.log(chalk.green.bold(`✓ Cleaned *.d.ts files`));
}

async function generateDts() {
  await new Promise((resolve, reject) => {
    const ls = spawn("npm", ["run", "build:dts"], { shell: true });

    ls.stdout.on("data", (data) => {
      console.log(data.toString());
    });

    ls.stderr.on("data", (data) => {
      console.log(data.toString().replace("\n", ""));
    });

    ls.on("close", (code) => {
      if (code === 0) resolve(0);
      else reject(code);
    });
  });

  console.log(chalk.green.bold(`✓ Merged per-folder declarations`));
}

async function cleanup() {
  const files = await glob("./build/**/[A-Z]*.d.ts", {
    caseSensitiveMatch: true,
    globstar: true,
  });

  await Promise.all(files.map((f) => remove(f)));

  console.log(chalk.green.bold(`✓ Removed unused *.d.ts files`));
}

async function run() {
  try {
    await createPackageFile();
    await includeFileInBuild("./README.md");
    // await includeFileInBuild('../../LICENSE');

    await replaceAndRemove();
    await generateDts();

    await generateDeclarations();
    await removeTypeModule();

    await cleanup();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
