public class FindMaxValueInTree {

    static int findMax(TreeNode  root) {
      int left = Integer.MIN_VALUE, right = Integer.MIN_VALUE;
      if (root.left != null) left = findMax(root.left);
      if (root.right != null) right = findMax(root.right);
      return Math.max(root.value, Math.max(right, left));
    }
}