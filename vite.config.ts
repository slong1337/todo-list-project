import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const BASE_PATH = process.env.BASE_PATH

export default defineConfig({
  plugins: [
    remix({
      appDirectory: 'src',
      ssr: false,
      basename: BASE_PATH ? `${BASE_PATH}/` : '/',
      publicPath: BASE_PATH ? `${BASE_PATH}/` : '/',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
})
