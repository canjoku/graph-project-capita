import PriorityQueue from './priority-queue-class'


export default class WeightedGraph {
  constructor() {
      this.adjacencyList = {}
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1,vertex2, weight){
      this.adjacencyList[vertex1].push({node:vertex2,weight})
      this.adjacencyList[vertex2].push({node:vertex1, weight})
  }
  shortestPath(start, finish){
      const nodes = new PriorityQueue()
      const distances = {}
      const previous = {}
      let path = [] //to return at end
      let smallest
      //build up initial state
      for(let vertex in this.adjacencyList){
          if(vertex === start){
              distances[vertex] = 0
              nodes.enqueue(vertex, 0)
          } else {
              distances[vertex] = Infinity
              nodes.enqueue(vertex, Infinity)
          }
          previous[vertex] = null
      }
      // as long as there is still a node to visit
      while(nodes.values.length){
          smallest = nodes.dequeue().val
          if(smallest === finish){
              //means completed, build up a path to return at the end.
              while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighbouring node
                  let nextNode = this.adjacencyList[smallest][neighbor]
                  //calculate new distance to neighbouring node
                  let candidate = distances[smallest] + nextNode.weight
                  let nextNeighbor = nextNode.node
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbour
                      distances[nextNeighbor] = candidate
                      //updating previous - How we got to neighbour
                      previous[nextNeighbor] = smallest
                      //enqueue in the priority queue with the new priority
                      nodes.enqueue(nextNeighbor, candidate)
                  }
              }
          }
      }
      return path.concat(smallest).reverse() 
  }
}

