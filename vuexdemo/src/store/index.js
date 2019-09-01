import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

//导出store
export default new Vuex.Store({
    state: {
        count: 0
    },
    // actions: {
    //     countAdd(context,num){
    //         context.commit('countAdd',num)
    //     }
    // },
    mutations: {
        countAdd(state,num){
            state.count+=num
        }
    }
})