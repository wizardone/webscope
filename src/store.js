import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Read the provided json file
const jsonData = require('../data.json')
// Completed tasks are the ones with status 1
let completedTasks = jsonData.tasks.filter((task) => task.status === 1)
// Overdue tasks are the ones that are not completed and
// with current date bigger than the due date
let overdueTasks = jsonData.tasks.filter((task) => (task.status === 0 && new Date().getTime() > new Date(task.dueDate).getTime()))
// Upcoming tasks are the ones with status 0 that
// have not yet reached the due date
let upcomingTasks = jsonData.tasks.filter((task) => (task.status === 0 && new Date().getTime() < new Date(task.dueDate).getTime()))

/*
 * Read the JSON file and set it up as state of the application in vuex
 * Merge any additional computed properties in the state as well
 */
const state = Object.assign(jsonData, {
  completedTasksCount: completedTasks.length,
  upcomingTasksCount: upcomingTasks.length,
  overdueTasksCount: overdueTasks.length
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
const actions = {
  addTask (context, payload) {
    context.commit({ type: 'addTask', task: payload.task })
    context.commit({ type: 'updateUpcomingTasksCount' })
  },
  completeTak (context, payload) {
    context.commit({ type: 'updateTaskStatus', id: payload.task.id })
    context.commit({ type: 'updateCompletedTasksCount' })
    if (new Date(payload.task.dueDate).getTime() < new Date().getTime()) {
      context.commit({ type: 'decreaseOverdueTasksCount' })
    } else {
      context.commit({ type: 'decreaseUpcomingTasksCount' })
    }
  }
}

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
