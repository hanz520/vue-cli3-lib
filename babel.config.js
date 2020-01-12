module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
    [
      '@vue/cli-plugin-babel/preset',
      {
        "useBuiltIns": false    // 当使用 Vue CLI 来构建一个库或是 Web Component 时，推荐给 @vue/babel-preset-env 传入 useBuiltIns: false 选项。这能够确保你的库或是组件不包含不必要的 polyfills。通常来说，打包 polyfills 应当是最终使用你的库的应用的责任。
      }
    ]
  ]
}
