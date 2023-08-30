// a and b are of type Node
// return whether there is a route from a to b
function getRoute(a, b) {
  let queue = [a];
  let visited = {};
  let first = true;
  while (queue.length > 0) {
    let x = queue[0];
    if (!visited.hasOwnProperty(x.value)) {
      visited[x.value] = true;
      if (first) {
        delete visited[x.value];
        first = false;
      }
      for (let i = 0; i<x.edges.length; i++) {
        if (!visited.hasOwnProperty(x.edges[i].value)) {
          queue.push(x.edges[i]);
        }
      }
    }
    queue.splice(0, 1);
  }
	return visited.hasOwnProperty(b.value);
}