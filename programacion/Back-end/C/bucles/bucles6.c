
#include <stdio.h>
#include <stdlib.h>

int main()
{


    //Demana a l’usuari que vagi introduint nombres i ves sumant-los en una variable. Deixa de demanar nombres quan la suma total superi 100 (o qualsevol límit
    //que decideixis).

    int numerin_limite;
    int suma = 0;
    int suma2 = 0;
    printf("Dime tu numero limite!\n");
    scanf("%d", &numerin_limite);

    while(suma < numerin_limite){

        printf("Ves diciendo: ");
        printf("Va por: %d\n", suma);
        printf("Numero limite: %d\n", numerin_limite);
        scanf("%d", &suma2);

        suma = suma + suma2;

    }
    printf("Te has pasado de %d y has acabado con %d", numerin_limite, suma);

    return 0;

}
