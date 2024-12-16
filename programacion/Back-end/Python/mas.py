menucarnivoros=["Carne", "si"]
repartirmenucarnivoro=[]
repartirmenucarnivoro2=[]
menuhervivoros=["Pastanaga", "Ensalada"]
repartirmenuhervivoro=[]
menuniños=["Macarrones", "salchicha"]
repartirmenuniños=[]
cont=0
total=int(input("Cuantos son:"))
if total==4:
    cuantos=int(input("Cuantos adultos son:"))
    if cuantos==4:
        print("Tods carnivoros")
        while cont!=4:
            print(menucarnivoros)
            pedir=input("Pidan:")
            if pedir in menucarnivoros:
                repartirmenucarnivoro.append(pedir)
                cont=cont+1
            else:
                print("Algo de la lista pofavor")  
        print("Aqui sus pedidos")                                    
        print("----------------------------------")            
        print(repartirmenucarnivoro[0])      
        print("----------------------------------")
        print(repartirmenucarnivoro[1])
        print("----------------------------------")
        print(repartirmenucarnivoro[2])
        print("----------------------------------")
        print(repartirmenucarnivoro[3])   
        print("----------------------------------")
        print()
    if cuantos<4:
        cuantoscarn=int(input("Cuantos carnivors hay?"))
        cuantoshervivoros=int(input("Cuantos hervivoros hay?"))
        cuantosniños=int(input("Cuantos niños hay?"))
        contc=cuantoscarn
        conth=cuantoshervivoros
        contn=cuantosniños
        print("Menu de carivoros" , (menucarnivoros))
        print("Menu de hervivoros" , (menuhervivoros))
        print("Menu de niños" , (menuniños))
        while contc!=0:
            pedircarn=input("Pidan carnivoros:")
            if pedircarn in menucarnivoros:
                repartirmenucarnivoro2.append(pedircarn)
                contc=contc-1
            else:
                print("Algo de la lista pofavor")    
        while conth!=0:
            pedirherv=input("Pidan hervivoros:")
            if pedirherv in menuhervivoros:
                repartirmenuhervivoro.append(pedirherv)     
                conth=conth-1
            else:
                print("Algo de la lista pofavor")    
        while contn!=0:
            pedirniñ=input("Pidan niños:")
            if pedirniñ in menuniños:
                repartirmenuniños.append(pedirniñ)
                contn=contn-1
            else:
                print("Algo de la lista pofavor")    
        print("Tomen sus pedidos")
        print("----------------------------") 
        print(repartirmenucarnivoro2)   
        print("----------------------------")
        print(repartirmenuhervivoro) 
        print("----------------------------")  
        print(repartirmenuniños)  
        print("----------------------------")   
else:
    print("Solo 4")





