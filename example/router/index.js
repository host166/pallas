/**
 * @file 测试router文件
 * @author zhaoyadong
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Switch from '../views/Switch.vue';
import Range from '../views/Range.vue';
import Tag from '../views/Tag.vue';
import Multi from '../views/Multi.vue';
import Toast from '../views/Toast.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {name: 'home', path: '/', component: Home},
        {name: 'about', path: '/about', component: About},
        {name: 'switch', path: '/switch', component: Switch},
        {name: 'range', path: '/range', component: Range},
        {name: 'tag', path: '/tag', component: Tag},
        {name: 'multi', path: '/multi', component: Multi},
        {name: 'toast', path: '/toast', component: Toast}
    ]
});

router.beforeEach((to, from, next) => {
    let top = document.body.scrollTop;
    if (top > 0) {
        const timer = setInterval(()=>{
            scrollTo(0, top);
            top -= 100;
            if (top <= 0) {
                scrollTo(0, 0);
                clearInterval(timer);
            }
        }, 20);
    }
    next();
});

export default router;
