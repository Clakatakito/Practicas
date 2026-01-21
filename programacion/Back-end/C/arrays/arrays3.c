
#include <stdio.h>
#include <stdlib.h>

int main()
{


    //Fes un algoritme que donada un array de 15 posicions. retorni la suma dels seus elements.

    float array[15] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};

    float suma = 0;

    for(int i = 0; i < 15; i++){

        suma = suma + array[i];

    }

    printf("El total es %f\n", suma);
    return 0;
}