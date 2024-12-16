cont=0
num=float(input("De que numero quieres hacer la tabla:"))
pos=float(input("Cuantas posisciones en la tabla quieres?:"))
while cont <= pos:
    print(f"{cont} * {num} = {cont * num}")
    cont = cont+1
    if cont==pos + cont:
        break
