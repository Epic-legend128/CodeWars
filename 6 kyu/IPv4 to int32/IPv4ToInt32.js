const ipToInt32 = ip => parseInt(ip.split('.').map(x => (s=parseInt(x).toString(2))).map(x => new Array(8-x.length).fill('0').join('') + x).join(''), 2);
