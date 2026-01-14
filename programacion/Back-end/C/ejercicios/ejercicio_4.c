
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{



    int intento = 4;
    int cont = 0;
    int respuesta;
    bool correcto = false;


    printf("Introduce un numero positivo i divisible\n");



    while(cont != 4 && correcto == false){


        cont++;
        scanf("%d", &respuesta);




        printf("Sigue poniendo, te quedan %d\n", cont);



        if(respuesta % 5 == 0){


            correcto = true;

            if(cont == 3){

                printf("Que buena, a la ultima");
                correcto = true;

            }


        }


    }

    return 0;
}