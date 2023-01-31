#include<limits>

class ASum
{
  public:
  static __int128 cubesUntil(__int128 n) {
    __int128 sum = n*(n+1)/2;
    __int128 result = sum*sum;
    if (result <= 0 || sum <= 0) return std::numeric_limits<long long int>::max();
    return result > sum ? result : sum;
  }
  
  static __int128 findNb(long long m) {
    __int128 end = std::numeric_limits<long long int>::max();
    __int128 start = 0;
    while (start <= end) {
      __int128 mid = (start+end)/2;
      __int128 current = cubesUntil(mid);
      if (current > m) {
        end = mid-1;
      }
      else if (current < m) {
        start = mid+1;
      }
      else {
        return mid;
      }
    }
    return -1;
  };
};
