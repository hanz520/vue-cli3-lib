import componentA from './component-a/index.js'
import componentB from './component-b/index.js'

const components = {
  componentA,
  componentB
}

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

export default {
  version: '1.0.0',
  install,
  ...components
}