<!--
 * @Author: zhangpenghua
 * @Date: 2022-12-14 16:38:08
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-12-14 16:42:36
-->
<template>
  {{
    num
  }}
</template>

<script setup lang='ts'>
const props = defineProps({
  num: {
    type: Number,
    required: true,
    validator(value): boolean {
      return value == 37
    }
  }
})
</script>

<style lang='less' scoped>
</style>