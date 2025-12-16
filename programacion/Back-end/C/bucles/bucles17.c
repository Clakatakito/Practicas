
#include <stdio.h>
#include <stdlib.h>

int main()
{


    //Simula la generació de 10 nombres “aleatoris” (pots demanar a l’usuari que els introdueixi per fer-ho manualment).
    //Després, al final, mostra quants estan entre 1 i 50, i quants entre 51 i 100, per exemple.

    int ingresar;
    int encima = 0;
    int debajo = 0;
    printf("Ingresa 10 numeros\n");
    for(int i = 1; i <= 10;i++){

        printf("Di numero\n");
        scanf("%d", &ingresar);

        if(ingresar < 50 && ingresar > 0){

            debajo++;

        }
        else{

            encima++;

        }

    }
    printf("Hay %d numero encima de 50\n", encima);
    printf("Hay %d numero debajo de 50", debajo);

    return 0;
}