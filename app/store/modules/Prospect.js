const state = () => ({
    search: {},
    anagrafica: {}
    //anagrafica
})

const getters = {
    getSearch(state){
        return state.search
    },
    getAnagrafica(state){
        return state.anagrafica
    }
}
  
const mutations = {
    setSearch(state, payload){ 
        state.search = payload 
    },
    setAnagrafica(state, payload){
        state.anagrafica = {...payload}
    },
    clear(state){
        console.log("sono entrato nella mutation")
        state.search = {}
    }
}
  
const actions = {
    setSearch(e, payload) { e.commit('setSearch', payload) },
    setAnagrafica(e, payload) { e.commit('setAnagrafica', payload) },
    clear(e){ e.commit('clear')}
}
        
export default {
    namespaced : true,
    name: "Prospect",
        state,
        mutations,
        getters,
        actions
}