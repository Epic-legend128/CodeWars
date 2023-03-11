function countPositivesSumNegatives(input) {
  if (input == [] || input == null) return [];
  let count = 0;
  let sum = 0;
  input.forEach(x => {
    if (x <= 0) sum += x;
    else count++;
  });
  if (count == 0 && sum == 0) return [];
  return [count, sum];
}
