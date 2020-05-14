import VueFurcateTree from './vue-furcate-tree'

const install = Vue => {
  if (install.installed) {
    return
  }

  install.installed = true

  Vue.component(VueFurcateTree.name, VueFurcateTree)
}

VueFurcateTree.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFurcateTree)
}

export default VueFurcateTree