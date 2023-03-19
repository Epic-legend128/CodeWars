const spinWords = string => string.split(' ').map(x => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ');
