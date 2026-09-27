import { copyFile, rename } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const routePath = path.join(projectRoot, "app", "api", "saved", "route.ts");
const backupPath = path.join(projectRoot, "app", "api", "saved", "route.cloudflare.ts.bak");
const vercelRoutePath = path.join(projectRoot, "scripts", "vercel", "saved-route.ts.txt");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

await rename(routePath, backupPath);

try {
  await copyFile(vercelRoutePath, routePath);

  const exitCode = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [nextBin, "build"], {
      cwd: projectRoot,
      env: {
        ...process.env,
        NEXT_PUBLIC_WIJHAH_STORAGE_MODE: "local",
      },
      stdio: "inherit",
    });

    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (signal) reject(new Error(`Next.js build terminated by ${signal}`));
      else resolve(code ?? 1);
    });
  });

  if (exitCode !== 0) process.exitCode = exitCode;
} finally {
  await rename(backupPath, routePath);
}
