num1 = int(input("enter a number"))
num2 = int(input("enter a number"))


for num in range(num1,num2+1):
    if num > 1:
        for i in range(2,num):
            if(num%i==0):
                break
        else:
            print(num)
