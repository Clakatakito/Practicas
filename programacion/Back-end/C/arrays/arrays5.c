
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{

    //Donat un array de 15 posicions, comprova si tots els seus elements són nombres parells. Mostra un missatge a l’usuari informant del resultat.

    bool impar = false;
    int array[15] = {2,2,2,2,3,2,2,2,2,2,2,2,2,2,2};

    int cont = 0;

    while(impar == false && cont < 15){


        if(array[cont] % 2 != 0){

            impar = true;

        }

        cont++;

    }

    if(impar == false){

        printf("TODOS POSITIVOS");

    }else{

        printf("HAY ALMENOS 1 NEGATIVO");

    }

    return 0;
}