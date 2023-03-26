const area = n => typeof n == "number" ? (n**2)*Math.PI : n[0]*n[1];

const sortByArea = array => [...array].sort((a, b) => area(a)-area(b));
