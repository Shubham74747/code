# n = 456
# a = n%10
# b = int(n/10)
# c = b%10
# d = int(b/10)
# e = d%10
# f = d/10
# sum = a+c+e
# print(sum)

n = int(input("enter a number"))

def getsum(n):
    sum = 0
    for digit in str(n): 
      sum += int(digit)      
    return sum

print(getsum(n))



# n=int(input("Enter a number:"))
# sum = 0
# while(n>0):
#     dig=n%10
#     sum = sum + dig
#     n = n // 10
# print("The total sum of digits is:",sum)