const sortMyString = s => s.split('').filter((x, i) => i%2 == 0).join('') + " " + s.split('').filter((x, i) => i%2).join('');
