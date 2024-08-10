function checkThreeAndTwo(array) {
    let a = (array.join('').match(/a/g)|| []).length;
    let b = (array.join('').match(/b/g)|| []).length;
    let c = (array.join('').match(/c/g)|| []).length;
    return (a == 2 && (b == 3 || c == 3)) || (a == 3 && (b == 2 || c == 2)) || (b == 2 && c == 3) || (b == 3 && c == 2);
}