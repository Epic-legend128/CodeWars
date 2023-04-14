const prefixSumsToSuffixSums = s => s.map((x, i) => s[s.length-1] - (s[i-1]||0));
