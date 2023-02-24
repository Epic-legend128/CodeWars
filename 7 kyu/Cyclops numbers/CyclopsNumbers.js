const cyclops = (n) => ((n=n.toString(2)).split('').reduce((t, x) => t+parseInt(x), 0) == n.length-1 && n.length%2==1 && n[(n.length-1)/2] == '0');
