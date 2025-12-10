tios=["Marco", "Carmen", "Rafa", "Jordi", "Joaquin"]
regalos1=[20,15,10,5]
suma = sum(regalos1)
regalojoaquin1=[]
regalos2=[10,5,5,5]
suma2 = sum(regalos2)
regalojoaquin2=[]
print("Navidad con 8 años")
cont=0
while cont==0:
    regalo=input("Que quieres para reyes?:(Tren) o (Jugete):")
    if regalo==("Tren") or regalo==("Jugete"):
        regalojoaquin1.append(regalo)    
        print("Marco te da" , str(regalos1[0]))
        print("Carmen te da" , str(regalos1[1]))
        print("Rafa te da" , str(regalos1[2]))
        print("Jordi te da" , str(regalos1[3]))
        print("Joaquin te da" , str(regalojoaquin1[0]))
        print("Feliz navidad", str(regalos1), str(regalo))
        print("Total de dinero", str(suma)+"€", "y", str(regalojoaquin1))
        break
    else:
        print("Solo era Tren o Jugete")
print("Navidad con 18 años")
while True:
    regalo2=input("Que quieres para reyes?:(Un calcetin) o (Las gracias):")
    if regalo2==("Un calcetin") or regalo2==("Las gracias"):
        regalojoaquin2.append(regalo2)    
        print("Marco te da" , str(regalos2[0]))
        print("Carmen te da" , str(regalos2[1]))
        print("Rafa te da" , str(regalos2[2]))
        print("Jordi te da" , str(regalos2[3]))
        print("Joaquin te da" , str(regalojoaquin2[0]))
        print ("Feliz navidad", str(regalos2), str(regalo2))
        print("Total de dinero", str(suma2)+"€", "y", str(regalojoaquin2))
        break
    else:
        print("Solo era Un calcetin o Las gracias")
