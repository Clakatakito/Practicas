
#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Demana a l’usuari un nombre enter NNN. Utilitzant un bucle (el que prefereixis: per, mentre o repetir), calcula la suma dels nombres de l’1 fins a NNN.
    //Mostra el resultat final per pantalla.


    int numerin;
    int suma = 0;
    int resultado = 0;


    printf("Dime un nombre entero\n");
    scanf("%d", &numerin);
    for (int i = 1; i<=numerin; i++){
        resultado = resultado + i;
    }
    printf("%d", resultado);
    return 0;
}
