#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int fn( a, b )
    int a, b;
{
    printf( "%d", a + b );
}

int main( void )
{
    fn( 1, 2 );
}