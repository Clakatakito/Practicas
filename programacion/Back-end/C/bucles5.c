
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Crea un programa que demani nombres a l’usuari i, només quan el nombre sigui positiu, aturi l’execució. No ha d’utilitzar condicional “if”, només la condició de
    //sortida del bucle.


    int numerin;


    printf("Si me dices un numero positivo te hecho!\n");
    scanf("%d", &numerin);
    while(numerin < 0){


        scanf("%d", &numerin);



    }



    return 0;
}
