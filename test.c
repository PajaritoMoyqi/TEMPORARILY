#include <stdio.h>

#define STR_LEN 5

int main( void )
{
    char str[STR_LEN] = { 'a', 'b', 'c', 'd', 'e' };

    printf( "%.*s\n", STR_LEN, str );
    printf( "%.*s\n", (int)sizeof( str ), str );
    fwrite( str, 1, sizeof( str ), stdout );
    fputc( '\n', stdout );
    
    // code
}