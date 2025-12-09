
#include <stdio.h>
#include <stdlib.h>

int main()
{

    // Demana a l’usuari dos nombres enters (origen i destí). Llista tots els nombres dins d’aquest interval. A més, per a cada nombre mostra “(parell)” o “(senar)” al costat.

    int origen;
    int destino;

    printf("Dime un nombre de origen\n");
    scanf("%d", &origen);
    printf("Dime un nombre de destino\n");
    scanf("%d", &destino);


    for(int i = origen - 1; i < destino ;i++ ){

        printf("%d", i);

        if(i % 2 == 0){
            printf(" parejo\n");


        }else{

            printf(" no parejo\n");

        }
    }

    return 0;
}