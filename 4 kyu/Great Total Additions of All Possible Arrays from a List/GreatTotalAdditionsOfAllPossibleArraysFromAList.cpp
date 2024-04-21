#include <vector>
#include <string>

long long gta(int limit, const std::vector<int>& args){
  long long gta_value = 0;
  std::vector<bool> digitUsed(10, false);
  int sum = 0;
  int n = 0;
  std::vector<std::string> nums(args.size(), "");
  for (int i = 0; i<(int)args.size(); i++) {
    nums[i] = std::to_string(args[i]);
  }
  bool used = true;
  for (int i = 0; used && n < limit; i++) {
    used = false;
    for (int j = 0; j<nums.size(); j++) {
      if ((int)nums[j].length() > i) {
        used = true;
        if (!digitUsed[nums[j][i]-'0'] && n < limit) {
          digitUsed[nums[j][i]-'0'] = true;
          sum += nums[j][i]-'0';
          n++;
        }
      }
    }
  }
  long long product = 1;
  long long s = 1;
  for (int i = 1; i<n; i++) {
    product *= (n-i);
    s += (i+1)*product;
  }
  gta_value = s*sum;
  return gta_value;
}
