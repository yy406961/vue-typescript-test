import Vue from 'vue'
import Vuex from 'vuex'
// modules
import { user } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       user
    },
})
