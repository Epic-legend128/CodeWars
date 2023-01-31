function printerError(s) {
  const a = 97;
  const m = 109;
  var errors = 0;
  for (let i = 0; i<s.length; i++) {
    if (s.charCodeAt(i) < a || s.charCodeAt(i) > m) errors++;
  }
  return errors+"/"+s.length;
}
