// import Vue from 'vue'
import TaskForm from '@/components/TaskForm'

describe('TaskForm', () => {
  it('has an empty data object', () => {
    const taskFormData = {
      hideTaskForm: true,
      task: {
        name: '',
        description: '',
        dueDate: '',
        id: '',
        status: 0,
        assigneeId: '',
        documentId: ''
      }
    }
    expect(TaskForm.data()).to.deep.equal(taskFormData)
  })

  it('has a name', () => {
    expect(TaskForm.name).to.eql('task-form')
  })

  it('does not accept any properties', () => {
    expect(TaskForm.props).to.deep.equal([])
  })
})
