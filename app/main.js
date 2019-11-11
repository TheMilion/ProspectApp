import Vue from 'nativescript-vue'
import routes from '~/router'
import store from "./store/index.js";

Vue.config.silent = (TNS_ENV === 'production')
Vue.prototype.$router = routes

new Vue({
  store,
  render (h) {
        this.$store.dispatch('Status/checkStatus')
        if(this.$store.getters['Status/getStatus'] != '') {
          return h('frame', [h(routes.Prospect)])
        }
        else {
          return h('frame', [h(routes.Login)])
        }
  }
}).$start()
