/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

import { spawn } from "node:child_process";
import { dirname } from "node:path";
import { basename, join, resolve } from "path";
import chalk from "chalk";
import dedent from "dedent";
import glob from "fast-glob";
import fsExtra from "fs-extra";
import replace from "replace";
import { default as ts } from "typescript";

const { appendFileSync, copy, readFile, remove, writeFile, moveSync } = fsExtra;

const packagePath = process.cwd();
const distPath = join(packagePath, "./build");

const packageData = JSON.parse(
  await readFile(resolve(packagePath, "./package.json"), "utf8")
);

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
  console.log(chalk.blue(`Creating package.json`));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scripts, devDependencies, overrides, ...packageOthers } =
    structuredClone(packageData);

  const main_file = `./cjs/${basename(packageOthers.main)}`;
  const module_file = `./${basename(packageOthers.module)}`;

  const regx = new RegExp("\\./([^\\/]+)/(.*)\\.js");
  const all = globJsFiles(basename(packageOthers.module));

  const exps = all.reduce((comb, curr) => {
    const m = curr.match(regx);
    if (m) {
      if (m[2] === "index") {
        comb[`./${m[1]}`] = {
          types: `./${m[1]}/${m[2]}.d.ts`,
          import: curr,
        };
      } else {
        comb[`./${m[1]}/${m[2]}`] = {
          types: `./${m[1]}/${m[2]}.d.ts`,
          import: curr,
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
        types: "./index.d.ts",
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

async function removeTypeModule() {
  const packageData = await readFile(resolve("./build/package.json"), "utf8");
  const pkg = JSON.parse(packageData);

  delete pkg.type;

  const targetPath = resolve(distPath, "./package.json");

  await writeJson(targetPath, pkg);
}

async function replaceAndRemove() {
  console.log(chalk.blue(`Cleaning *.js & *.d.ts files`));

  const p = join(packagePath, "src");

  console.log(chalk.blue(`Folder: ${p}`));

  replace({
    regex: `"${p}/`,
    replacement: `"../`,
    paths: ["./build/"],
    include: "*.d.ts,*.js",
    recursive: true,
    silent: false,
  });

  replace({
    regex: `'${p}/`,
    replacement: `'../`,
    paths: ["./build/"],
    include: "*.d.ts,*.js",
    recursive: true,
    silent: false,
  });

  replace({
    regex: `"src/`,
    replacement: `"../`,
    paths: ["./build/"],
    include: "*.d.ts,*.ts",
    recursive: true,
    silent: false,
  });

  replace({
    regex: `'src/`,
    replacement: `'../`,
    paths: ["./build/"],
    include: "*.d.ts,*.ts",
    recursive: true,
    silent: false,
  });

  console.log(chalk.blue(`Cleaning *.d.ts files`));
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
  console.log(chalk.blue(`Merging per-folder declarations`));

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

async function wrapIndexDts() {
  const { name: packageName } = structuredClone(packageData);

  const file = "./build/index-combined.d.ts";
  console.log(chalk.blue(`Cleaning and wrapping "${file}"`));

  replace({
    regex: new RegExp(`/// <reference types="react" />\n`),
    replacement: "",
    paths: ["./build/"],
    include: "index-combined.d.ts",
    recursive: true,
    silent: false,
  });

  replace({
    regex: /declare\s+/g,
    replacement: "",
    paths: ["./build/"],
    include: "index-combined.d.ts",
    recursive: true,
    silent: false,
  });

  const content = await readFile(file, "utf-8");
  await writeFile(file, `declare module "${packageName}" {\n${content}\n}\n`);

  console.log(chalk.green.bold(`✓ Cleaned and wrapped`));
}

async function cleanup() {
  console.log(chalk.blue(`Cleaning`));

  const files = await glob("./build/**/[A-Z]*.d.ts", {
    caseSensitiveMatch: true,
    globstar: true,
  });

  await Promise.all(files.map((f) => remove(f)));

  console.log(chalk.green.bold(`✓ Removed unused *.d.ts files`));
}

async function replaceIndex() {
  moveSync("./build/index-combined.d.ts", "./build/index.d.ts", {
    overwrite: true,
  });
}

async function generateExports() {
  const { name: packageName } = structuredClone(packageData);

  const gl = join(distPath, "**/*.js");
  const all = glob
    .sync(gl)
    // .map((l) => l.replace(distPath, "."))
    .filter(
      (f) =>
        f !== join(distPath, "index.js") &&
        f !== join(distPath, "index.esm.js") &&
        basename(f) !== "index.cjs.js"
    );

  let declarations = [];
  for (const f of all) {
    const dir = dirname(f);
    let mName = basename(dir);
    const base = basename(f, ".js");
    if (base !== "index") mName += `/${base}`;
    const dtsFile = join(dir, `${base}.d.ts`);

    console.log(chalk.yellow(`Processing ${dtsFile}`));

    const pr = ts.createProgram([dtsFile], {});
    const sourceFile = pr.getSourceFile(dtsFile);
    const fileSymbol = pr.getTypeChecker()?.getSymbolAtLocation(sourceFile);
    if (fileSymbol?.exports?.size) {
      const keys = [...fileSymbol.exports.keys()];
      await writeFile(
        // join(dirname(f), "exports.d.ts"),
        dtsFile,
        dedent`// This file is generated automatically by \`builder.mjs\`. Please, don't change it.
        
        export { ${keys.join(", ")} } from "${packageData.name}"`
      );
      const declaration = dedent`
      declare module "${packageName}/${mName}" {
        import { ${keys.join(", ")} } from "${packageName}";
        export { ${keys.join(", ")} };
      }`;
      declarations.push(declaration);
    }
  }

  declarations = declarations.filter(Boolean);

  appendFileSync(
    resolve("./build/index-combined.d.ts"),
    declarations.join("\n")
  );
}

async function run() {
  try {
    await createPackageFile();
    await includeFileInBuild("./README.md");
    // await includeFileInBuild('../../LICENSE');

    await replaceAndRemove();
    await generateDts();

    await wrapIndexDts();

    // await generateDeclarations();
    await generateExports();
    await removeTypeModule();

    await cleanup();
    await replaceIndex();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
