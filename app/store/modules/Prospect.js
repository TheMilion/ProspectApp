const state = () => ({
    search: {},
    anagrafica: {},
    contratto: {},
})

const getters = {
    getSearch(state) { return { ...state.search } },
    getAnagrafica(state){ return state.anagrafica },
    getContratto(state) { return { ...state.contratto } } 
}

const mutations = {
    setSearch(state, payload){ state.search = payload },
    setAnagrafica(state, payload){ state.anagrafica = {...payload} },
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
    setAnagrafica(e, payload) { e.commit('setAnagrafica', payload) },
    setContratto(e, payload) { e.commit('setContratto', payload) },
    clear(e, payload){ e.commit('clear', payload) },
    clearAll(e){ e.commit('clearAll')}
}
        
export default {
    namespaced : true,
    name: "Prospect",
        state,
        mutations,
        getters,
        actions
}