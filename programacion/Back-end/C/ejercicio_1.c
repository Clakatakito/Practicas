
#include <stdio.h>
#include <stdlib.h>



//Crea un programa en C que rebi com a dades d'entrada un número de segons i retorni el número d’hores, minuts i segons als que correspon.

int main()
{
    int segundos_totales;
    int horas, minutos, segundos;

    printf("Ponme un numero en segundos y yo te lo paso a minutos y horas:\n");
    scanf("%d", &segundos_totales);

    horas = segundos_totales / 3600;
    minutos = (segundos_totales % 3600) / 60;
    segundos = segundos_totales % 60;

    printf("Equivale a: %d horas, %d minutos y %d segundos\n", horas, minutos, segundos);

    return 0;
}
