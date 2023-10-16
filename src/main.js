import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './Routes'
console.log(router);
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VeeValidate)
new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')
