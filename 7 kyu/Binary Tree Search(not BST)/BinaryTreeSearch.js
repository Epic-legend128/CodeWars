const search = (n, root) => root == null ? false : root.value == n || search(n, root.left) || search(n, root.right);
