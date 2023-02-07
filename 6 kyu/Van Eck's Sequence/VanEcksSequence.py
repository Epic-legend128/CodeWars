def seq(n):
    seen = {}
    term = 0
    for i in range(n-1):
        prev = term
        if term not in seen:
            term = 0
        else:
            term = i-seen[term]
        seen[prev] = i
    return term
