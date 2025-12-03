#include <stdio.h>
#include <stdlib.h>

int main()
{
    //El programa genera (o tu defineixes) un número secret entre 1 i 10. L’usuari ha d’intentar endevinar-lo. Cada cop que l’usuari introdueixi un nombre, el programa
    //respondrà “Massa alt”, “Massa baix” o “Encertat!” i, si és encertat, s’acaba el joc. Si no, continua demanant nombres.


    int numeroAdivinar;
    int intento;
    printf("Dime un numero del 1 al 10, puto");
    scanf("%d", &numeroAdivinar);


    while(numeroAdivinar != intento){
        printf("HABER SI LO ADIVINAS");
        scanf("%d", &intento);


    }

    printf("Hello world!\n");
    return 0;
}