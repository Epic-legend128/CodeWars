function count (string) {
  let frequency = {};
  for (let i = 0; i<string.length; i++) {
    if (!frequency.hasOwnProperty(string[i])) frequency[string[i]] = 0;
    frequency[string[i]]++;
  }
  return frequency;
}
