
#include <stdio.h>
#include <stdlib.h>

int main()
{
    float base, altura, area;

    // Pedir datos al usuario
    printf("Introduce la base del triangulo: ");
    scanf("%f", &base);

    printf("Introduce la altura del triangulo: ");
    scanf("%f", &altura);

    // Calcular el area
    area = (base * altura) / 2;

    // Mostrar el resultado
    printf("El area del triangulo es: %.2f\n", area);

    return 0;

}