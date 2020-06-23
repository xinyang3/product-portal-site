import Vue from 'vue'
import VueRouter from 'vue-router'

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/product-position-service',
      name: 'product-position-service',
      component: () => import('../views/products/position-service.vue')
    },
    {
      path: '/product-one',
      name: 'product-one',
      component: () => import('../views/products/product-one.vue')
    },
    {
      path: '/product-two',
      name: 'product-two',
      component: () => import('../views/products/product-two.vue')
    },
    {
      path: '/product-three',
      name: 'product-three',
      component: () => import('../views/products/product-three.vue')
    },
    {
      path: '/',
      redirect: '/product-position-service'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})