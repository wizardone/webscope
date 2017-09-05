import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let jsonData = require('../data.json')

const state = jsonData
const getters = {
  getUser: (state, getters) => (id) => {
    return state.users.find((user) => user.id === id)
  },
  getDocument: (state, getters) => (id) => {
    return state.documents.find((document) => document.id === id)
  }
}
const actions = {}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
