
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana a l'usuari 10 números i guarda'ls en un array de 10 posicions. Fes un algoritme que et retorni per pantalla el primer i l'últim número,
    //accedint a les posicions de l'array corresponents.


    int array[10] = {};
    int respuesta;

    printf("Dame 10 numeros!\n");

    for(int i = 0; i < 10; i++){

        scanf("%d", &respuesta);
        array[i] = respuesta;

    }

    printf("Primer numero %d\n", array[0]);
    printf("Ultimo numero %d", array[9]);



    return 0;
}