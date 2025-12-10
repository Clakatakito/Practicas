
#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Valor absolut. Llegeix un número i mostra el seu valor absolut (sense usar abs()).



    int numerin;
    int numerinAbsoluto;
    printf("Escribe un numero negativo y te digo su valor absoluto\n");
    scanf("%d", &numerin);

    if (numerin >= 1){
        printf("Tu numero es positivo");
    }else{
        numerinAbsoluto = numerin * -1;
        printf("Tu valor es el %d, y el valor absoluto es: %d", numerin, numerinAbsoluto);
    }

    return 0;
}
