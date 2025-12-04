
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana quantes notes s’introduiran. Llegeix cadascuna en un bucle i calcula  la mitjana final. A més, comprova si hi ha hagut alguna nota menor de 5 (suspens). Si
    //almenys una és suspesa, mostra un missatge: “Hi ha suspesos”.

    int num_notes;
    float cont = 0;
    float nota = 0;
    float escoje_user;
    float resultado;

    printf("Cuantas notas quieres añadir?\n");
    scanf("%d", &num_notes);

    for(int i = 1; i <= num_notes; i++){

        printf("Pon la nota:\n");
        scanf("%f", &escoje_user);

        resultado = nota + escoje_user;
        cont++;

    }
    resultado = resultado / cont;
    printf("La Mediana es %f", resultado);

    return 0;
}
