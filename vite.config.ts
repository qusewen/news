import {defineConfig} from 'vite'

export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/styles/variables.scss";`,
            },
        },
    },
})