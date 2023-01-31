function pigIt(str){
  return str.split(" ").map((x) => (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 65+26) || (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 97+26) ? x.substring(1)+x[0]+'ay' : x).join(" ");
}
