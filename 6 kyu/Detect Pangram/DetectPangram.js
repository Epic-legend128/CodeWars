function isPangram(str){
  let l = "a";
  let s = str.toLowerCase().split('').sort();
  for (let i = 0; i<s.length; i++) {
    let x = s[i].charCodeAt(0);
    if (x == l.charCodeAt(0)+1) l = String.fromCharCode(x);
    else if (x >= 97 && x <= 97+26 && x>l.charCodeAt(0)+1) break;
  }
  if (l == 'z') return true;
  return false;
}
