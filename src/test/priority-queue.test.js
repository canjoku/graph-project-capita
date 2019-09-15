import PriorityQueue from '../library/priority-queue-class'

const setUp = () => {
  const nodes = new PriorityQueue()

  nodes.enqueue('A', 10)
  nodes.enqueue('B', 15)
  nodes.enqueue('C', 20)
  nodes.enqueue('D', 25)

  return nodes
}

describe('test priority queue', () => {

  let nodesArray
  beforeEach(() => {
    nodesArray = setUp().values
  })
  
  it('has four nodes', () => {
    expect(Object.keys(nodesArray).length).toBe(4)
  })

  it('is sorted according to priority value', () => {
    expect(nodesArray[0].priority).toBe(10)
    expect(nodesArray[3].priority).toBe(25)
  })
})