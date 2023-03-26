function isSortedAndHow(array) {
  let isIncr = true, isDecr = true;
  for (let i = 0; i<array.length-1 && (isIncr || isDecr); i++) {
    if (array[i] > array[i+1]) isIncr = false;
    else if (array[i] < array[i+1]) isDecr = false;
  }
  return isIncr ? "yes, ascending" : isDecr ? "yes, descending" : "no";
}
