<!--
 * @Author: zhangpenghua
 * @Date: 2023-01-19 17:54:25
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2023-01-20 13:45:50
-->
<template>
  <div :class="zl">绑定class的div</div>
  
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const zl = ref('purple');
</script>

<style lang='less' scoped>
.purple {
  color: purple;
}
</style>