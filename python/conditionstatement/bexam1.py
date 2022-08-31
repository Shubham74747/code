qty = int(input("enter value of quantity: "))
price = float(input("enter value of prise: "))
if qty > 1000:
    dis = 10
else:
    dis = 0
totexp = qty*price-qty*price*dis/100
print('Total expense = Rs.' + str(totexp))