import store from '@/store.js'

const jsonData = require('../../../data.json')

describe('Store', () => {
  describe('state', () => {
    it('has a default state', () => {
      expect(store.state).to.deep.eql(jsonData)
    })
  })

  describe('mutations', () => {
    describe('addTask', () => {
      it('adds a new task', () => {
        const task = {
          name: 'test',
          description: 'test',
          dueDate: '2017-10-10',
          id: '15',
          status: 0,
          assigneeId: '2',
          documentId: '3'
        }
        expect(store.state.tasks.length).to.equal(12)

        store.commit({ type: 'addTask', task: task })

        expect(store.state.tasks.length).to.equal(13)
      })
    })

    describe('updateTaskStatus', () => {
      it('changes the status of the task', () => {
        const taskId = 1
        store.commit({ type: 'updateTaskStatus', id: taskId })

        expect(store.state.tasks.find((task) => task.id === taskId).id).to.equal(taskId)
      })
    })

    describe('updateUpcomingTasksCount', () => {
      it('updates the upcoming tasks count', () => {
        const currentCount = 3
        expect(store.state.upcomingTasksCount).to.equal(currentCount)

        store.commit({ type: 'updateUpcomingTasksCount' })

        expect(store.state.upcomingTasksCount).to.equal(currentCount + 1)
      })
    })

    describe('updateCompletedTasksCount', () => {
      it('updates the completed tasks count', () => {
        const currentCount = 5
        expect(store.state.completedTasksCount).to.equal(currentCount)

        store.commit({ type: 'updateCompletedTasksCount' })

        expect(store.state.completedTasksCount).to.equal(currentCount + 1)
      })
    })

    describe('decreaseUpcomingTasksCount', () => {
      it('decreases the upcoming tasks count', () => {
        const currentCount = 4
        expect(store.state.upcomingTasksCount).to.equal(currentCount)

        store.commit({ type: 'decreaseUpcomingTasksCount' })

        expect(store.state.upcomingTasksCount).to.equal(currentCount - 1)
      })
    })
  })

  describe('getters', () => {
    describe('getUser', () => {
      it('returns a user by id', () => {
        const userId = 1
        const user = { id: userId, name: 'Martin' }

        expect(store.getters.getUser(userId)).to.eql(user)
      })
    })

    describe('getUsers', () => {
      it('returns an array of all users', () => {
        expect(store.getters.getUsers).to.eql(store.state.users)
      })
    })

    describe('getDocument', () => {
      it('returns a document by id', () => {
        const documentId = 1
        const document = { id: documentId, name: 'Client List', status: 0 }

        expect(store.getters.getDocument(documentId)).to.eql(document)
      })
    })

    describe('getDocuments', () => {
      it('returns an array of all documents', () => {
        expect(store.getters.getDocuments).to.eql(store.state.documents)
      })
    })

    describe('getNextId', () => {
      it('returns the next id in the sequence', () => {
        const currentId = Math.max(...store.state.tasks.map((task) => task.id))

        expect(store.getters.getNextId).to.eql(currentId + 1)
      })
    })
  })
})
