class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjecencyList[v1].push(v2);
    this.adjecencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjecencyList[v1] = this.adjecencyList[v1].filter(
      v => v !== v2
    );
    this.adjecencyList[v2] = this.adjecencyList[v2].filter(
      v => v !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjecencyList[vertex].length) {
      const adjecencyVertex = this.adjecencyList[vertex].pop();
      this.removeEdge(vertex, adjecencyVertex)
    }
    delete this.adjecencyList[vertex];
  }
  dfsr(start) {
    const result = [];
    const visited = {};
    const adjecencyList = this.adjecencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjecencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start);
    return result;
  }
  dfsi(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVortex;

    visited[start] = true;
    while (stack.length) {
      currentVortex = stack.pop();
      result.push(currentVortex);
      this.adjecencyList[currentVortex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  bfs(start) {
    const queue = [];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjecencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited = true;
          queue.push(neighbor)
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")