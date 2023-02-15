/*
 * @Author: zhangpenghua
 * @Date: 2022-08-25 16:25:29
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-29 15:48:03
 */
import type { AxiosRequestConfig } from 'axios';
import { setupHeaders } from './setHeaders';
import type { IrequestConfig, Iresponse } from './types';
import { showLoading } from '../../hooks/useMessage';
import { Dialog } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter();

function logoutByException(config: {title: string, content: string}) {
  sessionStorage.clear();
  router.push('/');
  window.location.reload();
  Dialog({
    title: config.title,
    message: config.content,
  }).then(() => {});
}

// 请求前拦截
export const requestInterceptor = function(requestConfig: IrequestConfig) {
  setupHeaders(requestConfig);
  if(requestConfig.extra?.loading) {
    showLoading();
  }
}