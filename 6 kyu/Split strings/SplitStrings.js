function solution(str){
  let r = [];
  let i;
  for (i = 0; i<str.length-1; i+=2) {
    r.push(str[i]+str[i+1]);
  }
  if (i == str.length-1) r.push(str[i]+"_");
  return r;
}
