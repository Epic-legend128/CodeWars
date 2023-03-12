const solution = (a, b) => a.length < b.length ? solution(b, a) : b+a+b;
