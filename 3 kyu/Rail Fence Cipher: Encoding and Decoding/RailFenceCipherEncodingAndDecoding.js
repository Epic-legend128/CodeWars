function encodeRailFenceCipher(string, numberRails) {
  let result = [];
  for (let i = 0; i<numberRails; i++) result.push([]);
  for (let i = 0; i<string.length; ) {
    for (let j = 0; j<numberRails && i<string.length; j++) {
      result[j].push(string[i++]);
    }
    for (let j = numberRails-2; j>0 && i<string.length; j--) {
      result[j].push(string[i++]);
    }
  }
  
  return result.reduce((t,x) => t+x.join(''), t='');
}

function decodeRailFenceCipher(string, numberRails) {
  let w = string.length - numberRails;
  let s = numberRails-1;
  let x = Math.ceil(w/s);
  let y = s*x - w;
  x++;
  
  let result = [];
  let previous = Math.ceil(x/2);
  if ((previous * 2) + (numberRails-2-y + (y > 0?1:0))*x + y*(x-1) == string.length-1) {
      previous++;
  }
  result.push([...string.substring(0, previous)]);
  let constant;
  for (let i = 1; i<numberRails-1; i++) {
    constant = +((x%2 && i>=numberRails-y) || (x%2==0 && i < y));
    result.push([...string.substring(previous, (previous+=x - constant))]);
  }
  result.push([...string.substring(previous)]);
  
  let final = "";
  for (let i = 0; i<string.length; ) {
    for (let j = 0; j<numberRails && i<string.length; j++) {
      if (result[j].length > 0) {
        final += result[j][0];
        result[j].splice(0, 1);
        i++;
      }
    }
    for (let j = numberRails-2; j>0 && i<string.length; j--) {
      if (result[j].length > 0) {
        final += result[j][0];
        result[j].splice(0, 1);
        i++;
      }
    }
  }
  
  return final;
}
