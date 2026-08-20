const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const node = "C:\\Users\\EDY\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe";
const next = path.join(root, "node_modules", "next", "dist", "bin", "next");
const nodeBin = "C:\\Users\\EDY\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin";
const binDir = "C:\\Users\\EDY\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\bin";
const out = fs.openSync(path.join(root, "dev-server.log"), "w");
const err = fs.openSync(path.join(root, "dev-server.err.log"), "w");

const env = {
  ...process.env,
  Path: `${nodeBin};${binDir};${process.env.Path || process.env.PATH || ""}`,
};

if (!process.argv.includes("--daemon-child")) {
  const daemon = spawn(node, [__filename, "--daemon-child"], {
    cwd: root,
    detached: true,
    windowsHide: true,
    stdio: "ignore",
    env,
  });

  daemon.unref();
  console.log(daemon.pid);
  process.exit(0);
}

const child = spawn(node, [next, "start", "--hostname", "127.0.0.1", "--port", "3000"], {
  cwd: root,
  windowsHide: true,
  stdio: ["pipe", out, err],
  env,
});

child.on("exit", (code) => process.exit(code ?? 0));
setInterval(() => {}, 60_000);
