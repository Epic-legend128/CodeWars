var Collatz = {};

function sequence(n) {
  if (n == 1) return 0;
  if (Collatz.hasOwnProperty(n)) return Collatz[n];
  let a;
  if (n%2) a = sequence(3*n+1);
  else a = sequence(n/2);
  Collatz[n] = a+1;
  return a+1;
}

function longestCollatz (inputArray) {
  let mx = [sequence(inputArray[0]), inputArray[0]];
  for (let i = 1; i<inputArray.length; i++) {
    let temp = sequence(inputArray[i]);
    if (temp > mx[0]) {
      mx = [temp, inputArray[i]];
    }
  }
  return mx[1];
}