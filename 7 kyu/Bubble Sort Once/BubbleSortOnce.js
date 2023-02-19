function bubblesortOnce(array) {
  let a = [...array];
  for (let i = 0; i<a.length-1; i++) {
    if (a[i] > a[i+1]) {
      let temp = a[i];
      a[i] = a[i+1];
      a[i+1] = temp;
    }
  }
  return a;
}
