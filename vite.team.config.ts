// Build do site "Team Vecina" (tratamento, ferramentas, aula, quiz) que vive
// junto do site principal. Gera dist/public/tratamento.html + assets/tv-*,
// e copia team-vecina/public (downloads/, images/, favicon) para a raiz.
// Roda DEPOIS do build principal (que limpa dist/public).
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

const ROOT = path.resolve(import.meta.dirname, "team-vecina");

// No dev, qualquer rota sem extensão (/ferramentas, /aula…) abre tratamento.html.
function devHistoryFallback(): Plugin {
  return {
    name: "team-vecina-history-fallback",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ?? "/";
        const pathname = url.split("?")[0];
        if (
          req.method === "GET" &&
          !pathname.startsWith("/@") &&
          !pathname.startsWith("/src/") &&
          !pathname.startsWith("/node_modules/") &&
          !path.extname(pathname)
        ) {
          req.url = "/tratamento.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), devHistoryFallback()],
  resolve: {
    alias: {
      "@": path.resolve(ROOT, "src"),
    },
  },
  envDir: import.meta.dirname,
  root: ROOT,
  base: "/",
  publicDir: path.resolve(ROOT, "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(ROOT, "tratamento.html"),
      output: {
        entryFileNames: "assets/tv-[name]-[hash].js",
        chunkFileNames: "assets/tv-[name]-[hash].js",
        assetFileNames: "assets/tv-[name]-[hash][extname]",
      },
    },
  },
  server: {
    port: 3001,
    host: true,
  },
});
