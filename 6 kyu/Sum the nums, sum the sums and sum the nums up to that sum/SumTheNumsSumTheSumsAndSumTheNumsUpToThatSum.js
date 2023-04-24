//original: ((n*(n+1)/2) * ((n-1)/3+1))
const w = n => (n*(n+1n)*(n+2n))/6n; //simplified

const sumOfSums = n => ((a=w(n))*(a+1n)/2n);
