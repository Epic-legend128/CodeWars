const helloWorld = _ => ([72, 101, 108, 108, 111, 44,  32,  87, 111, 114, 108, 100, 33]).map(x => String.fromCharCode(x)).reduce((t,x) => t+x);
