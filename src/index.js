import Components from './components'
import Directives from './directives'

function Pallas(Vue) {
  Object.keys(Directives).forEach(key => {
    Vue.directive(key, Directives[key])
  })

  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  Vue.prototype.$pallas = {

  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Pallas);
}

module.exports = Pallas;
