function largest(n, array) {
  return array.sort((a, b) => {return b-a;}).filter((x, i) => i<n).reverse();
}
