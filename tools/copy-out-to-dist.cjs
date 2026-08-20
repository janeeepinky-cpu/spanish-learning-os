const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const source = path.join(root, "out");
const target = path.join(root, "dist");

if (!fs.existsSync(source)) {
  throw new Error("Next static export directory was not created.");
}

fs.rmSync(target, { recursive: true, force: true });

function copyDirectory(from, to) {
  fs.mkdirSync(to, { recursive: true });

  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const sourcePath = path.join(from, entry.name);
    const targetPath = path.join(to, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

copyDirectory(source, target);
fs.writeFileSync(path.join(target, ".nojekyll"), "");
