pidousuario=input("Cual es tu usuario:")
pidocontra=input("Cual es tu contraseña:")
cont=0
while True:
    usuario=input("Cual es tu usuario:")
    contra=input("Cual es tu contraseña:")
    if pidousuario == usuario and pidocontra == contra:
        print ("Bienvenido:" + " " + usuario)
        break
    if pidocontra != usuario and pidocontra != contra:
        cont=cont + 1
        print ("Inicio de sesion fallido, vuelva a provar")
    if cont == 3:
            print ("Inicio de sesion fallido por completo")
            break
