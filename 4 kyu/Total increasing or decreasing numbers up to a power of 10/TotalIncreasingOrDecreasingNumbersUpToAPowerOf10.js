function mult(l, r) {
    let t = 1;
    for (let i = l; i<=r; i++) {
        t *= i;
    }
    return t;
}

const totalIncDec = n => Math.round(mult(n+1, n+9)/mult(1,9) * ((n+10)/10+1) - 10*n - 1);