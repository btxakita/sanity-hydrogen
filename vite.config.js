import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen({experimental: {css: 'global'}})],
  resolve: {
    alias: [{find: /^~\/(.*)/, replacement: '/src/$1'}],
  },
  optimizeDeps: {include: [
    '@headlessui/react',
    'clsx',
    'tailwind-merge',
    'pluralize',
  ]},
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    maxThreads: 1,
    minThreads: 1,
  },
});
