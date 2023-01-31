def dig_pow(n, p):
    num = []
    num.extend(str(n))
    total = 0
    for x in num:
        total += int(x)**p
        p+=1
    return int(total/n) if total//n == total/n else -1
