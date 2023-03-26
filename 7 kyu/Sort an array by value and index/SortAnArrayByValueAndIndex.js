const sortByValueAndIndex = array => array.map((x, i) => [x*(i+1), x]).sort((a, b) => a[0]-b[0]).map(x => x[1]);
