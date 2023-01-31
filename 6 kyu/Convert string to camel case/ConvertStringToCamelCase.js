function toCamelCase(str){
  let temp = str.split(/[-_]/);
  let r = temp[0];
  for (let i = 1; i<temp.length; i++) r += temp[i].toUpperCase()[0]+temp[i].substring(1);
  return r;
}
