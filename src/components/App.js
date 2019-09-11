import React from 'react'
import "../scss/App.scss"

import graph from '../library/instantiate-graph-structure'

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      graph,
      start: '',
      end: '',
    }
    this.setStartLocation = this.setStartLocation.bind(this)
    this.setEndLocation = this.setEndLocation.bind(this)
    this.shortestPath = this.shortestPath.bind(this)
    
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
    const hopsArray = this.state.graph.Dijkstra(this.state.start, this.state.end)
    console.log(hopsArray)
  }

  render () {
    console.log(this.state.graph)
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

        <div>Start at {this.state.start}</div>
        <div>End at {this.state.end}</div>

        <div onClick={this.shortestPath}>Show Path</div>
      </>
    )
  }
}

export default App;

