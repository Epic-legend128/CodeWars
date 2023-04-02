function removeSmallest(numbers) {
  (s=[...numbers]).splice(numbers.indexOf(Math.min(...numbers)), 1);
  return s;
}
