





#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Fes un programa que mostri les taules de multiplicar de l’1, del 2 i del 3 (per separat) fins al 10. Fes-ho només amb bucles, sense “if” ni “switch”.

    int numero = 1;
    int resultado;
    printf("Tablas!\n");

    for(int tabla = 1; tabla <= 999;tabla++){

        printf("\n");
        printf("Tabla del %d\n", tabla);
        printf("\n");

        

        for(int i = 1;i <= 10;i++){

            resultado = tabla * i;
            printf("%d X %d = %d\n", tabla, i, resultado);
        }

    }
    return 0;
}
