import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createServer } from "vite";

const root = dirname(fileURLToPath(import.meta.url));
process.chdir(root);
const server = await createServer({ root, server: { host: true, port: 5173 } });
await server.listen();
server.printUrls();
