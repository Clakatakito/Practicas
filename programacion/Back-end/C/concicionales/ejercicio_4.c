
#include <stdio.h>
#include <stdlib.h>

int main()
{

    // Divisible entre 2 i 3: Llegeix un número i indica si és divisible entre 2, entre 3, entre ambdós o per cap dels dos.


    int numerin;
    printf("dime tu numerin y te digo si es divisible entre 2 i 3\n");
    scanf("%d", &numerin);


    if(numerin % 2 == 0 && numerin % 3 == 0){
        printf("Es divisible entre 2 y 3");
    }

    else if(numerin % 2 == 0){
        printf("es divisible entre 2\n");
    }

    else if(numerin % 3 == 0){
        printf("Es divisible entre 3");
    }else{
        printf("No se puede");
    }

    return 0;
}
