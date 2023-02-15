<!--
 * @Author: zhangpenghua
 * @Date: 2022-11-30 15:40:31
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2023-02-15 21:47:46
-->
<template>
  <pre>
    {{
      obj
    }}
  </pre>
  {{zl}}
  <my-prop :num="12"> </my-prop>
</template>

<script setup lang='ts'>

import { reactive, inject, ref, onMounted, provide } from 'vue';
import MyProp from '@/views/study/modules/MyProp.vue';

const obj = reactive([
  "zph",
  // "lyj",
  "张鹏华啊"
]);
const zl = ref<any>(37);
console.log(zl);

const test = ref();
onMounted(() => {
  zl.value = inject('zph');
  provide('zl', {
    name: 'zzz'
  })
  test.value = inject('zzz', () => new Date().getTime());
  console.log(test.value());

});

</script>

<style lang='less' scoped>
</style>