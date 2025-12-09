

#include <stdio.h>
#include <stdlib.h>

int main()
{

    //Demana un codi PIN (per exemple 1234). L’usuari tindrà 3 oportunitats per introduir-lo correctament. Si l’usuari l’encerta dins dels 3 intents, mostra “Accés
    //Permès”. Si s’esgoten els intents sense encertar, mostra “Accés Denegat”.


    int codigo;
    int intento = 3;
    printf("Introduce un pin\n");
    scanf("%d", &codigo);
    int i = 3;


    while( intento != codigo && i > 0){

        printf("Dime el codigo:\n");
        scanf("%d", &intento);
        i--;

    }
  
    if (intento == codigo){
      
        printf("Acertaste");
      
    }
    else{
      
        printf("Fallaste");
      
    }
  
    return 0;
}
