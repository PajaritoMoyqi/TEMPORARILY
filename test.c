#include <stdio.h>

static int sv = 12345;

int show( void )
{
    static int sv2 = 11111;
    int lv = 11111;
}

int main( void )
{
    printf( "%d", sv );

    return 0;
}