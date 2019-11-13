import Vue from 'nativescript-vue'
import routes from '~/router'
import store from "./store/index.js";
import axios from "axios"
const application = require("tns-core-modules/application");

const httpModule = require("http");
Vue.config.silent = (TNS_ENV === 'production')
Vue.prototype.$router = routes
Vue.prototype.$axios = axios
Vue.prototype.$httpModule = httpModule
Vue.prototype.$application = application
Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);


new Vue({
  store,
  render (h) {
        this.$store.dispatch('Status/checkStatus')
        if(Object.keys(this.$store.getters['Status/getStatus']).length === 0) {
          return h('frame', [h(routes.Login)])
          }
        else {
          return h('frame', [h(routes.Prospect)])
        }
  }
}).$start()
