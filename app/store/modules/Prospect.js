const state = () => ({
    //search
    tipoPersona: '',
    campoSearch: '',

    //anagrafica
})

const getters = {
    getSearch(state){
        return { 'tipoPersona': state.tipoPersona, 'campoSearch': state.campoSearch }
    }
}
  
const mutations = {
    setSearch(state, payload){
        state.tipoPersona = payload.tipoPersona
        state.campoSearch = payload.campoSearch
    },
    clear(state){
        state.tipoPersona = '',
        state.campoSearch = ''
    }
}
  
const actions = {
    setSearch(e, payload) { e.commit('setSearch', payload) },
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