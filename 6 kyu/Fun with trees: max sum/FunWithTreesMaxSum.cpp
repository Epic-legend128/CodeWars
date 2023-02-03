class Solution
{
  public:
    static int maxSum(TreeNode* root)
    {
      if (root == nullptr) return 0;
      return std::max(maxSum(root->left), maxSum(root->right))+root->value;
    }
};
