const arraysSimilar = (arr1, arr2) => arr1.length == (arr2=arr2.sort()).length && arr1.sort().filter((x, i) => arr2[i]===x).length == arr1.length;
