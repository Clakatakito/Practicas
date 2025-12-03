
#include <stdio.h>
#include <stdlib.h>

int main()
{
    //El programa genera (o tu defineixes) un número secret entre 1 i 10. L’usuari ha d’intentar endevinar-lo. Cada cop que l’usuari introdueixi un nombre, el programa
    //respondrà “Massa alt”, “Massa baix” o “Encertat!” i, si és encertat, s’acaba el joc. Si no, continua demanant nombres.


    int numeroAdivinar;
    int intento;
    printf("Dime un numero del 1 al 10:\n");
    scanf("%d", &numeroAdivinar);


    while(numeroAdivinar != intento){
        scanf("%d", &intento);

        if(numeroAdivinar < intento){
            printf("Muy arriba\n");
        }

        if(numeroAdivinar > intento){

            printf("Muy abajo\n");

        }
    }

    printf("Acertaste, es el: %d\n", intento);
    return 0;
}
