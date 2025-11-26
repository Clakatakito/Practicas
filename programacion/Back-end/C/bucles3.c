
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana a l’usuari un nombre N. Mitjançant un bucle, mostra la taula de multiplicar d’aquest nombre des de N×1 fins a N×10.

    float numerin;
    float resultado = 0;
    printf("Introduce un numero y yo te hago su tabla!\n");
    scanf("%f", &numerin);

    for(int i = 1; i <= 10; i++){

        resultado = numerin * i;
        printf("%d X %f = %f\n", i, numerin, resultado);

    }



    return 0;
}
