import { Commit, GetterTree, MutationTree, ActionTree } from 'vuex'

export interface RootStateTypes {
    userName: string
}
// initial
const state: RootStateTypes = {
    userName: '陈小生'
}

// getters
const getters: GetterTree<RootStateTypes, any> = {
    userName: (state: RootStateTypes) => state.userName
}

// mutations
const mutations: MutationTree<RootStateTypes> = {
    SET_USERNAME(state: RootStateTypes, data: string) {
        state.userName = data
    }
}

// actions
const actions: ActionTree<RootStateTypes, any> = {
    SET_USERNAME({ commit, state: RootStateTypes }, data: string) {
        commit('SET_USERNAME', data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
