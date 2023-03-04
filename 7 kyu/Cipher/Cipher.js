const encode = (str) => str.split('').map(x => String.fromCharCode(x.charCodeAt(0)*6)).join('');

const decode = (str) => str.split('').map(x => String.fromCharCode(x.charCodeAt(0)/6)).join('');
