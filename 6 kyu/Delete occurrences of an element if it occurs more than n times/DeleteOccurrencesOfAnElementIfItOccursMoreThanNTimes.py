def delete_nth(order,max_e):
    n = []
    amount = {}
    for x in order:
        if (x not in amount):
            amount[x] = 0
        amount[x]+=1
        if amount[x] <= max_e:
            n.append(x)
    return n
