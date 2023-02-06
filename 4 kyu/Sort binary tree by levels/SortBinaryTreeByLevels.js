function treeByLevels (rootNode) {
  if (rootNode == null) return [];
  var queue = [rootNode];
  var result = [];
  while (queue.length > 0) {
    result.push(queue[0].value);
    if (queue[0].left != null) queue.push(queue[0].left);
    if (queue[0].right != null) queue.push(queue[0].right);
    queue.splice(0, 1);
  }
  return result;
}
