#include <vector>
#include <iostream>

using namespace std;

int cut(vector<int> &rods, int l, vector<int> &bests) {
    if (l == 0) return 0;
    if (bests[l] != 0) return bests[l];
    long long mx = 0;
    for (int i = 1; i<(int)rods.size(); i++) {
        if (i > l) break;
        int current = rods[i] + cut(rods, l-i, bests);
        if (mx < current) {
            mx = current;
        }
    }
    bests[l] = mx;
    return mx;
}

int cut_log(vector<int> &rods, long long l) {
  vector<int> bests(l+1, 0);
  return cut(rods, l, bests);
}
