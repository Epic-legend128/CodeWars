const encode = t => t.split('').map(x => /[a-zA-Z]/.test(x) ? (x.charCodeAt(0)%2 ? '0' : '1') : x).join('');
