let match = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9}
function averageString(str) {
    if (str == '') return 'n/a';
  let sum = 0;
  
  let s = str.split(' ');
  for (let i = 0; i<s.length; i++) {
    if (!match.hasOwnProperty(s[i])) return "n/a";
    sum += match[s[i]];
  }
  
  let opposite = {};
  Object.keys(match).forEach(x => {
    opposite[match[x]] = x;
  });
  return opposite[Math.floor(sum/s.length)];
}