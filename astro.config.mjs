// @ts-check
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), vue()],
  site: 'https://EstefanoC.github.io',
  base: 'Astro',
})
