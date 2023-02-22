function a(n){
  if (n<4) return '';
  if (n%2) return a(n-1);
  
  let outer =  new Array(n-1).fill(' ');
  let result = outer.join('')+"A"+outer.join('')+"\n";
  let spaces = " ";
  for (let i = 0; i<n/2-1; i++) {
    outer.pop();
    result+=outer.join('')+'A'+spaces+'A'+outer.join('')+"\n";
    spaces+='  ';
  }
  outer.pop();
  result+=outer.join('')+(new Array(n/2+1).fill('A').join(' '))+outer.join('')+"\n";
  spaces+="  ";
  for (let i = n/2-1; i<n-2; i++) {
    outer.pop();
    result+=outer.join('')+'A'+spaces+'A'+outer.join('')+"\n";
    spaces+='  ';
  }
  return result.substring(0, result.length-1);
}
