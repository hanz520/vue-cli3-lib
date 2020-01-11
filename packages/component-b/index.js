import componentB from './src/component-b.vue'

// 安装组件
const install = (Vue) => {
  Vue.component(componentB.name, componentB)
}

componentB.install = install

// // 供直接html引用vuejs使用
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default componentB
