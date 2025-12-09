
#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Es demana el nombre d’alumnes de la classe. Per a cadascun, pregunta “Present?” (0 = absent, 1 = present) i, en acabar, mostra quants són presents i quants
    //absents. Repeteix aquesta operació fins que l’usuari digui que no vol continuar
    //(utilitza un “si” o “segons” i un bucle addicional per repetir la rutina).

    int alumnos;
    int absent = 0;
    int present = 1;

    int esta_alumno;
    int no_alumno = 0;
    int si_alumno = 0;

    printf("Cuantos alumnos hay en la clase?\n");
    scanf("%d", &alumnos);

    for(int i = 1; i <= alumnos; i++){

        printf("Presente alumno num %d ?", i);
        scanf("%d", &esta_alumno);

        if(esta_alumno == 0){
            no_alumno++;
        }

        if(esta_alumno == 1){
            si_alumno++;
        }
    }

    printf("Hay %d alumnos presentes\n", si_alumno);
    printf("Hay %d alumnos que no hay venido\n", no_alumno);


    return 0;
}