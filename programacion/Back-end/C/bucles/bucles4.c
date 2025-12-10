
#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana a l’usuari un nombre enter i mostra per pantalla el compte enrere fins a arribar a zero. Per exemple, si l’usuari introdueix 5, el programa mostrarà 5, 4, 3, 2, 1, 0.


    int numerin;
    printf("Dime un numerin y te hago la cuenta atras!\n");
    scanf("%d", &numerin);
    printf("Cuenta atras\n");
    for (int i = numerin; i != -1; i--){

        printf("%d\n", i);

    }



    return 0;
}
