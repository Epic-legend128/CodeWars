function distancesFromAverage(arr) {
    let avg = arr.reduce((t, x) => t+x, 0)/arr.length;
    return arr.map(x => Math.round((avg-x)*100)/100);
}