const billboard = (name, price = 30) => new Array(name.length).fill(price).reduce((t, x) => t+x, 0);
