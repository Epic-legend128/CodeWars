#include <string>

int secondSymbol(const std::string& str, char symbol) {
  int t = 0;
  for (int i = 0; i<str.length(); i++) {
    if (str[i] == symbol) t++;
    if (t == 2) return i;
  }
  return -1;
}
