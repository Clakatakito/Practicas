
#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Caràcter majúscula o minúscula. Llegeix un caràcter i indica si és una lletra majúscula o minúscula.

    char letra = 'ninguna';

    printf("Ponme un caracter en mayusculas o minusculas y te digo cual es:\n");
    scanf("%s", &letra);

    if(letra >= 'a' && letra <= 'z'){
        printf("minusculas");
    }

    else if(letra >= 'A' && letra <= 'Z'){
        printf("MAYUSCULA");
    }

    else{
        printf("no es una letra");
    }

    return 0;
}
