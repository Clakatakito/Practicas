
#include <stdio.h>
#include <stdlib.h>

int main()
{
    //Donat un array de 10 posicions, retorna el numero que més vegades es repeteix.
    //><
    int array[10] = {1,2,4,4,5,5,5,8,9,10};
    int num = 0;
    int veces = 1;
    int index = 0;
    int max_veces = 0;
    for(int i = 0; i < 10; i++){
        num = array[i];
        for(int j = 0; j < 10; j++){
            if(num == array[j]){
                veces++;
            }
        }
        if(max_veces < veces){
            max_veces = veces;
            index = i;
        }
        veces = 0;
    }
    printf("%d", array[index]);
    return 0;
}