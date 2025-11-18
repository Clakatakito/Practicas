
#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Número positiu o negatiu. Llegeix un número i indica si és positiu, negatiu o zero.

    printf("Dime un numero y yo te digo si es par, inpar o 0\n");
    int numerin;

    scanf("%d", &numerin);

    if(numerin > 0){
        printf("Tu numero es positivo, felicidades");
    }

    if(numerin < 0){
        printf("Tu numero es negativo");
    }

    if(numerin == 0){
        printf("tu numero es el 0");
    }

    return 0;
}
