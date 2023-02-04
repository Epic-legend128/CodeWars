function findAverage(array) {
  return array.length > 0 ? array.reduce((t, x) => t+x, 0)/array.length : 0;
}
