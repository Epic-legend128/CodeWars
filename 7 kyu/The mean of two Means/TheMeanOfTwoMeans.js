const getMean = (arr, x, y) => (x <= 1 || y <= 1 || x > arr.length || y > arr.length) ? -1 : (arr.filter((a,i) => i<x).reduce((a, t) => t+a, 0)/x + arr.reverse().filter((a,i) => i<y).reduce((a, t) => t+a, 0)/y)/2;