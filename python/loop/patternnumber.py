# n =   int(input("enter a number"))
# for i in range(1,n+1) :
#     for j in range(i):
#         print(j, end=" ")
#     print()
    
# for i in range(n,0,-1):
#     for j in range(i):
#         print(j,end=" ")
#     print()

# n =   int(input("enter a number"))   not run properly
# for i in range(1,n+1):
#     for j in range(i*2-1 ):
#         print( j ,end=" ")
#     print()

start = 1
stop = 2
current_num = stop
for row in range(2, 6):
    for col in range(start, stop):
        current_num -= 1
        print(current_num, end=' ')
    print("")
    start = stop
    stop += row
    current_num = stop