import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      eslint({ useEslintrc: true }),
      react(),
      svgr(),
      vanillaExtractPlugin({ identifiers: process.env.NODE_ENV === "development" ? "debug" : "short" }),
    ],
    server: {
      port: 3007,
    },
    css: {
      devSourcemap: true,
    },
    build: {
      rollupOptions: {
        // https://rollupjs.org/configuration-options/
        input: {
          demo: "index.html",
        },
        output: {
          dir: "build",
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split(".")
            let extType = info[info.length - 1]

            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = "img"
            } else if (/woff|woff2/.test(extType)) {
              extType = "fonts"
            }

            return `assets/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
        },
      },
      cssMinify: true,
      cssCodeSplit: true,
    },
    base: "./",
  }
})
