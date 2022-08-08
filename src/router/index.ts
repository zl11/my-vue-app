import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import routes from './routes/index'


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  strict: true,
})

export function setupRouter(app: App<Element>) {
  app.use(router);
}