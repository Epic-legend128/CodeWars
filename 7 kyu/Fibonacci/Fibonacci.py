def fibonacci(n) -> int:
    if n == 0:
        return 0
    a = 1
    b = 1
    for i in range(n-2):
        a = a+b
        b = a-b
    return a
