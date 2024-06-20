class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // If the graph is undirected
  }

  // Iterative BFS
  bfs(startingNode) {
    const visited = new Set();
    const queue = [startingNode];

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);

        const neighbors = this.adjList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor); // For Tree add left, right
          }
        }
      }
    }
  }
}

// Example usage
const g = new Graph(6);
const vertices = ["A", "B", "C", "D", "E", "F"];

for (const vertex of vertices) {
  g.addVertex(vertex);
}

g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

console.log("BFS:");
g.bfs("A");

class Graph1 {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // If the graph is undirected
  }

  // Iterative DFS using a stack
  dfsIterative(startingNode) {
    const visited = new Set();
    const stack = [startingNode];

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);

        const neighbors = this.adjList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
}

// Example usage
const g1 = new Graph1(6);
const vertices1 = ["A", "B", "C", "D", "E", "F"];

for (const vertex of vertices1) {
  g1.addVertex(vertex);
}

g1.addEdge("A", "B");
g1.addEdge("A", "D");
g1.addEdge("A", "E");
g1.addEdge("B", "C");
g1.addEdge("D", "E");
g1.addEdge("E", "F");
g1.addEdge("E", "C");
g1.addEdge("C", "F");

console.log("DFS (Iterative):");
g1.dfsIterative("A");

var connect = function (root) {
  if (!root) return root;

  if (root.left) {
    root.left.next =
      root.right || root.next ? root.next.left || root.next.right : null;
  }

  if (root.right) {
    root.right.next = root.next
      ? root.next.left
        ? root.next.left
        : root.next.right
        ? root.next.right
        : null
      : null;
  }

  connect(root.left);
  connect(root.right);

  return root;
};


