uniqueSum = lst => (lst.length == 0 ? null : Array.from(new Set(lst)).reduce((t,x) => t+x, 0));
