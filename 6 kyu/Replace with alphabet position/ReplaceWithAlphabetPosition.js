function alphabetPosition(text) {
  var result = [];
  for (let i = 0; i<text.length; i++) {
    if ((text.charCodeAt(i) >= 97 && text.charCodeAt(i) < 97+26) || (text.charCodeAt(i) >= 65 && text.charCodeAt(i) < 65+26)) {
      result.push((text[i].toLowerCase().charCodeAt(0)-96).toString());
    }
  }
  if (result.length == 0) return "";
  return result.join(' ');
}
