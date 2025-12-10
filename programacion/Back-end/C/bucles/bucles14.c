

#include <stdio.h>
#include <stdlib.h>

int main()
{


    //Si l’usuari escull 1 o 2, demana dos nombres i mostra el resultat. Després de cada operació, torna a mostrar el menú. El programa finalitza només en escollir l’opció 3.

    printf("Calculadora!\n");
    int escoger_suma = 1;
    int escoger_resta = 2;
    int escoger_salir = 3;
    int escoge_usuario;

    int num1;
    int num2;
    int resultado;

    while(escoge_usuario != escoger_salir){

        printf("1. Suma\n");
        printf("2. Resta\n");
        printf("3. Salir\n");
        scanf("%d", &escoge_usuario);

        if(escoge_usuario == escoger_suma){
            printf("dime los numeros que quieres sumar:\n");
            printf("Primer numero:\n");
            scanf("%d", &num1);
            printf("Segundo numero:\n");
            scanf("%d", &num2);
            resultado = num1 + num2;
            printf("Resultado: %d\n", resultado);
            printf("\n");
        }

        if(escoge_usuario == escoger_resta){
            printf("dime los numeros que quieres restar:\n");
            printf("Primer numero:\n");
            scanf("%d", &num1);
            printf("Segundo numero:\n");
            scanf("%d", &num2);
            resultado = num1 - num2;
            printf("Resultado: %d\n", resultado);
            printf("\n");
        }

 printf("Hata luego :)");



    }
    return 0;
}