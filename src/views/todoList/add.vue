<!--
 * @Author: zhangpenghua
 * @Date: 2022-08-30 10:13:06
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-09-02 10:18:10
-->
<template>
  <div class="add">
    <input v-model="data" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../../store/modules/list"
const data = ref("");
const listStore = useStore();
const keyDown = function () {
  document.addEventListener("keyup", function (e) {
    console.log("按键:", e.key);
    if (e.key === "Enter") {
      listStore.addItem(data.value);
      data.value = "";
    }
  });
};
keyDown();
</script>

<style lang="less"></style>
