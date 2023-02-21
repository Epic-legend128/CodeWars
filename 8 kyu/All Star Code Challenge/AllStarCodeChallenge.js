const strCount = (str, letter) => (str.match(new RegExp(letter, 'g'))||[]).length;
