/**
 * @file 测试main文件
 * @author zhaoyadong<zhaoyadong@baidu.com>
 */
import Vue from 'vue';
import App from './App';
import router from './router/index';
import pallas from '../src/index.js';
import Markup from './components/Markup';
import highlight from 'highlight.js/lib/highlight.js';
import highlightJS from 'highlight.js/lib/languages/javascript';
import highlightXML from 'highlight.js/lib/languages/xml';

highlight.registerLanguage('js', highlightJS);
highlight.registerLanguage('html', highlightXML);

require('offline-plugin/runtime').install();

Vue.use(pallas);
Vue.component('Markup', Markup);

new Vue({
    el: '#app',
    name: 'pallas',
    router,
    render: h => h(App)
});
