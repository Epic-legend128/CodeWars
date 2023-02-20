const reverseWords = (str) => str.split(' ').map((x) => x.split('').reverse().join('')).join(' ');
