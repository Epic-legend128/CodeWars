function convert(arcs) {
  let graph = {};
  arcs.forEach(x => {
    if (!graph.hasOwnProperty(x.start)) graph[x.start] = [];
    graph[x.start].push(x.end);
  });
  return graph;
}

function solve_graph(start, end, arcs) {
  let graph = convert(arcs);
  let visited = {};
  Object.keys(graph).forEach(x => {
    visited[x] = false;
  });
  
  visited[start] = true;
  let queue = [start];
  while (queue.length > 0) {
    if (queue[0] == end) return true;
    
    if (graph.hasOwnProperty(queue[0])) {
      graph[queue[0]].forEach(x => {
        if (!visited[x]) queue.push(x);
        visited[x] = true;
      });
    }
    
    queue.splice(0, 1);
  }
  return false;
}
