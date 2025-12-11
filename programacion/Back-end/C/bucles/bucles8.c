
#include <stdio.h>
#include <stdlib.h>

int main()
{


    //Demana un nombre base i un exponent (enter no negatiu). Mitjançant un bucle, calcula la potència (base^exponent) sense fer servir l’operador de potència
    //directe (és a dir, fes la multiplicació repetidament).

    int base, exponent, resultado;

    printf("Dame una base\n");
    scanf("%d", &base);
    printf("Dame exponente\n");
    scanf("%d", &exponent);
    resultado = base;
    for(int i = 1;i < exponent;i++){

        resultado = resultado * base;
    }

    printf("%d", resultado);

    return 0;
}
