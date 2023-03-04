const checkDigit = (n, a, b, d) => n.toString().substring(Math.min(a, b), Math.max(a, b)+1).includes(d);
