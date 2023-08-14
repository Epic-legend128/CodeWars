const money = {
  '20p': 20,
  '50p': 50,
  '£1': 100,
  '£2': 200,
  '£5': 500
}
function changeMe(moneyIn) {
  if (!money.hasOwnProperty(moneyIn)) return moneyIn;
  let total = money[moneyIn];
  if (total == 20) return '10p 10p';
  let result = "";
  while (true) {
    if (20 <= total) {
      result += "20p";
      total -= 20;
    }
    else if (10 <= total) {
      result += "10p";
      total -= 10;
    }
    if (total > 0) result += " ";
    else break;
  }
  
  return result;
}