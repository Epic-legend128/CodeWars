#include <vector>
#include <map>

int findOdd(const std::vector<int>& numbers){
  std::map<int, int> frequency;
  for (auto x: numbers) {
    frequency[x]++;
  }
  
  for (auto [f, s]: frequency) {
    if (s%2 != 0) return f;
  }
  return 0;
}
