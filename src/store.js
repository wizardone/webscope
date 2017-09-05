import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let jsonData = require('../data.json')

const state = jsonData
const getters = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
