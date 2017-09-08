import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const jsonData = require('../data.json')

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
  getUsers: (state, getters) => {
    return state.users
  },
  getDocument: (state, getters) => (id) => {
    return state.documents.find((document) => document.id === id)
  },
  getDocuments: (state, getters) => {
    return state.documents
  },
  getNextId: (state, getters) => {
    const currentId = Math.max(...state.tasks.map((task) => task.id))
    let nextId = currentId + 1

    return nextId
  }
}
const actions = {}

const mutations = {
  addTask (state, payload) {
    state.tasks.unshift(payload.task)
  },
  updateTaskStatus (state, payload) {
    let task = state.tasks.find((task) => task.id === payload.id)
    task.status = 1
  },
  updateUpcomingTasksCount (state) {
    state.upcomingTasksCount++
  },
  updateCompletedTasksCount (state) {
    state.completedTasksCount++
  },
  decreaseUpcomingTasksCount (state) {
    state.upcomingTasksCount--
  },
  decreaseOverdueTasksCount (state) {
    state.overdueTasksCount--
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
