#include <string>
#include <vector>

std::string range_extraction(std::vector<int> args) {
  std::string results = "";
  std::string temporary = std::to_string(args[0]);
  int last = 0;
  for (int i = 1; i<args.size(); i++) {
    if (args[i] != args[i-1]+1 && i != last) {
      if (results.length() > 0) results += ",";
      if (i-last >= 3)
        results += std::to_string(args[last]) + "-" + std::to_string(args[i-1]);
      else
        results += temporary;
      temporary = "";
      last = i;
      i--;
    }
    else {
      if (temporary.length() > 0) temporary += ",";
      temporary += std::to_string(args[i]);
    }
  }
  if (temporary.length() > 0) {
    if (results.length() > 0) results += ",";
    if (args.size()-last >= 3)
      results += std::to_string(args[last]) + "-" + std::to_string(args[args.size()-1]);
    else
      results += temporary;
  }
  return results;
}