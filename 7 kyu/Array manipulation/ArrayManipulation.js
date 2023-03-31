const arrayManip = array => [...array].map((x, i) => [...array].splice(i+1, array.length-i-1).filter(y=>y>x).sort((a,b)=>a-b)[0]||-1);
