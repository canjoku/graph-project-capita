import graph from '../library/instantiate-graph-structure'

describe('test undrectional graph', () => {

  it('has eight nodes which represents locations', () => {
    const nodesList = graph.adjacencyList

    expect(Object.keys(nodesList).length).toBe(8)
  })
})