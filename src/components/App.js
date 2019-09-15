import React from 'react'

import graph from '../library/instantiate-graph-structure'

class App extends React.Component {
  constructor (props) {
    super ();

    this.state = {
      graph,
      start: '',
      end: '',
      hopsArray: [],
      weightsArray: graph.adjacencyList
    }
    this.setStartLocation = this.setStartLocation.bind(this)
    this.setEndLocation = this.setEndLocation.bind(this)
    this.path = this.path.bind(this)
    this.renderHops = this.renderHops.bind(this)
    
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

  path () {
    const hopsArray = this.state.graph.shortestPath(this.state.start, this.state.end)
    this.setState(prevState => ({
      hopsArray
    }))
  }

 renderHops () {
  const hopItems = this.state.hopsArray.map((hop, index) => <button key={index}>{hop}</button>)
  return (
    <section className='c-path-section' data-test='path-section'>{hopItems}</section>
  )   
 }

 renderDistance () {
   const hopsArray = this.state.hopsArray

   // i will use some sort of loop to iterate over the hopsArray and for each item in the hops array,
   // i will traverse the weightsArray and pull out the associated weight (edge) between the two neigbouring vertexes. 
   
  for (let index = 0; index < hopsArray.length - 1; ++index) {
    const weightsArray = this.state.weightsArray
    var hop = hopsArray[index]
    const pathObject = weightsArray[hop]

    // Implement a graph traversal algorithm to traverse the pathObject data structure to add up the weights corresponding to 
    // nodes in hopsArray.
    // To explain at interview if not able to implement
  }
  
 }

  render () {
    return (
      <>
        <h1>Starting Destination</h1>
        
        <section className = 'c-start-section' data-test='start-section'>
          <button onClick = {() => this.setStartLocation('A')}>A</button>
          <button onClick = {() => this.setStartLocation('B')}>B</button>
          <button onClick = {() => this.setStartLocation('C')}>C</button>
          <button onClick = {() => this.setStartLocation('D')}>D</button>
          <button onClick = {() => this.setStartLocation('E')}>E</button>
          <button onClick = {() => this.setStartLocation('F')}>F</button>
          <button onClick = {() => this.setStartLocation('G')}>G</button>
          <button onClick = {() => this.setStartLocation('H')}>H</button>
        </section>

        <h1>Ending Destination</h1>
        <section className = 'c-end-section' data-test='end-section'>
          <button onClick = {() => this.setEndLocation('A')}>A</button>
          <button onClick = {() => this.setEndLocation('B')}>B</button>
          <button onClick = {() => this.setEndLocation('C')}>C</button>
          <button onClick = {() => this.setEndLocation('D')}>D</button>
          <button onClick = {() => this.setEndLocation('E')}>E</button>
          <button onClick = {() => this.setEndLocation('F')}>F</button>
          <button onClick = {() => this.setEndLocation('G')}>G</button>
          <button onClick = {() => this.setEndLocation('H')}>H</button>
        </section>

        <h2>starting point: {this.state.start}</h2>
        <h2>End Point: {this.state.end}</h2>

        

        <section className='c-show-path-section' data-test='show-path-section'>
          <button onClick={this.path}>Show Path</button>
        </section>
        <h2>Shortest Path from {this.state.start} to {this.state.end} is</h2>
        {this.renderHops ()}
        
      </>
    )
  }
}

export default App;

