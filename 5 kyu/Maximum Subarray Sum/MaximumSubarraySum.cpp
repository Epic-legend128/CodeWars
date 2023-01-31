#include <vector>

int maxSequence(const std::vector<int>& arr){
  std::vector<int> sums(arr.size()+1, 0);
  for (int i = 1; i<=arr.size(); i++) {
    sums[i] = sums[i-1]+arr[i-1];
  }
  
  int start;
  for (start = 1; start < arr.size() && arr[start-1] < 0; start++);
  if (start == arr.size()) return 0;
  if (start == arr.size()-1) return arr[arr.size()-1];
  int end = start;
  int mx = 0;
  while (end < sums.size()) {
    int lastSum = 0;
    while(arr[end] >= 0 && end < arr.size()) {
      end++;
    }
    lastSum = sums[end]-sums[start-1];
    if (mx < lastSum) mx = lastSum;
    int start2 = end;
    end++;
    while (end < arr.size() && arr[end] < 0) {
      end++;
    }
    int negativeSum = sums[end] - sums[start2];
    if (lastSum + negativeSum <= 0) {
      start = end+1;
      if (mx < lastSum + negativeSum) mx = lastSum + negativeSum;
    }
  }
  return mx;
}
