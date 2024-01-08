import './eimzo/e-imzo.js'
import './eimzo/e-imzo-client.js'
import EIMZO from '@/eimzo/EIMZO'
import {inject} from "vue";

const EIMZOVuePlugin = {}

export const VueEIMZO = new EIMZO();

EIMZOVuePlugin.install = function (app) {
    app.provide('eimzo', VueEIMZO)
}

/**
 * @returns {EIMZO}
 */
export function useEIMZO() {
    return inject('eimzo', VueEIMZO);
}

export default EIMZOVuePlugin
