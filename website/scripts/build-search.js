const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoRoot = path.join(__dirname, "..", "docusaurus-search-local");
const inner = path.join(repoRoot, "docusaurus-search-local");
const yarn = path.join(repoRoot, ".yarn", "releases", "yarn-4.12.0.cjs");
const tsc = path.join(repoRoot, "node_modules", "typescript", "bin", "tsc");
const copyfiles = path.join(repoRoot, "node_modules", "copyfiles", "copyfiles");

if (!fs.existsSync(yarn)) {
  throw new Error(
    `Avolites search-local submodule is missing or not checked out.\nExpected: ${yarn}\nRun: git submodule update --init --recursive`
  );
}

const env = { ...process.env, YARN_NODE_LINKER: "node-modules" };

execFileSync(
  process.execPath,
  [yarn, "workspaces", "focus", "@easyops-cn/docusaurus-search-local"],
  { cwd: repoRoot, env, stdio: "inherit" }
);

const dist = path.join(inner, "dist");
fs.rmSync(dist, { recursive: true, force: true });

function compile(project, extraArgs) {
  execFileSync(
    process.execPath,
    [tsc, "-p", project, "--skipLibCheck", ...extraArgs],
    { cwd: inner, env, stdio: "inherit" }
  );
}

// Client pulls @docusaurus/module-type-aliases which needs a JSX namespace.
compile("tsconfig.client.json", ["--types", "node"]);
compile("tsconfig.server.json", []);
compile("tsconfig.types.json", []);

execFileSync(
  process.execPath,
  [copyfiles, "-u", "3", "src/client/theme/**/*.css", "dist/client/client/theme"],
  { cwd: inner, env, stdio: "inherit" }
);
execFileSync(
  process.execPath,
  [copyfiles, "-u", "1", "locales/*.json", "dist/locales"],
  { cwd: inner, env, stdio: "inherit" }
);
