/*
 * @Author: zhangpenghua
 * @Date: 2022-12-10 19:26:32
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-12-10 19:29:41
 */
import type  { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/add-item',
  },
  {
    path: '/add-item',
    component: () => import('@/views/addItem/index.vue'),
    meta: {
      title: '新增事项'
    }
  }
];

export default routes;