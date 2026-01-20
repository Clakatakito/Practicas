
#include <stdio.h>
#include <stdlib.h>

int main()
{


    //crea un programa que a partir de la array te diga cuantos numeros positivos hay

    int array[10] = {3,10,-5,7,-7,-15,-32,8,-9,-15};

    int cont = 0;

    for(int i = 0; i < 10; i++){

        if(array[i] > 0){

            cont++;

        }

    }

    printf("Hay %d", cont);
}
