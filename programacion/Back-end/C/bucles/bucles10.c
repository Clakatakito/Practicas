



FALTA ACABAR

#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Fes un programa que mostri les taules de multiplicar de l’1, del 2 i del 3 (per separat) fins al 10. Fes-ho només amb bucles, sense “if” ni “switch”.

    int numero = 1;
    int resultado;
    printf("Tablas!\n");

    for(int i = 1;i <= 10;i++){

        resultado = i * numero;
        printf("%d X %d = %d\n", numero, i, resultado);


    }

    return 0;
}
