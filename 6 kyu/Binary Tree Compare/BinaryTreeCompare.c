#include <stdbool.h>
#include <stdio.h>

typedef struct TreeNode {
    int val;
    struct TreeNode *left, *right;
} TreeNode;

bool equal_trees (const TreeNode* a, const TreeNode* b)
{
  if (a == NULL || b == NULL) return a == b;
  return (a->val == b->val) && (equal_trees(a->left, b->left) && equal_trees(a->right, b->right));
}
