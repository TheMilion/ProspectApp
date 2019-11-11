import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import Status from './modules/Status'



Vue.use(Vuex);

let debug = process.env.NODE_ENV !== 'production'

const store =  new Vuex.Store({
    modules: {
        Status
    },
    strict: debug
  })

export default store