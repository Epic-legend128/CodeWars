function rot13(str) {
  const ADD = 13;
  var r = "";
  for (let i = 0; i<str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code < 65+26)
      r += String.fromCharCode((code+ADD-65)%26+65);
    else if (code >= 97 && code < 97+26)
      r += String.fromCharCode((code+ADD-97)%26+97);
    else
      r += str[i];
  }
  return r;
}
