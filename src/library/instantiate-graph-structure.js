import WeightedGraph from './graph-class-definition'

const graph = new WeightedGraph()

graph.addLocation('A')
graph.addLocation('B')
graph.addLocation('C')
graph.addLocation('D')
graph.addLocation('E')
graph.addLocation('F')
graph.addLocation('G')
graph.addLocation('H')

graph.addDistance("A", "C", 2 )
graph.addDistance("C", "D", 1 )
graph.addDistance("C", "F", 4 )
graph.addDistance("B", "D", 4 )
graph.addDistance("B", "E", 7 )
graph.addDistance("D", "F", 1 )
graph.addDistance("D", "G", 2 )
graph.addDistance("F", "G", 3 )
graph.addDistance("G", "H", 4 )
graph.addDistance("E", "H", 10 )


export default graph;