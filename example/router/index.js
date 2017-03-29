import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Slider from '../views/Slider.vue'
import Switch from '../views/Switch.vue'

Vue.use(Router)

const router = new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'slider', path: '/slider', component: Slider},
    { name: 'slider', path: '/switch', component: Switch},
  ]
})

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if(top > 0){
    const timer = setInterval(()=>{
      scrollTo(0, top)
      top -= 100
      if(top <= 0){
        scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 20)
  }
  next()
})

export default router
