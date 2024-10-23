lista = []
count = 0
while True:
    nombre = input("Ingresa un nombre: ")
    if nombre in lista:
        print("Ese nombre ya está en la lista.")
    else:
        lista.append(nombre)
        count += 1
    if count == 10:
        seguir = input("¿Quieres seguir agregando nombres? (Sí/No): ").lower()
        if seguir != "sí":
            print("Lista de nombres actualizada:", lista)
            break