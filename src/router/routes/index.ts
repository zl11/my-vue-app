/*
 * @Author: zhangpenghua
 * @Date: 2022-08-08 10:49:22
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-29 16:16:59
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/todo-list',
    component: () => import('@/views/todoList/index.vue'),
    meta: {
      title: '任务列表'
    }
  }
];

export default routes;