

#include <stdio.h>
#include <stdlib.h>

int main()
{
    const float pi = 3.1415;
    float radio, area;

    printf("Introduce el radio del circulo: ");
    scanf("%f", &radio);

    area = pi * (radio * radio);

    printf("El area del circulo es: %.2f\n", area);

    return 0;

}