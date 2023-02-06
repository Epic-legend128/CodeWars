function solution (roman) {
  const symbols = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  };
  let sum = 0;
  for (let i = 0; i<roman.length; i++) {
    if (i+1 < roman.length && symbols[roman[i]] < symbols[roman[i+1]]) {
      sum += symbols[roman[i]+roman[i+1]];
      i++;
    }
    else
      sum += symbols[roman[i]];
  }
	return sum;
}
