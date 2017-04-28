/**
 * @file Pallas对象输出
 * @author zhaoyadong
 */
import Components from './components';
import Directives from './directives';
import Toast from './util/toast';

require('./style/main.styl');

/* eslint-disable */
function Pallas(Vue) {
    Object.keys(Directives).forEach(key => {
        Vue.directive(key, Directives[key]);
    });

    Object.keys(Components).forEach(key => {
        Vue.component(key, Components[key]);
    });

    Vue.prototype.$pallas = {
        toast: Toast
    };
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Pallas);
}

module.exports = Pallas;
