chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"'
def pad(bin, n):
    r = bin
    for x in range(len(bin), n):
        r = '0' + r
    return r

def b91decode(str):
    if str == '':
        return ''
    binary = ""
    totalLength = 0
    for i in range(0, len(str), 2):
        remainder = chars.index(str[i])
        quotient = chars.index(str[i+1]) if i+1 < len(str) else 0
        n = remainder+quotient*91
        bits = 13 if (n&8191) > 88 else 14
        totalLength += bits
        if i+2 >= len(str):
            number = bin(n)[2:]
        else:
            number = pad(bin(n)[2:], bits)
        binary = number + binary
    binary = binary[::-1]
    bytes = [pad(binary[i:(i+8)][::-1], 8) for i in range(0, len(binary), 8)]
    return ''.join([chr(int("0b"+x, 2)) for x in bytes])
    
def b91encode(str):
    if str == '':
        return ''
    bin = ''.join(pad(format(ord(x), 'b'), 8)[::-1] for x in str)
    r = ""
    added = 0
    for x in range(0, len(bin), 13):
        t = ""
        for i in range(x+added, x+13+added):
            temp = bin[i] if i < len(bin) else ''
            t = temp + t
        n = int(t, 2)
        a = ''
        if n <= 88:
            a = '' if x+13+added > len(bin) else bin[x+13+added]
            n = int(a+t, 2)
            added += 1
        if x+1 < len(str) or n//91 > 0:
            r += chars[n%91] + chars[n//91]
        elif len(t+a) < 8:
            r += chars[n%91]
        else:
            r += chars[n%91] + chars[n//91]
        if x+added+13 >= len(bin):
            break
    return r