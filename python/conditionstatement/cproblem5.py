marks = int(input("enter your marks\n"))
if marks > 90:
    gread = "exelent"
elif marks > 80:
    gread = "A"
elif marks > 70:
    gread = "b"
elif marks > 60:
    gread = "c"
elif marks > 50:
    gread = "d"
else:
    gread = "f"
print("your gread is" +  gread)
