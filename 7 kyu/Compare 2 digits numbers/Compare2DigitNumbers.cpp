#include <string>

std::string compare(unsigned short n1, unsigned short n2){
  std::string a = std::to_string(n1);
  std::string b = std::to_string(n2);
  if ((a[0] == b[0] && a[1] == b[1]) || (a[1] == b[0] && a[0] == b[1])) return "100%";
  if ((a[0] == b[0] && a[1] != b[1]) || (a[0] != b[0] && a[1] == b[1]) || (a[1] == b[0] && a[0] != b[1]) || (a[1] != b[0] && a[0] == b[1])) return "50%";
  return "0%";
}
