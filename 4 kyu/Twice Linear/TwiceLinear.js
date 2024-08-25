function dblLinear(n) {
    if (n == 0) return 1;
    let arr = [1];
    let yi = 0;
    let zi = 0;
    while (arr.length <= n) {
        let y = 2*arr[yi]+1;
        let z = 3*arr[zi]+1;
        if (y < z) {
            arr.push(y);
            yi++;
        }
        else if (y > z) {
            arr.push(z);
            zi++;
        }
        else {
            arr.push(y);
            zi++;
            yi++;
        }
    }
    return arr[n];
}