import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Custom plugin to add data-cookieconsent="ignore" to the main script
const addCookieConsentIgnore = () => {
  return {
    name: 'add-cookie-consent-ignore',
    transformIndexHtml(html) {
      return html.replace(
        /<script type="module" crossorigin/,
        '<script type="module" crossorigin data-cookieconsent="ignore"'
      )
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    addCookieConsentIgnore()
  ],
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
