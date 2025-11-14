import sys
c=sys.stdin.readlines()
a=[]
print(c)
for line in c:
    for num in list(map(int, line.split())):
        if num%42!=0:
            a.append(num)
            print(num)
print(a)
hjkhgjhgjhggdfgfd