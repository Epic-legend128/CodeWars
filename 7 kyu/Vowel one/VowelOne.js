const vowelOne = s => s.split('').map(x => "aeiouAEIOU".includes(x) ? '1' : '0').join('');
