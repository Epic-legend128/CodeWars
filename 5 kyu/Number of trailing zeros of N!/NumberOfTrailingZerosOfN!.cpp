long zeros(long n) {
    long r = 0;
    long f = 5;
    while (f <= n) {
        r += (long)n/f;
        f *= 5;
    }
    return r;
}