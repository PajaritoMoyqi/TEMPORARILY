#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define printSingleInt(x) printf( #x": %d\n", x )

int main( void )
{   
    int x = 5, y = 10;
    printSingleInt(y); // y: 10
    printSingleInt(x+y); // x+y: 15

    printSingleInt( x + y ); // x + y: 15
    printSingleInt( x   +   y ); // x + y: 15
}