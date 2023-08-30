var visited = {};
function bfs(city, start) {
  let queue = [start];
  while (queue.length > 0) {
    visited[queue[0]] = true;
    city[queue[0]].forEach(x => {
      if (!visited.hasOwnProperty(x)) {
        visited[x] = true;
        queue.push(x);
      }
    });
    queue.splice(0, 1);
  }
}

function countDistricts(city){
  visited = {}
  let nbDistricts = 0;
  
  // Count the number of district in the city
  let keys = Object.keys(city);
  for (let i = 0; i<keys.length; i++) {
    if (!visited.hasOwnProperty(keys[i])) {
      bfs(city, keys[i]);
      nbDistricts++;
    }
  }
  return nbDistricts;  
}