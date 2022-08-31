# driv = input("enter material status")
# s = input("enter your sex")
# age = int(input("enter your age"))
# if(driv == 'marr') or (driv == 'unmarr' and s=='m' and age >30) or (driv == 'unmarr' and s == 'f' and age > 25):
#     print("insured")
# else:
#     print("not insured")


driv = (input("enter material status :"))
s = input("enter your sex : ")
age = int(input("enter your age : "))
if(driv =='m'):
    print("insured")
elif(driv == 'u' and s=='m' and age >30):
    print("insured")
elif(driv=='u' and s=='f' and age>25):
    print("insured")
else:
    print("not insured")
    