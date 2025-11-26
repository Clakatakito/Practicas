
#include <stdio.h>
#include <stdlib.h>

int main()
{


    //Fent servir un bucle, demana nombres indefinidament a l’usuari i, quan algun sigui negatiu, atura’t i mostra quants nombres (en total) s’han introduït.

    printf("Dimes nombre positios, ninguno negativo:\n");
    int numerin;
    int vueltas = 0;
    scanf("%d", &numerin);
    while(numerin > 0){

        printf("Mas nombre positivos asi me gusta:\n");
        scanf("%d", &numerin);
        vueltas++;
    }
    printf("Me has dicho %d", vueltas);

    return 0;
}
