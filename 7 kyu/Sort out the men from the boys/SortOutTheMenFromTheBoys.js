const menFromBoys = arr => Array.from(new Set([...arr.filter(x=>x%2==0).sort((a,b)=>a-b), ...arr.filter(x=>x%2).sort((a,b)=>b-a)]));
