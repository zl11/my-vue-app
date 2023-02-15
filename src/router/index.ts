/*
 * @Author: zhangpenghua
 * @Date: 2022-08-08 10:49:08
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-12-13 11:05:18
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import routes from './routes/index';
import study from './routes/study';
import addItem from './routes/addItem';


const router = createRouter({
  history: createWebHashHistory(),
  routes: study,
  strict: true,
})

export function setupRouter(app: App<Element>) {
  app.use(router);
}