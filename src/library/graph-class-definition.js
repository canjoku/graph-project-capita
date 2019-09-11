 class WeightedGraph {
   constructor() {
     this.graphList = {}
   }

   addLocation(location) {
     if (!this.graphList[location]) {
       this.graphList[location] = []
     }
   }

   addDistance(location1, location2, distance) {
     this.graphList[location1].push({node:location2, distance})
     this.graphList[location2].push({node:location1, distance})
   }
 }

 module.exports = WeightedGraph