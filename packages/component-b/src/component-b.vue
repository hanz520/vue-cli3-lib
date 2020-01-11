<template>
  <div>我是组件B：{{msg}}</div>
</template>

<script>
export default {
  name: 'componentB',
  props: {
    msg: {
      type: String,
      default: '默认值'
    }
  }
}
</script>

<style>
.stylebbb{
  color: red;
}
</style>
