function solve(money, coins, bests, prev) {
  if (prev > coins.length && money > 0) return 0;
  if (money <= 0) return 1;
  if (bests[money][prev] != 0) return bests[money][prev];
  
  let sum = 0;
  for (let i = prev; i<coins.length; i++) {
    let coin = coins[i];
    if (coin <= money) {
      for (let j = 1; coin*j<=money; j++) {
        sum += solve(money-coin*j, coins, bests, i+1);
      }
    }
  }
  
  bests[money][prev] = sum;
  return sum;
}

function countChange(money, coins) {
  var bests = [];
  for (let i = 0; i<=money; i++) {
    let temp = [];
    for (let j = 0; j<=coins.length; j++) {
      temp.push(0);
    }
    bests.push(temp);
  }
  return solve(money, coins.sort().reverse(), bests, 0);
}
