<!--
 * @Author: zhangpenghua
 * @Date: 2022-08-30 10:12:26
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-11-30 15:11:56
-->
<template>
  <div class="item" v-for="(item, index) in list">
    <p :style="{ color }" @click="toggleColor">ddkoekode</p>
    <p :style=" {color }" > {{item}}</p>
    {{ item }}
    <div class="delete">
      <button @click="listStore.deleteItem(index)">删除</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../../store/modules/list";
const listStore = useStore();
const zlStore = useStore();
const color = ref("green");
const list = listStore.list;
console.log(listStore === zlStore);
const toggleColor = () => {
  color.value = color.value === 'green' ? 'aqua' : 'green'
}
</script>

<style lang="less">
.item {
  display: flex;
  justify-content: space-between;
  .delete {
    display: none;
  }
  &:hover {
    background-color: aqua;
  }
  &:hover .delete {
    display: block;
  }
}
</style>
