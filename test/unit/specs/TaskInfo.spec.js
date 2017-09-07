// import Vue from 'vue'
import TaskInfo from '@/components/TaskInfo'

describe('TaskInfo', () => {
  it('has an empty data object', () => {
    expect(TaskInfo.data()).to.deep.equal({})
  })

  it('has a name', () => {
    expect(TaskInfo.name).to.eql('task-info')
  })

  it('accepts a task as a property', () => {
    expect(TaskInfo.props).to.deep.equal(['task'])
  })
})
