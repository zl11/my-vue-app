/*
 * @Author: zhangpenghua
 * @Date: 2022-08-30 10:48:51
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-30 17:23:24
 */
import { createPinia } from 'pinia';
import type { App } from 'vue'

const store = createPinia();
export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }