function LCA(node1, node2) {
  if (node1.id == node2.id) return node1.id;
  let pathA = {};
  pathA[node1.id] = true;
  let n = node1;
  while (n.up != null) {
    n = n.up;
    pathA[n.id] = true;
  }
  
  n = node2;
  while (n.up != null && !pathA.hasOwnProperty(n.id))
    n = n.up;
  
  return n.id;
}
