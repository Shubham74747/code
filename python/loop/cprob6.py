'''
    Factorial of a number
'''


# num = int(input('enter a number'))
# fact = 1
# if(num == 0):
#     print("fact of 0 is 1")
# else:
#     for i in range(1,num+1):
#         fact = fact*i
#     print("factorial of",num,"is",fact)


n = int(input("enter a number")) #range
factorial = 1
if (n >1):
    for i in range(1,n+1):
        factorial = factorial*i
    print(factorial)


# import math
# num = int(input("enter a number"))
# print("the factorial of a number")
# print(math.factorial(num))