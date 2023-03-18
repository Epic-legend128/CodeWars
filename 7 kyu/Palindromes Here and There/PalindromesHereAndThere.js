const isPalindrome = n => n.length <= 1 || (n[0] == n[n.length-1] && isPalindrome(n.substring(1, n.length-1)));

const convertPalindromes = numbers => numbers.map(x => x = (isPalindrome(x.toString()) ? 1 : 0));
