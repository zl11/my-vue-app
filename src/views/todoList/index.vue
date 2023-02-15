<!--
 * @Author: zhangpenghua
 * @Date: 2022-08-29 16:06:29
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-30 10:25:47
-->
<template>
  <div class="todo-list">
    <Add></Add>
    <List></List>
    <Statistics></Statistics>
  </div>
  
</template>

<script setup lang='ts'>
import Add from './add.vue'
import List from './list.vue';
import Statistics from './statistics.vue';

</script>

<style lang='less'>
  .todo-list {
    width: 100%;
    height: 100%;
  }
</style>