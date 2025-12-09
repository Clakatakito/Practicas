import random
import time
listnum = list(range(1, 20))
listusado = []
cont = 0
while len(listusado) != 10:
    elnumero = random.choice(listnum)
    if elnumero in listusado:
        print("Ya se puso")
    else:
        listusado.append(elnumero)    
    time.sleep(3)
    print (elnumero)
    if len(listusado) == 10:
        break
print(listusado)   
