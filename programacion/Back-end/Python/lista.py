nombres = ["Juan", "Maria", "Carlos"]
eleccion_anterior = None
while True:
    print ("Los nombres disponibles son: (Juan), (Maria) y (Carlos)")
    for nombre in nombres:
        print(nombre)
    eleccion = input("Elige un nombre: ")
    if eleccion == eleccion_anterior:
        print("¡Ya has elegido ese nombre!")
    elif eleccion in nombres:
        print(f"Has elegido: {eleccion}")
        eleccion_anterior = eleccion
    else:
        print("Nombre no válido. Intenta de nuevo.")
