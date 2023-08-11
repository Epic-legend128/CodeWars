#include <iostream>
#include <string>
#include <cmath>

using namespace std;

int toNum1Char(string num, long long i) {
  return num[i] - '0';
}

char toString1Char(int num) {
  return (char)num + '0';
}

string removeLeadingZeroes(string num) {
    string result = "";
    int i;
    
    for (i = 0; num[i] == '0'; i++) {}
    while (i < num.length()) {
        result=result+num[i++];
    }
    if (result == "") {
        result = "0";
    }
    return result;
}

string add(string num1, string num2) {
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

string multiply(string num1, string num2) {
    num1 = removeLeadingZeroes(num1);
    num2 = removeLeadingZeroes(num2);
    string zeroes = "";
    string current;
    string result = "0";
    int carry;
    int temp = 0;
    for (long long i = num1.length()-1; i>=0; i--) {
        current = "";
        carry = 0;
        for (long long j = num2.length()-1; j>=0; j--) {
            temp = toNum1Char(num1, i) * toNum1Char(num2, j) + carry;
            carry = floor(temp/10);
            temp = temp - (carry*10);
            current = toString1Char(temp) + current;
        }
        if (carry != 0) {
            current = to_string(carry) + current;
        }
        current = current+zeroes;
        result = add(result, current);
        zeroes += "0";
    }
    result = removeLeadingZeroes(result);
    return result == "" ? 0 : result;
}