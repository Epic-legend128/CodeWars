function cleanedCounts(d) {
  let data = [...d];
  for (let i = 1; i<data.length; i++) {
    if (data[i-1] > data[i]) {
      data[i] = data[i-1];
    }
  }
  return data;
}
