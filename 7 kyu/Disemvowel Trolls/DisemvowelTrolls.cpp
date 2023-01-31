#include <string>

std::string disemvowel(const std::string& str) {
  std::string nstr = "";
  std::string vowels = "aeiouAEIOU";
  for (int i = 0; i<str.length(); i++) {
    if (!(vowels.find(str[i]) != std::string::npos)) {
      nstr += str[i];
    }
  }
  return nstr;
}
