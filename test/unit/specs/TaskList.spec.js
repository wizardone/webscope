// import Vue from 'vue'
import TaskList from '@/components/TaskList'

describe('TaskList', () => {
  it('has an empty data object', () => {
    expect(TaskList.data()).to.deep.equal({})
  })

  it('has a name', () => {
    expect(TaskList.name).to.eql('task-list')
  })

  it('accepts an array of tasks as a property', () => {
    expect(TaskList.props).to.deep.equal(['tasks'])
  })
})

