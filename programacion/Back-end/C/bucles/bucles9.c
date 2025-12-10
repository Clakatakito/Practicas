
#include <stdio.h>
#include <stdlib.h>

int main()
{

    // A partir de 1, avança nombre a nombre fins que trobis el primer que sigui múltiple de 7 (és a dir, que la divisió entre 7 doni residu 0). Quan el trobis, mostra’l i
    //finalitza el programa. (No utilitzar condicions com “if”, només la condició del bucle.)

    printf("Primer multiple de 7 desde el 1!\n");

    int numerin = 1;
    while(numerin % 7 != 0){
        numerin++;

    }
    printf("%d", numerin);

    return 0;
}