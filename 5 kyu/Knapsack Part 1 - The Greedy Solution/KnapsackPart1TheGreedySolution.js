var knapsack=function(capacity,items){
  let ratios = [...items].map((x, i) => [x[1]/x[0], i]).sort((a, b) => {return b[0]-a[0]});
  let frequency = new Array(items.length).fill(0);
  let available = capacity;
  for (let i = 0; i<ratios.length && available > 0; i++) {
    while (items[ratios[i][1]][0] <= available) {
      available -= items[ratios[i][1]][0];
      frequency[ratios[i][1]]++;
    }
  }
  return frequency;
}
