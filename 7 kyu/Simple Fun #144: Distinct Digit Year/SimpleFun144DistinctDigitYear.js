function distinctDigitYear(year) {
  let j;
  for (j = year+1; true; j++) {
    let y = j.toString();
    let yArray = y.split('');
    
    if (yArray.filter((x, i) => y.substring(0, i).includes(x) || y.substring(i+1).includes(x)).length == 0) break;
  }
  return j;
}
