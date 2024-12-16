juguetes = []
cont = 0
basta = 0
while basta != "basta":
    pidojuguete=input("Ideas de jueguetes:")
    if pidojuguete in juguetes:
        print("Eso ya esta")
    else:
        juguetes.append(pidojuguete)    
    basta=input("Para cuando quieras con (basta)")
print (juguetes)    
