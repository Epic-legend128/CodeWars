const countZeros = (n) => new Array(n+1).fill(0).map((x, i) => x=i).join('').split('').filter(x => x==0).length-1;
