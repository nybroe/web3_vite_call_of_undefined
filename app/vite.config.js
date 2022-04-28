import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import nodePolyfills from 'rollup-plugin-node-polyfills';

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1'
      }
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     https: "agent-base",
  //   },
  // },
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills(),
      ],
    },
    // commonjsOptions: {
    //   transformMixedEsModules: true,
    // },
  },
});
