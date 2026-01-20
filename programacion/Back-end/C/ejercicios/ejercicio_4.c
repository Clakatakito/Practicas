
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{

    int intento = 4;
    int cont = 0;
    int respuesta;
    bool correcto = false;

    printf("Introduce un numero positivo i divisible entre 5\n");

    while(cont != 4 && correcto == false){

        cont++;
        printf("Intento numero %d/4\n", cont);
        scanf("%d", &respuesta);

        if(respuesta % 5 == 0 && respuesta > 0){
                correcto = true;
        }
    }

    if(cont == 4){

        printf("Que buena, a la ultima");
        correcto = true;


        }else{

            printf("Felicidades, solo has tardado %d", cont);

        }
    return 0;
}
