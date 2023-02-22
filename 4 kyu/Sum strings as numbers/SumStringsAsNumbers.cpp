#include <string>
#include <iostream>
#include <cmath>

long long toNum(std::string n, int i) {
  return n[i]-'0';
}

char toString(long long n) {
  return (char)n+'0';
}

std::string sum_strings(const std::string& a, const std::string& b) {
  std::string num1 = a;
  std::string num2 = b;
  if (num1.length() < num2.length()) std::swap(num1, num2);
  std::string result = "";
  int carry = 0;
  int num = 0;
  long long i;
  long long PLUS = num1.length() - num2.length();
  for (i = num2.length()-1; i>=0; i--) {
    num = toNum(num1, i+PLUS)+toNum(num2, i)+carry;
    carry = floor(num/10);
    num = num-(carry*10);
    result = toString(num)+result;
  }
  for (i = i+PLUS; i>=0; i--) {
    num = toNum(num1, i)+carry;
    carry = std::floor(num/10);
    num = num-(carry*10);
    result = toString(num)+result;
  }
  if (carry != 0) result = toString(carry)+result;
  return result;
}
