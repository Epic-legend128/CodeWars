function encrypt(text, rule) {
  let str = "";
  for (let i = 0; i<text.length; i++) {
    str += String.fromCharCode((text.charCodeAt(i)+rule)%256);
  }
  return str;
};
