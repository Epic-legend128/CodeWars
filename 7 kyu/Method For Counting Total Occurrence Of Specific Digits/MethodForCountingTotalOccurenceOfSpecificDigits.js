function List(){
  this.countSpecDigits=function(integersList, digitsList){
    let r = [];
    let t = integersList.map(x => x.toString()).join('').split('');
    for (let i = 0; i<digitsList.length; i++) {
      r.push([digitsList[i], t.filter(x => x==digitsList[i]).length]);
    }
    return r;
  } 
}
