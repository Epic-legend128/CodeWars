const findDigit = (num, nth) => nth > 0 ? parseInt((num=num.toString())[num.length-nth])||0 : -1;
