const orderedCount = function (text) {
  let l = {};
  text.split("").forEach((x, i) => {
    if (!l.hasOwnProperty(x)) l[x] = {index:  i, value: 0};
    l[x].value++;
  });
  return Object.keys(l).map((x) => [x, l[x]]).sort((a, b) => {return a[1].index-b[1].index}).map((x) => [x[0], x[1].value]);
}
