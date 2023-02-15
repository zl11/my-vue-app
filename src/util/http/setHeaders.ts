/*
 * @Author: zhangpenghua
 * @Date: 2022-08-25 16:36:56
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-29 09:59:54
 */
import type { AxiosRequestConfig } from 'axios';
import { isEmptyStr, sortObjByKey } from '../util'

export const setupHeaders = (config: AxiosRequestConfig) => {
  if(config && config.headers) {
    let timestamp = Date.now() + '';
    let signContent: ISimpleObject = {
      header: {},
      body: {},
    };
    if(config.params) {
      signContent.body = config.params;
    } else if(config.data) {
      if(config.data instanceof FormData) {
        //@ts-ignore
        for(let pair of config.data.entries()) {
          const key = pair[0],
          val = pair[1];
          if(key == 'image' || key == 'images' || key == 'file' || key == 'files' || isEmptyStr(key)) {
            continue;
          }
          signContent.body[key] = val;
        }
        signContent.body = sortObjByKey(signContent.body)
      } else {
        signContent.body = config.data;
      }
    }
    if(config.headers['content']) {
      signContent.headers['content'] = config.headers['content'];
    }
  }
}