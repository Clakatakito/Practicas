EquipoA=[1,2,3,4,5,6,7,8,9,10,11,12,13]
EquipoB=[14,15,16,17,18,19,20,21,22,23,24,25,26,27]
EquipoAinicial=[]
EquipoBinicial=[]
print("Selecciona els 5 jugadors de l'equip A. Ex:3,7,8,10,12 "+str(EquipoA))
for x in EquipoA:
    if x == 6:
        break
    suma=int(input())
    if suma in EquipoAinicial:
        print("Jugador ya está en este equipo")
    else:
        if suma in EquipoA:
            EquipoAinicial.append(suma)
print("Selecciona els 5 jugadors de l'equip B. Ex:3,7,8,10,12 "+str(EquipoB))
for x in EquipoB:
    if x == 19:
        break
    suma2=int(input())
    if suma2 in EquipoBinicial:
        print("Jugador ya está en este equipo")
    else:
        if suma2 in EquipoB:
            EquipoBinicial.append(suma2)
print("Ya ha acabado la primera ronda")
print("Elige el jugador a cambiar del equipo A")
cambioA=5
while cambioA!=0:
    cambioA1=int(input())
    if cambioA1 in EquipoAinicial:
        EquipoAinicial.remove(cambioA1)
    print("Elige jugador por el que cambiarlo")
    cambioA2=int(input())
    EquipoAinicial.append(cambioA2)
    cambioA=cambioA-1
print("Jugadors en l'equip A actuals: "+str(EquipoAinicial))
print("Elige el jugador a cambiar del equipo B")
cambioB=5
while cambioB!=0:
    cambioB1=int(input())
    if cambioB1 in EquipoBinicial:
        EquipoBinicial.remove(cambioB1)
    print("Elige un jugador por que cambiarlo")
    cambioB2=int(input())
    EquipoBinicial.append(cambioB2)
    cambioB=cambioB-1
print("Jugadors en l'equip B actuals: "+str(EquipoBinicial))
print("Ya ha acabado la segunda ronda")
cambioA=5
while cambioA!=0:
    cambioA1=int(input())
    if cambioA1 in EquipoAinicial:
        EquipoAinicial.remove(cambioA1)
    print("Elige jugador por el que cambiarlo")
    cambioA2=int(input())
    EquipoAinicial.append(cambioA2)
    cambioA=cambioA-1
print("Jugadors en l'equip A actuals: "+str(EquipoAinicial))
print("Elige el jugador a cambiar del equipo B")
cambioB=5
while cambioB!=0:
    cambioB1=int(input())
    if cambioB1 in EquipoBinicial:
        EquipoBinicial.remove(cambioB1)
    print("Elige un jugador por que cambiarlo")
    cambioB2=int(input())
    EquipoBinicial.append(cambioB2)
    cambioB=cambioB-1
print("Jugadors en l'equip B actuals: "+str(EquipoBinicial))
print("Jugadors de l'equip A finals: "+str(EquipoAinicial))
print("Jugadors de l'equip B finals: "+str(EquipoBinicial))