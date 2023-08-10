import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    }
  })],
  build: {
    rollupOptions: {
      // overwrite default .html entry
      input: './components/index.js',
      output: {
        entryFileNames: `components.js`,
        chunkFileNames: `components.js`,
        assetFileNames: `[name].[ext]`
      }
    },
    outDir: './assets',
    emptyOutDir: false,
    assetsDir: '.',
  },
})
