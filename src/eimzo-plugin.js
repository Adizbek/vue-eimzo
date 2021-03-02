import './eimzo/e-imzo.js'
import './eimzo/e-imzo-client.js'
import EIMZO from '@/eimzo/EIMZO'

const EIMZOVuePlugin = {}

/**
 * @param Vue
 */
EIMZOVuePlugin.install = function (Vue) {
  Vue.prototype.$eimzoSign = function (payload) {
    console.log(payload)
  }
  Vue.prototype.$eimzo = new EIMZO()
}

export default EIMZOVuePlugin
