import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Item from './views/Item'
import About from './views/About'
import Contact from './views/Contact'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: "/",
      component: Home,
      props: true
    },
    {
      path: "/item/:id/:slug",
      component: Item,
      props: true
    },
    {
      path: "/about",
      component: About,
      props: true
    },
    {
      path: "/contact",
      component: Contact,
      props: true
    },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')