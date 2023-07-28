#include <stdio.h>

#define NAME "Pajarito"
#define EMAIL "Pajarito@pajaritoemail.com"

int main( void )
{
    int i = 0xFF;
    unsigned ui = 0xFFFFFFFF;

    printf( "i: %d, %x, %X, %#X, %o, %#o\n", i, i, i, i, i, i );
    printf( "ui: %u, %#x, %d\n", ui, ui, ui );
    printf( "My name is" NAME "." );
    printf( "[%20s]\n", EMAIL );
    printf( "[%-20s]\n", EMAIL );
    printf( "[%.10s]\n", EMAIL );

    float f = 12.123456789f;
    printf( "%f\n", f );
    printf( "%8f\n", f );
    printf( "%.4f\n", f );
    printf( "%8.4f\n", f );
    printf( "%08.4f\n", f );
    printf( "%-8.4f\n", f );
    printf( "%e\n", f );
    printf( "%g\n", f );
}