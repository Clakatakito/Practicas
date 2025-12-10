
#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Dia de la setmana. Llegeix un número del 1 al 7 i mostra quin dia de la setmana representa (1 = dilluns, etc.).
    printf("Dime un dia de la semana\n");
    int numerin;
    scanf("%d", &numerin);

    if(numerin == 1){
        printf("Estas a Lunes");
    }
    if(numerin == 2){
        printf("Estas a Martes");
    }
    if(numerin == 3){
        printf("Estas a Miercoles");
    }
    if(numerin == 4){
        printf("Estas a Jueves");
    }
    if(numerin == 5){
        printf("Estas a Viernes");
    }
    if(numerin == 6){
        printf("Estas a Sabado");
    }
    if(numerin == 7){
        printf("Estas a Domingo");
    }

    return 0;
}
