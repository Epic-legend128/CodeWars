function formatWords(words){
  if (words != null) {
    let w = words.filter((x) => x!='');
    if (w.length != 0 || w==null) {
      let str = "";
      for (let i = 0; i<w.length-1; i++) {
        str += w[i];
        if (i < w.length-2) str+=", ";
        else str+=" and ";
      }
      str += w[w.length-1];
      return str;
    }
  }
  return "";
}
