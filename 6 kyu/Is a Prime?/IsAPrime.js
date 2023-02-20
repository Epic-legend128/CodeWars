function isPrime(str) {
  if ((str.match(/[pP][rR][iI][mM][eE]/)||[]).length > 0) return true;
  
  let numbers = str.split(/\D+/).filter((x) => x!='');
  for (let i = 0; i<numbers.length; i++) {
    let num = parseInt(numbers[i]);
    let found = false;
    if (num <= 1) found = true;
    if (num%2==0) found = num!=2;
    for (let i = 3; i*i<=num && !found; i+=2) {
        if (num%i==0) found = true;
    }
    if (!found) return true;
  }
  return false;
}
