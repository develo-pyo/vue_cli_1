import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//https://www.youtube.com/watch?v=5lDEee-Ur34&list=PLB7CpjPWqHOtYP7P_0Ls9XNed0NLvmkAh&index=13

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
