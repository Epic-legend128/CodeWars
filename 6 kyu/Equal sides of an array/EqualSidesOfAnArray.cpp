#include <vector>
using namespace std;

int find_even_index (const vector <int> numbers) {
  vector<int> prefix(numbers.size()+1, 0);
  vector<int> suffix(numbers.size()+2, 0);
  for (int i = 1; i<=numbers.size(); i++) {
    prefix[i] = prefix[i-1]+numbers[i-1];
    suffix[numbers.size()-i] = suffix[numbers.size()-i+1]+numbers[numbers.size()-i];
  }
  
  int i;
  bool found = false;
  for (i = 1; i<=numbers.size() && !found; i++) {
    if (prefix[i-1] == suffix[i]) found = true;
  }
  if (found) return i-2;
  return -1;
}
