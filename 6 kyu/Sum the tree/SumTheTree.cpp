// Return the sum of all values in the tree, including the root
int sumTheTreeValues(node* root) {
  if (root == nullptr) return 0;
  return sumTheTreeValues(root->left)+root->value+sumTheTreeValues(root->right);
}
