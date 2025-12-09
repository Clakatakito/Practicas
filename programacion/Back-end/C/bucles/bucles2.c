

#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Demana a l’usuari un nombre enter positiu. A continuació, demana quantes vegades es vol multiplicar a si mateix i, fent servir un bucle, obtén el resultat final de la
    //multiplicació successiva. Per exemple, si el nombre és 3 i el nombre de repeticions és
    //4, el resultat serà 3×3×3×3.


    int numerin;
    int vueltas;
    int multi;

    printf("Dime un numerin!\n");
    scanf("%d", &numerin);
    printf("Cuantas veces quieres que se repita?\n");
    scanf("%d", &vueltas);

    multi = numerin;

    for(int i = 1; i < vueltas; i++){
        multi = multi * numerin;
    }

    printf("El resultado es: %d\n", multi);

    return 0;
}
