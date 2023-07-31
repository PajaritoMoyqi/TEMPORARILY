#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stddef.h>

int main( void )
{
    wchar_t wch = L'가';
    setlocale( LC_ALL, "Korean" );

    wprintf( L"%c\n", wch );

    printf( "length: %d\n", strlen( "기니디리미abcde" ) );
    printf( "length: %d\n", wcslen( L"기니디리미abcde" ) );
}