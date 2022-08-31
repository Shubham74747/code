# n = 5
# print("*")

# n = 5
# for i in range(n):
#     print("*")
 
 # 5 star row and colom:
# n = 5
# for i in range(n):  
#     for j in range(n):
#         print("*", end="")
#     print()

#increase tringle pattern
# n = 5
# for i in range(n):
#     for j in range(i+1):
#         print("*",end="")
#     print()

# decrising tringle pattern
# n = 5
# for i in range(n):
#     for j in range(i,n):
#         print("*",end="")
#     print()

n = int(input("enter a number"))
for i in range(n):
    for j in range(i,n):
        print("*",end="")
    print()

