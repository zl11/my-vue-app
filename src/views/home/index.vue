<!--
 * @Author: zhangpenghua
 * @Date: 2022-08-08 11:27:13
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-11-30 15:49:17
-->
<template>
<button @click="jumpToList">开始任务</button>
<button @click="toStudy">vue3学习</button>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter();
const jumpToList = function() {
  router.push('/todo-list')
};
const toStudy = () => {
  router.push({
    path: '/study'
  })
}
</script>

<style lang='less'>
</style>