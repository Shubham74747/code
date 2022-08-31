num1 = int(input('enter a number 1'))
num2 = int(input('enter a number 2'))
num3 = int(input('enter a number 3'))
num4 = int(input('enter a number 4'))
allnum = {num1 , num2, num3, num4}
print("all numbers", allnum)
if (num1>num2 and num1>num3 and num1>num4):
    print(num1,"is greatest numbeer")
elif(num2>num3 and num2 >num4):
    print(num2,"is greatest number")
elif(num3>num4):
    print(num3,"is greatest number")
else:
    print(num4,"is greatest number")