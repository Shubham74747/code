# n = int(input("enter a number"))
# for i in range(n):
#     for j in range(0,i+1):
#         print("*",end="")
#     print()

# n = int(input("enter a number"))
# for i in range(n,0,-1):
#     for j in range(0,i+1):
#         print("*",end="")
#     print()

# n = int(input("enter a number"))
# for i in range(0,n):
#     for k in range(0,n-i):
#         print(" ",end="")
#     for j in range(0,i+1):
#         print("*",end="")
#     print()      


# n = int(input("enter a number"))
# for i in range(n,0,-1):
#     for k in range(0,n-i):
#         print(" ",end="")
#     for j in range(0,i+1):
#         print("*",end="")
#     print()

# n = int(input("enter a number"))
# for i in range(n):
#     for k in range(0,n-i):
#         print(" ",end="")
#     for j in range(0,(2*i+1)):
#         print("*",end="")
#     print()

# n = int(input("enter a number"))
# for i in range(n,0,-1):
#     for k in range(0,n-i):
#         print(" ",end="")
#     for j in range(0,(2*i-1)):
#         print("*",end="")
#     print()

# n =int(input("entar a number"))
# for i in range(n):
#     for j in range(n):
#         if i == 0 or i == n - 1 or j == 0 or j == n - 1:
#             print('*', end='')
#         else:
#             print(' ', end='')
#     print()


# n = int(input("enter a number"))
# for i in range(1, n+1):
#     for j in range(i):
#         if j == 0 or j == i-1:
#             print('*', end='')
#         else:
#             if i != n:
#                 print(' ', end='')
#             else:
#                 print('*', end='')
#     print()

n = int(input("enter a number"))
for i in range(n):
    for j in range(n - i - 1):
        print(' ', end='')
    for k in range(2 * i + 1):
        if k == 0 or k == 2 * i:
            print('*', end='')
        else:
            if i == n - 1:
                print('*', end='')
            else:
                print(' ', end='')
    print()

# n = int(input("enter a number"))

# # upward pyramid
# for i in range(n):
#     for j in range(n - i - 1):
#         print(' ', end='')
#     for j in range(2 * i + 1):
#         print('*', end='')
#     print()

# # downward pyramid
# for i in range(n - 1):
#     for j in range(i + 1):
#         print(' ', end='')
#     for j in range(2*(n - i - 1) - 1):
#         print('*', end='')
#     print()