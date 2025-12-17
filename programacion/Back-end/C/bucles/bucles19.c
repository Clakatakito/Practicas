
#include <stdio.h>
#include <stdlib.h>

int main()
{

    /*Exercici 19. Fes un menú per llistats consecutius
    Enunciat: Crea un menú que permeti triar:
    • (1) Llistar nombres de 1 a N
    • (2) Llistar nombres de N a 1
    • (3) Sortir
    /Amb un bucle que es repeteixi fins a l’opció 3, i dins de cada opció, fes servir un bucle adequat per imprimir la seqüència. Si tries 1, llista de 1 a N; si tries 2, llista de N a 1.
    */

    int opcion;
    int llegar_num;


    do{
        printf("(1) Llistar nombres de 1 a N\n");
        printf("(2) Llistar nombres de N a 1\n");
        printf("(3) Sortir\n");
        scanf("%d", &opcion);

        if(opcion == 1){
            printf("Hata que numero quiere llegar?\n");
            scanf("%d", &llegar_num);

            for(int i = 1; i <= llegar_num; i++){
                printf("%d\n", i);
            }
        }
        if(opcion == 2){
            printf("De que numero hasta el 1 quieres?\n");
            scanf("%d", &llegar_num);

            for(int i = llegar_num; 1 <= llegar_num; llegar_num--){
                printf("%d\n", llegar_num);
            }

        }

    }
    while(opcion != 3);

    return 0;
}
