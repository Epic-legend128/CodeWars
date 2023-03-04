const bandNameGenerator = s => (s[0] == s[s.length-1]) ? s[0].toUpperCase()+(s=s.substring(1).toLowerCase())+s : "The "+s[0].toUpperCase()+s.substring(1).toLowerCase();
