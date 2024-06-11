import { defineConfig } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react";

const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: [
        resolvePath("./src/index.ts"),
        resolvePath("./src/preview.tsx"),
        resolvePath("./src/manager.ts"),
      ],
      fileName: (format, entryName) => {
        return `${entryName}.${format}`;
      },

      formats: ["es", "cjs"],
    },

    rollupOptions: {
      output: {
        entryFileNames(chunkInfo) {
          return `${chunkInfo.name}.js`;
        },
      },
    },

    watch: {
      include: "src/**",
    },
    outDir: "./dist",
    emptyOutDir: false,
  },
});
