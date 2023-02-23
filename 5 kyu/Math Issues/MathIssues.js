Math.round = (number) => number*10-parseInt(number)*10 >= 5 ? parseInt(number)+1 : parseInt(number);

Math.ceil = (number) => number*10-parseInt(number)*10 > 0 ? parseInt(number)+1 : parseInt(number);

Math.floor = (number) => parseInt(number);
