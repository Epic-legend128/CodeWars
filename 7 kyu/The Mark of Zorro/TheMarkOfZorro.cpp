#include <vector> 

template <typename T> std::vector<T> zorro(const std::vector<std::vector<T>> &matrix) {
  if (matrix.empty()) return {};
  std::vector<T> r;
  for (auto x: matrix[0]) {
    r.push_back(x);
  }
  for (int i = matrix.size()-2; i>0; i--) {
    r.push_back(matrix[matrix.size()-i-1][i]);
  }
  for (auto x: matrix[matrix.size()-1]) {
    r.push_back(x);
  }
  return r;
}
