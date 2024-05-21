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
                about: resolve(__dirname, 'nested/about.html'),
                contact: resolve(__dirname, 'nested/contact.html'),
            },
        },
    },
})