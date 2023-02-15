/*
 * @Author: zhangpenghua
 * @Date: 2022-08-29 11:11:13
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-29 11:26:22
 */
import  { Toast } from 'vant'
export function showLoading(message = '加载中...', opts?: any) {
  Toast.loading({
    duration: 0,
    message: message,
    forbidClick: true,
    ...(opts || {})
  });
}