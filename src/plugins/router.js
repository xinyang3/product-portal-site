import Vue from 'vue'
import Router from 'vue-router'

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
