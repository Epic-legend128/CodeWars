class TreeNode {

  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static isPerfect(root) {
    if (root == null) return true;
    let mnL = this.minPath(root.left);
    let mxL = this.maxPath(root.left);
    let mnR = this.minPath(root.right);
    let mxR = this.maxPath(root.right);
    
    return mnL == mnR && mnR == mxR && mxL == mnL;
  }
  
  static maxPath(root) {
    if (root == null) return 0;
    return 1+Math.max(this.maxPath(root.left), this.maxPath(root.right));
  }
  
  static minPath(root) {
    if (root == null) return 0;
    return 1+Math.min(this.minPath(root.left), this.minPath(root.right));
  }
  
  static leaf() {
    return new TreeNode();
  }
  
  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }
  
  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
  
}
