# def max (num1,num2,num3):
#     if (num1>num2) and (num1>num3):
#         return num1
#     elif (num2>num3):
#         return num2
#     else:
#         return num3
# m = max(54,45,70)
# print(m)

def maximum(a, b, c): 
   list = [a, b, c] 
   return max(list) 
x = int(input("Enter First number"))
y = int(input("Enter Second number"))
z = int(input("Enter Third number"))
print("Maximum Number is",maximum(x, y, z)) 