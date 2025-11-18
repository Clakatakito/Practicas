
#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Calculadora!!!\n");
    int numerin1, numerin2;
    char signo;
    int resultado;

    printf("Primer numero: ");
    scanf("%d", &numerin1);
    printf("Dime el signo: ");
    scanf(" %c", &signo);
    printf("Segundo numero: ");
    scanf("%d", &numerin2);

    if(signo == '+'){

        resultado = numerin1 + numerin2;
        printf("Solucion: %d", resultado);

    }

    if(signo == '-'){

        resultado = numerin1 - numerin2;
        printf("Solucion: %d", resultado);

    }

    if(signo == '*'){

        resultado = numerin1 * numerin2;
        printf("Solucion: %d", resultado);

    }

    if(signo == '/'){

        resultado = numerin1 / numerin2;
        printf("Solucion: %d", resultado);

    }

    return 0;
}
