import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import Status from './modules/Status'
import Prospect from './modules/Prospect'



Vue.use(Vuex);

let debug = process.env.NODE_ENV !== 'production'

const store =  new Vuex.Store({
    modules: {
        Status,
        Prospect
    },
    strict: debug
  })

export default store