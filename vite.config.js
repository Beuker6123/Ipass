/* eslint-disable import/no-extraneous-dependencies */
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    base: "/Ipass/",
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                project: resolve(__dirname, 'nested/projecten.html'),
                contact: resolve(__dirname, 'nested/contact.html'),
                OfferteAanvraag_01: resolve(__dirname, 'nested/OfferteAanvraag_01.html')
            },
        },
    },
})