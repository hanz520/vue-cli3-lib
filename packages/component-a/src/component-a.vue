<template>
  <div>我是组件A：{{msg}}</div>
</template>

<script>
export default {
  name: 'componentA',
  props: {
    msg: {
      type: String,
      default: '默认值'
    }
  }
}
</script>

<style>
.styleaaa{
  color: red;
}
</style>
