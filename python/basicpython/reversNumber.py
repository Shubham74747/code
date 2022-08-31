# n = int(input("enter a number"))
# a = n%10
# b = int (n/10)
# o = a*10
# c = (b%10)
# d = int (b/10)
# p  = (o+c)*10
# e = d%10
# f = d/10
# res = (p+e)
# print(res)


# n = int(input("enter a number"))
# print(str(n) [::-1])

# n = int(input("enter a number"))
# rev = 0
# while(n != 0):
#     digit = n % 10
#     rev = (rev * 10)+ digit
#     n //= 10

# print(rev)

# n = int(input("enter a number"))
# def rev(n):
#     if (rev=0):
#         return digit = n % 10
#     rev = (rev * 10)+ digit
#     n //= 10
 
#     while(n != 0):
#         digit = n % 10
#         rev = (rev * 10)+ digit
#         n //= 10


def reverse(n):
    if n < 10:
        print(n)
    else:
        a = n%10
        b = int (n/10)
        o = a*10
        c = (b%10)
        d = int (b/10)
        p  = (o+c)*10
        e = d%10
        f = d/10
        print(p+e)

n = int(input("enter a number"))
print(reverse)