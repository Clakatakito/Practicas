#ej 1

#cont = 0
#pidousuario = input("Cual es su usuario:")
#pidocontra = input("Cual es su contraseña:")

#while True:
    #usuario = input("Cual es su usuario:")
    #contra = input("Cual es su contraseña:")

    #if pidousuario == usuario and pidocontra == contra:
        #print("Bienvenido " + usuario)
        #break
    #elif pidousuario == usuario and pidocontra != contra:
        #cont += 1
        #if cont == 3:
            #print("Inicio de sesion cancelado")
            #break
    #else:
        #print("Usuario o contraseña incorrectos. Inténtelo de nuevo.")


#ej 2


#n1=int(input("Donam el primer numero:"))
#n2=int(input("Donam el segon numero:"))
#n3=n2
#sumar=0
#cont=0
#while (n1>n2):
  #  sumar=int(input("El segon numero es mes petit que el primer, posa altre numero per sumarlos:"))
 #   n2=n2+sumar
#    #cont=cont+1
    #print ("El segundo num va por:" + str(n2))
#print("El primer numero que has posat es: "+str(n1))
#print("El segon numero que has posat i probablement sumat també es: "+str(n2))
 



#ej 4







#ej 5

#totalpositius=0
#totalnegatius=0
#print ("Escribe un número positivo, nagativo o zero si quieres salir del programa:")
#num=int(input("Num:"))
#while (num != 0):
    #if num > 0:
        #totalpositius = (totalpositius + num)
    #if num < 0:
        #totalnegatius = (totalnegatius + num)
    #num=int(input("Num:")) 
#print ("Grande crack")
#print ("La suma de los positivos es:"+ str(totalpositius))
#print ("La suma de los negativos es:"+ str(totalnegatius))        

#ej 6


#limit=int(input("Numero limite"))
#valor = 0
#valortotal=0
#cont=0
#while (valortotal==limit):
    #num=int(input("Dime numeros hasta tu limites:"))
    #if num:



# ej bernat

# multi(num,num2):
#print (num*list)

#lista = [0,1,2,3,4,5,6,7,8,9,10]
#lista[0] = 0
#lista[1] = 1
    #ran=range(1,-1)
#cont=0
#print ("********* TABLA DE MULTIPLICAR *******")
#num=float(input("De qué número quieres su tabla del 10? "))
#while cont < 11:
    #print (lista[0],"*",num,"= ",lista[0]*num)
    






#ej 7

print ("Pon dos numeros i sigue poniendo numeros que vayan entre esos numeros")
n1=int(input("Primer numero:"))
n2=int(input("Segundo numero:"))
n3=int(input("Pon un numero entre el rango:"))
cont=n2
while n1 <= n3 <= n2:
    print ("Si esta en el rango el" + " "+ str(n3) + " " +("entre"+ " " + str(n1))+ " " + ("i") + " " + str(n2))
    n3=int(input("Pon mas numeros entre el rango:"))
print ("No esta entre el rango el"+ " " + str(n3) +  " " +("entre"+ " " + str(n1))+ " " + ("i el") + " " + str(n2))


#ej 8

#print ("escribe numero parejos o escribe (s) para salir")
#salir="s"
#num=int(input("Pide numeros o no:"))
#while (num==s):
