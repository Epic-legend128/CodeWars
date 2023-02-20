const uniTotal = (string) => string.split('').reduce((t, x) => t+x.charCodeAt(0), 0);
