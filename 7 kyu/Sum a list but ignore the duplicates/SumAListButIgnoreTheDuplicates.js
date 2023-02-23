const sumNoDuplicates = (numList) => numList.sort().filter((x, i) => numList[i] != numList[i+1] && numList[i] != numList[i-1]).reduce((t, x) => t+x, 0);
