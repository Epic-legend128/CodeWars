def hyperfact(num):
    r = 1
    for i in range(2, num+1):
        r *= i**i
    return r%1000000007
