
#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Crea un programa en C que demani el nom, el preu per hora i el nombre d’hores treballades
    //en una setmana d’un treballador. El programa ha de calcular i retornar per pantalla nom, l’import del salari brut, l’import de les tassesi i l’import del salari net.

    char nombre[] = "ninguno";
    int preu_hora;
    int horas_trabajadas;
    float neto;

    printf("Dime tu nombre!\n");
    scanf("%s", &nombre);


    printf("Dime el precio por hora\n");
    scanf("%d", &preu_hora);


    printf("Dime tu precio de horas trabajadas\n");
    scanf("%d", &horas_trabajadas);

    neto = preu_hora * 0.8;

    printf("Muy bien señor %s, con salario bruto de %d, tu salario neto es %f", nombre, preu_hora, neto);

    return 0;
}
