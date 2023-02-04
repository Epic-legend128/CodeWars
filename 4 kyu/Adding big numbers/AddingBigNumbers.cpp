#include <string>
#include <cmath>

using namespace std;

int toNum1Char(string num, long long i) {
  return num[i]-'0';  
}

char toString1Char(int num) {
  return (char)num+'0';
}

string add(const string &num1, const string &num2) {
    string result = "";
    int carry = 0;
    int num = 0;
    long long i;
    long long PLUS1 = 0;
    long long PLUS2 = 0;
    if (num1.length() > num2.length()) {
        PLUS1 = num1.length()-num2.length();
    }
    else {
        PLUS2 = num2.length()-num1.length();
    }
    for (i = min(num1.length(), num2.length())-1; i>=0; i--) {
        num = toNum1Char(num1, i+PLUS1)+toNum1Char(num2, i+PLUS2)+carry;
        carry = floor(num/10);
        num = num-(carry*10);
        result = toString1Char(num)+result;
    }
    if (num1.length() > num2.length()) {
        for (i = i+PLUS1; i>=0; i--) {
            num = toNum1Char(num1, i)+carry;
            carry = floor(num/10);
            num = num-(carry*10);
            result = toString1Char(num)+result;
        }
    }
    else {
        for (i = i+PLUS2; i>=0; i--) {
            num = toNum1Char(num2, i)+carry;
            carry = floor(num/10);
            num = num-(carry*10);
            result = toString1Char(num)+result;
        }
    }
    if (carry != 0) {
        result = toString1Char(carry)+result;
    }
    return result;
}
