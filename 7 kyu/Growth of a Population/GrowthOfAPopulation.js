function nbYear(p0, percent, aug, p) {
  if (p0 >= p) return 0;
  return Math.floor(nbYear(p0+Math.floor(p0*percent/100)+aug, percent, aug, p)+1);
}
