const sequenceSum = (begin, end, step) => begin > end ? 0 : new Array(Math.floor((end-begin)/step)+1).fill(1).map((x, i) => begin+(i*step)).reduce((t, x) => t+x, 0);
