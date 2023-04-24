function keywordCipher(string, keyword){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let a = alphabet.split('');
  let newAlphabet = "";
  for (let i = 0; i<keyword.length; i++) {
    if (a.includes(keyword[i])) {
      newAlphabet += keyword[i];
      a = a.filter(x => x != keyword[i]);
    }
  }
  newAlphabet += a.join('');
  
  return string.toLowerCase().split('').map(x => /\w/.test(x) ? newAlphabet[alphabet.indexOf(x)] : x).join('');
}
