const divCon = x => x.filter(x => typeof x == "number").reduce((t, x) => t+x, 0) - x.filter(x => typeof x == "string").reduce((t, x) => t+parseInt(x), 0);
