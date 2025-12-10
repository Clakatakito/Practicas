
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana a l’usuari si vol veure la taula de multiplicar de 5, de 7 o de 9 (per exemple). Un cop escollida, mostra-la fins al 10. Després, pregunta si vol repetir amb
    //una altra taula o sortir.

    int resultado;
    int respuesta_user;
    int es_cinco = 5;
    int es_siete = 7;
    int es_nueve = 9;


   do {

    printf("Que tabla quieres la del 5, 7 o 9? introduce (0) para salir\n");
    scanf("%d", &respuesta_user);

    if(respuesta_user == 5){

            for(int i = 1; i <= 10; i++){

                resultado = es_cinco * i;
                printf("%d X %d = %d\n", es_cinco, i, resultado);

            }

        }

        if(respuesta_user == 7){

            for(int i = 1; i <= 10; i++){

                resultado = es_siete * i;
                printf("%d X %d = %d\n", es_siete, i, resultado);

            }

        }

        if(respuesta_user == 9){

            for(int i = 1; i <= 10; i++){

                resultado = es_nueve * i;
                printf("%d X %d = %d\n", es_nueve, i, resultado);

            }

        }



    } while(respuesta_user != 0);



    //marc maricon, subnormal

    return 0;
}
