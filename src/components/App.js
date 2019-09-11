import React from 'react'
import "../scss/App.scss"

import graph from '../library/instantiate-graph-structure'
import PriorityQueue from '../library/priority-queue-class'

const queue = new PriorityQueue()

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      graph: graph.graphList,
      queue: queue.values,
      start:'',
      end:''
    }

    this.shortestPath = this.shortestPath.bind(this)
    this.setLocation = this.setStartLocation.bind(this)
    this.setLocation = this.setEndLocation.bind(this)
  }

  setStartLocation (location) {
    this.setState(prevState => ({
      start: location
    }))
  }

  setEndLocation (location) {
    this.setState(prevState => ({
      end: location
    }))
  }

  shortestPath () {
    
    const locations = this.state.queue
    const distances = {}
    const previous = {}


    for(let location in this.state.graph) {
      if(location == this.state.start) {
        distances[location] = 0;

        queue.enqueue(location, 0)
        console.log(queue)
        
      } else {
        distances[location] = Infinity;
        
        const value = queue.enqueue(location, Infinity)
        
      }
      previous[location] = null
    }

    // As long as there is a location to visit
    



  }

  render () {
    console.log(this.state)
    return (
      <>
        <div>Click on a start and End Node. Shortest Distance will be displayed</div>
        
        <div className = 'start-locations'>
          <div onClick = {() => this.setStartLocation('A')}>A</div>
          <div onClick = {() => this.setStartLocation('B')}>B</div>
          <div onClick = {() => this.setStartLocation('C')}>C</div>
          <div onClick = {() => this.setStartLocation('D')}>D</div>
          <div onClick = {() => this.setStartLocation('E')}>E</div>
          <div onClick = {() => this.setStartLocation('F')}>F</div>
          <div onClick = {() => this.setStartLocation('G')}>G</div>
          <div onClick = {() => this.setStartLocation('H')}>H</div>
        </div>

        <div className = 'end-locations'>
          <div onClick = {() => this.setEndLocation('A')}>A</div>
          <div onClick = {() => this.setEndLocation('B')}>B</div>
          <div onClick = {() => this.setEndLocation('C')}>C</div>
          <div onClick = {() => this.setEndLocation('D')}>D</div>
          <div onClick = {() => this.setEndLocation('E')}>E</div>
          <div onClick = {() => this.setEndLocation('F')}>F</div>
          <div onClick = {() => this.setEndLocation('G')}>G</div>
          <div onClick = {() => this.setEndLocation('H')}>H</div>
        </div>

        <div onClick={this.shortestPath}>Calculate</div>

        <div>Reset</div>
      </>
    )
  }
}

export default App;

