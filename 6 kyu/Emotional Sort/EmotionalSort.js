let r = [ ':D', ':)', ':|', ':(', 'T_T' ];

const sortEmotions = (arr, order) => order ? arr.sort((a, b) => r.indexOf(a) - r.indexOf(b)) : arr.sort((a, b) => r.indexOf(b) - r.indexOf(a));
