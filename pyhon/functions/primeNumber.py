def primeNumber(num):
    count=0
    for i in range(1,num+1):
        if num%i==0:
            count+=1

    if count==2:
        return True
    else:
        return False


num=17
print(primeNumber(num))
