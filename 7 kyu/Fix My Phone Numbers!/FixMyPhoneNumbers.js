const isItANum = str => (r=str.split('').filter(x => x.match(/\d/))).length == 11 && r[0] == '0' ? r.join('') : "Not a phone number";
