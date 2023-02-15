<!--
 * @Author: zhangpenghua
 * @Date: 2022-12-10 19:20:43
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-12-13 11:03:29
-->
<template>
  <van-uploader :after-read="doReadExcelFile" accept="" />
  <div class="submit">
    <van-button type="primary" @click="add()">添加</van-button>
  </div>
  
</template>

<script setup lang="ts">
import * as xlsx from "xlsx";
import { ref } from "vue";
import axios from "axios";
const readFile = (file: any) => {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (ev: any) => {
      resolve(ev.target.result);
    };
  });
};
const list = ref<any>([]);
const errList = ref<any>([]);
let doReadExcelFile = async (file: any) => {
  console.log(file.file);

  let dataBinary = await readFile(file.file);

  let workBook = xlsx.read(dataBinary, { type: "binary", cellDates: true });
  let workSheet = workBook.Sheets[workBook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(workSheet);
  list.value = data;
  console.log(data);
};
const add = () => {
  // for(let i=42;i<list.value.length;i++) {
  for(let i=303;i<list.value.length;i++) {
    let item = list.value[i];
    let form = new FormData();
    form.append('title',item.itemName);
    form.append('jumpName',item.url);
    form.append('jumpUrl',item.url);
    form.append('descriptionName',item.itemName);
    form.append('siteId', 'ca1fb5f906e44e69a9e0a4bb336195b2');
    form.append('picString', '');
    form.append('iconPath', '');
    form.append('componentType', '6');
    form.append('selectorType', '5');
    form.append('dimensionStartTime', '');
    form.append('colId', 'c63ff30980264997b4316e1ff3ca363c');
    axios({
      url: 'http://ganfutong.jiangxi.gov.cn:30014/api-gateway/jpaas-jmportal-server/manager/contentconfig/add',
      method: 'POST',
      data: form,
      headers: {
        'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzA5MTg0NjUsImlhdCI6MTY3MDkwMDQ2NSwidXNlcm5hbWUiOiJGWlNZWSJ9.z8PcovNKaQYYktGgTJi-K6EORF87k0vjNYb8D7mNs94',
        
      }
    }).then((res) => {
      console.log(res);
      if(res.data.code != '200') {
        errList.value.push({
        item: item.itemName,
        err: res
      });
      }
    }).catch((err) => {
      console.log(err);
      errList.value.push({
        item: item.itemName,
        err: err
      });
    })
  }
  
};
</script>

<style lang="less" scoped>
</style>
