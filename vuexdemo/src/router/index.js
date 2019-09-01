import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent
    }
  ]
})
