import WeightedGraph from './graph-class-definition'

var graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')

graph.addEdge("A", "C", 2 )
graph.addEdge("C", "D", 1 )
graph.addEdge("C", "F", 4 )
graph.addEdge("B", "D", 4 )
graph.addEdge("B", "E", 7 )
graph.addEdge("D", "F", 1 )
graph.addEdge("D", "G", 2 )
graph.addEdge("F", "G", 3 )
graph.addEdge("G", "H", 4 )
graph.addEdge("E", "H", 10 )


export default graph;