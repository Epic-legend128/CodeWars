/* preloaded Node definition :
class Node {
  constructor (data, children = []) {
    this.data = data;
    this.children = children;
  }
}
*/

function treeToArray(tree) {
  if (tree.length == 0) return [];
  var queue = [tree];
  var result = [];
  while (queue.length > 0) {
    result.push(queue[0].data);
    queue[0].children.forEach(x => {
      queue.push(x);
    });
    queue.splice(0, 1);
  }
  return result;
}
