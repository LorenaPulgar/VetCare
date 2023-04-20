import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: null,
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    }
  },
  // Recibe datos de onAuthStateChanged (main.js)
  actions: {
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
    }
  },
  // Devuelve true/false si existe un usuario
  getters: {
    existeUsuario(state){
      if(state.usuario === null){
        return false;
      }else{
        return true;
      }
    }
  },
  modules: {
  }
})