#include <string>
using namespace std;

string rot13(string msg)
{
  const int ADD = 13;
  string str = "";
  for (char x: msg) {
    if (x >= 'a' && x <= 'z')
      str += (x+ADD-'a')%26+'a';
    else if (x >= 'A' && x <= 'Z')
      str += (x+ADD-'A')%26+'A';
    else
      str += x;
  }
  return str;
}
