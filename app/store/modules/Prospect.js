import moment from 'moment'

const state = () => ({
    search: {},
    anagrafica: {},
    contratto: {},
})

const getters = {
    getSearch(state) { return { ...state.search } },
    getContratto(state) { return { ...state.contratto } } 
}
  
const mutations = {
    setSearch(state, payload){ state.search = payload },
    setContratto(state, payload) { state.contratto = payload },
    clear(state, payload){ state[payload] = {} },
    clearAll(state){ 
        state.search = {}
        state.anagrafica = {}
        state.contratto = {}
    }
}
  
const actions = {
    setSearch(e, payload) { e.commit('setSearch', payload) },
    setContratto(e, payload) { e.commit('setContratto', payload) },
    clear(e, payload){ e.commit('clear', payload) },
    clearAll(e){ e.commit('clear')}
}
        
export default {
    namespaced : true,
    name: "Prospect",
        state,
        mutations,
        getters,
        actions
}