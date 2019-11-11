const appSettings = require("tns-core-modules/application-settings");
const state = () => ({
  status: '',
})
const getters = {
  getStatus(state){
    return state.status
  }
}

const mutations = {
  setStatus(state,string){
         state.status = string
         appSettings.setString("Status", string)
         
  },

  checkStatus(state,string){
    if(state.status == '') 
    state.status = appSettings.getString('Status')
    }
  }

const actions = {
    setStatus(e,string){
      e.commit('setStatus',string)
    },

    checkStatus(e){
      e.commit('checkStatus')
  }
}
      
export default {
  namespaced : true,
  name: "Status",
    state,
    mutations,
    getters,
    actions
  }