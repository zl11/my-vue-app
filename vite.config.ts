/*
 * @Author: zhangpenghua
 * @Date: 2022-08-08 09:53:24
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2023-02-13 19:06:47
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   dedupe: ['vue'],
  //   alias: [
  //     {
  //       find: /@\//,
  //       replacement: pathResolve('src') + '/',
  //     },
  //     {
  //       find: /#\//,
  //       replacement: pathResolve('types') + '/',
  //     },
  //   ],
  // },
  resolve: {
    dedupe: ['vue'],
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /#\//,
        replacement: pathResolve('type') + '/',
      }
    ]
  },
  server: {
    port: 3777,
    host: '0.0.0.0',
  }
})
