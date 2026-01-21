
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Fes un algoritme que donada un array de 15 posicions. retorni els seus elements en ordre invers.

    int array[15] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};

    for(int i = 14; i >= 0; i--){

        printf("%d ", array[i]);

    }

    return 0;
}