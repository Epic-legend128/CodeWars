#include <utility>
#include <vector>
#include <limits>

std::pair<int, int> min_max(const std::vector<int>& arr) {
    int mn = std::numeric_limits<int>::max();
    int mx = std::numeric_limits<int>::min();
    for (int x: arr) {
        if (mn > x) mn = x;
        if (mx < x) mx = x;
    }
    return std::make_pair(mn, mx);
}