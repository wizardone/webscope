import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let jsonData = require('../data.json')

/*
 * Read the JSON file and set it up as state of the application in vuex
 * Merge any additional computed properties in the state as well
 */
const state = Object.assign(jsonData, {
  completedTasksCount: jsonData.tasks.filter((task) => task.status === 1).length,
  upcomingTasksCount: jsonData.tasks.filter((task) => task.status === 0).length,
  overdueTasksCount: jsonData.tasks.filter((task) => new Date(task.dueDate).getTime() > new Date().getTime()).length
})

const getters = {
  getUser: (state, getters) => (id) => {
    return state.users.find((user) => user.id === id)
  },
  getDocument: (state, getters) => (id) => {
    return state.documents.find((document) => document.id === id)
  }}
const actions = {}

const mutations = {
  addTask (state, payload) {
    state.tasks.push(payload.task)
  },
  updateUpcomingTasksCount (state) {
    state.upcomingTasksCount++
  },
  updatecompletedTasksCount (state) {
    state.completedTasksCount++
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
