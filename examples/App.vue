<template>
  <div id="app">
    只有一行文字
    <componentA />
  </div>
</template>

<script>
import componentA from './component-a.js'
export default {
  name: 'app',
  components: {
    componentA
  }
}
</script>

<style lang="scss">
</style>
