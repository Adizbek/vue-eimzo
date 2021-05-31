import './eimzo/e-imzo.js'
import './eimzo/e-imzo-client.js'
import EIMZO from '@/eimzo/EIMZO'

const EIMZOVuePlugin = {}

export const VueEIMZO = new EIMZO();
/**
 * @param Vue
 */
EIMZOVuePlugin.install = function (Vue) {
  Vue.prototype.$eimzo = VueEIMZO
}

export default EIMZOVuePlugin
