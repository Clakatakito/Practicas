
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
    int array[5] = {1,2,3,4,3};
    int cont = 0;
    bool ordenado = true;
    while(cont < 4 && ordenado == true){

        if(array[cont] >= array[cont+1]){

            ordenado = false;

        }
        cont++;

    }

    if(ordenado == false){

        printf("No esta ordenado");

    }else{

        printf("Esta ordenada");

    }

}