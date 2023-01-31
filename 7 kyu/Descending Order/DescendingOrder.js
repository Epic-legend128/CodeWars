function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a, b) => {return b-a;}).join(''));
}
