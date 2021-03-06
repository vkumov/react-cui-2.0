/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { resolve, join, basename } = require("path");
const { readFile, writeFile, copy } = require("fs-extra");
const glob = require("fast-glob");

const packagePath = process.cwd();
const distPath = join(packagePath, "./build");

const writeJson = (targetPath, obj) =>
  writeFile(targetPath, JSON.stringify(obj, null, 2), "utf8");

async function createPackageFile() {
  const packageData = await readFile(
    resolve(packagePath, "./package.json"),
    "utf8"
  );
  const { scripts, devDependencies, ...packageOthers } =
    JSON.parse(packageData);

  const main_file = `./cjs/${basename(packageOthers.main)}`;
  const module_file = `./${basename(packageOthers.module)}`;

  const gl = join(distPath, "**/*.js");
  const regx = new RegExp("\\./([^\\/]+)/(.*)\\.js");
  const all = glob
    .sync(gl)
    .map((l) => l.replace(distPath, "."))
    .filter(
      (l) => l !== `./${basename(packageOthers.module)}` || l.startsWith("cjs")
    );

  console.log(regx);
  console.log(all);

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
    // type: "module",
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
  console.log(`Created package.json in ${targetPath}`);
}

async function includeFileInBuild(file) {
  const sourcePath = resolve(packagePath, file);
  const targetPath = resolve(distPath, basename(file));
  await copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function run() {
  try {
    await createPackageFile();
    await includeFileInBuild("./README.md");
    // await includeFileInBuild('../../LICENSE');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
