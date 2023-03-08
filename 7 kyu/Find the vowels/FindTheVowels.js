const vowelIndices = w => w.split('').map((x, i) => x = ("aeuioyAEUIOY".includes(x) ? i+1 : -1)).filter(x => x != -1);
