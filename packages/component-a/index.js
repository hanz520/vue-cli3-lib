import componentA from './src/component-a.vue'

// 安装组件
const install = (Vue) => {
  Vue.component(componentA.name, componentA)
}

componentA.install = install

// // 供直接html引用vuejs使用
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default componentA
