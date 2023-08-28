function customFib(signature, indexes, n){
  if (n < signature.length) return signature[n];
  let top = signature.length;
  let current = [...signature];
  while (top <= n) {
    let temp = 0;
    for (let i = 0; i<indexes.length; i++) {
      temp += current[indexes[i]];
    }
    current.splice(0, 1);
    current.push(temp);
    top++;
  }
  return current[signature.length-1];
}