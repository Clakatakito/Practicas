
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana a l’usuari quants nombres vol introduir. A continuació, amb un bucle para (o el que vulguis), llegeix els nombres un a un i compta quants són positius,
    //quants són negatius i quants són zeros. Al final, mostra les estadístiques.



    int total;
    int numeros;


    int es_cero = 0;
    int es_negativo = 0;
    int es_positivo = 0;

    printf("Cuanto numeros quieres introducir?\n");
    scanf("%d", &total);

    for(int i = 1; i <= total;i++){

        printf("Dime numerines y yo te dire si son positivos, negativos o 0\n");
        scanf("%d", &numeros);

        if(numeros < 0){
            es_negativo++;
        }

        if(numeros == 0){
            es_cero++;
        }

        if(numeros > 0){
            es_positivo++;
        }
    }
    printf("Ha habido: %d, de ceros\n", es_cero);
    printf("Ha habido: %d, de positivos\n", es_positivo);
    printf("Ha habido: %d, de negativos\n", es_negativo);

    return 0;
}
