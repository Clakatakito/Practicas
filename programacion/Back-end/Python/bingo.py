import time
import random
listbingogeneral = list(range(1, 100))
listbingo20 = list(range(1, 20))
listbingo40 = list(range(21, 40))
listbingo60 = list(range(41, 60))
listbingo80 = list(range(61, 80))
listbingo100 = list(range(81, 100))
listbingousado20 = []
listbingousado40 = []
listbingousado60 = []
listbingousado80 = []
listbingousado100 = []
listajug20 = []
listajug40 = []
listajug60 = []
listajug80 = []
listajug100 = []
listausado = []
while len(listausado) != 25:
    numrandom = random.choice(listbingogeneral)
    if numrandom < 20:
        if numrandom in listausado:
            pass
        else:
            listbingousado20.append(numrandom)
            listajug20.append(numrandom)
            listausado.append(numrandom)
    if 20 < numrandom < 40:
        if numrandom in listausado:
            pass
        else:
            listbingousado40.append(numrandom)
            listajug40.append(numrandom)
            listausado.append(numrandom)
    if 40 < numrandom < 60:
        if numrandom in listausado:
            pass
        else:
            listbingousado60.append(numrandom)
            listajug60.append(numrandom)
            listausado.append(numrandom)
    if 60 < numrandom < 80:
        if numrandom in listausado:
            pass
        else:
            listbingousado80.append(numrandom)
            listajug80.append(numrandom)
            listausado.append(numrandom)
    if 80 < numrandom < 100:
        if numrandom in listausado:
            pass
        else:
            listbingousado100.append(numrandom)
            listajug100.append(numrandom)
            listausado.append(numrandom)
print("Tu tablero es este:")          
listajug20.sort()
listajug40.sort()
listajug60.sort()
listajug80.sort() 
listajug100.sort()          
print(listajug20)
print(listajug40)
print(listajug60)
print(listajug80)
print(listajug100)
#Los numeros ya han sido dados, ahora jugaremos al BINGO
time.sleep(10)
print("Ahora iremos diciendo los numeros mucho ojo: ")
juegabingonumusado = []
listageneralnumeros = []
while len(listageneralnumeros) != 25:
    juegabingonumrandom = random.randint(1, 100)
    print(juegabingonumrandom)
    time.sleep(7)
    if juegabingonumrandom in listajug20:
        if juegabingonumrandom in listageneralnumeros:
            pass
        else:    
            listajug20.remove(juegabingonumrandom)
            listageneralnumeros.append(juegabingonumrandom)
    print(listajug20)
    if juegabingonumrandom in listajug40:
        if juegabingonumrandom in listageneralnumeros:
            pass
        else:    
            listajug40.remove(juegabingonumrandom)
            listageneralnumeros.append(juegabingonumrandom)
    print(listajug40)
    if juegabingonumrandom in listajug60:
        if juegabingonumrandom in listageneralnumeros:
            pass
        else:    
            listajug60.remove(juegabingonumrandom)
            listageneralnumeros.append(juegabingonumrandom)
    print(listajug60)
    if juegabingonumrandom in listajug80:
        if juegabingonumrandom in listageneralnumeros:
            pass
        else:    
            listajug80.remove(juegabingonumrandom)
            listageneralnumeros.append(juegabingonumrandom)
    print(listajug80)
    if juegabingonumrandom in listajug100:
        if juegabingonumrandom in listageneralnumeros:
            pass
        else:
            listajug100.remove(juegabingonumrandom)
            listageneralnumeros.append(juegabingonumrandom)
    print(listajug100)                
print("BINGO")