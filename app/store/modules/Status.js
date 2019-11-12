const appSettings = require("tns-core-modules/application-settings");
const state = () => ({
  status: {},
})
const getters = {
  getStatus(state){
    return state.status
  }
}

const mutations = {
  setStatus(state,object){
         state.status = object
         appSettings.setString("Status", JSON.stringify(object))
         console.log("provaaaaaaaaaaaaa", appSettings.getString('Status'))
         
  },

  checkStatus(state){
    if(Object.keys(state.status).length === 0) 
    state.status = JSON.parse(appSettings.getString('Status'))
    }
  }

const actions = {
    setStatus(e,object){
      e.commit('setStatus',object)
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