import Vue from 'vue'
import Router from 'vue-router'
import Beep from '@/components/Beep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beep',
      component: Beep
    }
  ]
})
