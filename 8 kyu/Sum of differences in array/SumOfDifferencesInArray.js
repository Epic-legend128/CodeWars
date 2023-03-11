const sumOfDifferences = arr => arr.sort((a, b) => b-a).map((x, i) => x-arr[i+1]).slice(0, arr.length-1).reduce((t, x) => t+x, 0);
