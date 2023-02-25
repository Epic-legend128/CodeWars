const solve = s => s.split(/[a-z]/g).length < s.split(/[A-Z]/g).length ? s.toUpperCase() : s.toLowerCase();
