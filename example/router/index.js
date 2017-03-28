import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Readme from 'components/Readme'
import Directive from 'components/Directive'
import Event from 'components/Event'
import Transition from 'components/Transition'
import Test from 'components/Test'

Vue.use(Router);

export default new Router({

  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/readme',
      name: 'Readme',
      component: Readme
    }, {
      path: '/directive',
      name: 'Directive',
      component: Directive
    }, {
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/transition',
      name: 'Transition',
      component: Transition
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }


  ]
})
