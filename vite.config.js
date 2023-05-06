import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      "process.env": process.env,
      __VALUE__: `"${process.env.VALUE}"`,
    },
    esbuild: {
      loader: "jsx",
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
          ".ts": "tsx",
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  });
};
