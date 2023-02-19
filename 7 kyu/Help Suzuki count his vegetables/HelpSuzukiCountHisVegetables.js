function countVegetables(str){
  let allVeggies = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
  let s = str.split(" ");
  let veggies = {};
  for (let i = 0; i<s.length; i++) {
    if (allVeggies.includes(s[i])) {
      if (!veggies.hasOwnProperty(s[i]))  veggies[s[i]] = 0;
      veggies[s[i]]++;
    }
  }
  let r = [];
  Object.keys(veggies).forEach((k) => {
    r.push([veggies[k], k]);
  });
  return r.sort((a, b) => {
      if (b[0] != a[0])
        return b[0]-a[0]
    if (a[1] > b[1]) return -1;
    return 1;
  });
}
