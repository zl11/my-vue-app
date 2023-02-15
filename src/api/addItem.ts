/*
 * @Author: zhangpenghua
 * @Date: 2022-12-10 21:00:17
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-12-10 21:05:51
 */
import axios from 'axios';

const api = {
  addItem: 'http://ganfutong.jiangxi.gov.cn:30014/api-gateway/jpaas-jmportal-server/manager/contentconfig/add',
}

export function addItem(data: any) {
  return axios({
    url: api.addItem,
    method: 'POST',
    data: data,
  })
}