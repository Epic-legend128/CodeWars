const to1D = (x, y, size) => x+y*size[0];

const to2D = (n, size) => [n%size[0], parseInt(n/size[0])];
