#include <stdio.h>
#include <time.h>
#include <sys/time.h>
#include <unistd.h>
#include <stdlib.h>

int main( void )
{
		register unsigned long cur_sp asm ("sp");

		printf( "%x", cur_sp );

		return 0;
}