const sortDict = dict => new Array((s=Object.keys(dict)).length).fill(0).map((x, i) => [!Number.isNaN(parseInt(s[i])) ? parseInt(s[i]) : s[i], dict[s[i]]]).sort((a,b) => b[1]-a[1]);
