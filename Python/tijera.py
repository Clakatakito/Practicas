rondas=int(input("Cuantas rondas quieres jugar?:"))
cont= 0
totalGana1 = 0
totalGana2 = 0
while (cont != rondas):
    print ("Vamos a jugar al piedra papel o tijeras")
    print ("Piedra(1), Papel(2), Tijeras(3), Salir(4)")
    jug1=int(input("Escoje jugador 1:"))
    jug2=int(input("Escoje jugador 2:"))
    #Piedra contra tijera
    if jug1 ==1 and jug2 ==3:
        print ("Ha gando Piedra contra tijeras, Gana Jugador 1")
        totalGana1 +1
    if jug2==1 and jug1 ==3:
        print ("Ha gando Piedra contra tijeras, Gana Jugador 2")
        totalGana2+1
    #Tijeras contra papel    
    if jug1 ==3 and jug2==2:
        print ("Ha gando Tijeras contra papel, Gana Jugador 1")
        totalGana1+1
    if jug2 ==3 and jug1==2:
        print ("Ha gando Tijeras sobre papel, Gana Jugador 2")
        totalGana2+1
    #Papel contra piedra    
    if jug1==2 and jug2==1:
        print ("Ha gando Papel contra piedra, Gana Jugador 1")
        totalGana1+1
    if jug2==2 and jug1==1:
        print ("Ha gando Papel contra piedra, Gana Jugador 2")
        totalGana2+1
    #Empate piedra con piedra         
    if jug1==1 and jug2 ==1:
        print ("Empate Piedra con Piedra, No hay ganador")
        totalGana1+1  
    if jug2==1 and jug1 ==1:
        print ("Empate Piedra con Piedra, No hay ganador")
        totalGana2+1
    #Empate papel con papel    
    if jug1==2 and jug2 ==2:
        print ("Empate papel con papel, No hay ganador")
    if jug2==2 and jug1 ==2:
        print ("Empate papel con papel, No hay ganador")
    #Empate tijeras con tijeras    
    if jug1==3 and jug2 ==3:
        print ("Empate tijera con tijera, No hay ganador")
    if jug2==3 and jug1 ==3:
        print ("Empate tijera con tijera, No hay ganador")
    if jug1==4 or jug2==4:
        break
    cont = cont + 1 # cont+=1      cont++

print ("Gracias por jugar :)")                 
        