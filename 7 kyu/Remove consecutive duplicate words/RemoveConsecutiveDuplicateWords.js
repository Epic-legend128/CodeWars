const removeConsecutiveDuplicates = s => (s=s.split(' ')).filter((x, i) => x != s[i+1]).join(' ');
