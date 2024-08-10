function runningAverage() {
    let count = 0;
    let sum = 0;
    return function(n) {
      count++;
      sum += n;
      return Math.round(sum/count*100)/100;
    };
}