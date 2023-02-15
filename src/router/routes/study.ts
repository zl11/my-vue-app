/*
 * @Author: zhangpenghua
 * @Date: 2022-11-30 15:41:04
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2023-01-19 17:55:36
 */
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/study'
  },
  {
    path: '/study',
    component: () => import('@/views/study/index.vue'),
    meta: {
      title: '学习页面'
    }
  },
  {
    path: '/study-class',
    component: () => import('@/views/study/class.vue'),
    meta: {
      title: '绑定html class'
    }
  }
];

export default routes;