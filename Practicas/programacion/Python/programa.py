while True:
    print ("Programa de 2 juegos")
    print ("Elije entre: Calculadora(1), piedra papel o tijera(2) o bingo(3) o salir(4)")
    eligjueg=int(input("Elije:"))
    if eligjueg==1:
        print ("Calculadora")
        v1=float(input("Primer valor:"))
        print ("Para sumar(1), para restar (2), para multiplicar (3) y para dividir (4)")
        s=int(input("Signo matematico:"))
        v2=float(input("Segundo valor:"))
        if s==1:
            print (v1+v2)
        if s==2:
            print (v1-v2)    
        if s==3:
            print (v1*v2)   
        if s==4:
            print(v1/v2)     
    if eligjueg==2:
        print ("Vamos a jugar al piedra papel o tijeras")
        print ("Piedra(1), Papel(2), Tijeras(3), Salir(4)")
        jug1=int(input("Escoje jugador 1:"))
        jug2=int(input("Escoje jugador 2:"))
        datos=jug1 and jug2
        #Piedra contra tijera
        if jug1 ==1 and jug2 ==3:
            print ("Ha gando Piedra contra tijeras, Gana Jugador 1")
        if jug2==1 and jug1 ==3:
            print ("Ha gando Piedra contra tijeras, Gana Jugador 2")
        #Tijeras contra papel    
        if jug1 ==3 and jug2==2:
            print ("Ha gando Tijeras contra papel, Gana Jugador 1")
        if jug2 ==3 and jug1==2:
            print ("Ha gando Tijeras sobre papel, Gana Jugador 2")
        #Papel contra piedra    
        if jug1==2 and jug2==1:
            print ("Ha gando Papel contra piedra, Gana Jugador 1")
        if jug2==2 and jug1==1:
            print ("Ha gando Papel contra piedra, Gana Jugador 2")
        #Empate piedra con piedra         
        if jug1==1 and jug2 ==1:
            print ("Empate Piedra con Piedra")
        if jug2==1 and jug1 ==1:
            print ("Empate Piedra con Piedra")
        #Empate papel con papel    
        if jug1==2 and jug2 ==2:
            print ("Empate papel con papel")
        if jug2==2 and jug1 ==2:
                print ("Empate papel con papel")
        #Empate tijeras con tijeras    
        if jug1==3 and jug2 ==3:
            print ("Empate tijera con tijera")
        if jug2==3 and jug1 ==3:
            print ("Empate tijera con tijera")
        if jug1==4:
            break
        if jug2==4:  
            break
    if eligjueg == 3:
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
                    print(".")
                else:
                    listbingousado20.append(numrandom)
                    listajug20.append(numrandom)
                    listausado.append(numrandom)
            if 20 < numrandom < 40:
                if numrandom in listausado:
                    print(".")
                else:
                    listbingousado40.append(numrandom)
                    listajug40.append(numrandom)
                    listausado.append(numrandom)
            if 40 < numrandom < 60:
                if numrandom in listausado:
                    print(".")
                else:
                    listbingousado60.append(numrandom)
                    listajug60.append(numrandom)
                    listausado.append(numrandom)
            if 60 < numrandom < 80:
                if numrandom in listausado:
                    print(".")
                else:
                    listbingousado80.append(numrandom)
                    listajug80.append(numrandom)
                    listausado.append(numrandom)
            if 80 < numrandom < 100:
                if numrandom in listausado:
                    print(".")
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
                    print(".")
                else:    
                    listajug20.remove(juegabingonumrandom)
                    listageneralnumeros.append(juegabingonumrandom)
            print(listajug20)
            if juegabingonumrandom in listajug40:
                if juegabingonumrandom in listageneralnumeros:
                    print(".")
                else:    
                    listajug40.remove(juegabingonumrandom)
                    listageneralnumeros.append(juegabingonumrandom)
            print(listajug40)
            if juegabingonumrandom in listajug60:
                if juegabingonumrandom in listageneralnumeros:
                    print(".")
                else:    
                    listajug60.remove(juegabingonumrandom)
                    listageneralnumeros.append(juegabingonumrandom)
            print(listajug60)
            if juegabingonumrandom in listajug80:
                if juegabingonumrandom in listageneralnumeros:
                    print(".")
                else:    
                    listajug80.remove(juegabingonumrandom)
                    listageneralnumeros.append(juegabingonumrandom)
            print(listajug80)
            if juegabingonumrandom in listajug100:
                if juegabingonumrandom in listageneralnumeros:
                    print(".")
                else:
                    listajug100.remove(juegabingonumrandom)
                    listageneralnumeros.append(juegabingonumrandom)
            print(listajug100)                
        print("BINGO")    
    if eligjueg ==4:
        break    
print ("Gracias por jugar :)")   