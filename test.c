#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 10

struct person
{
    int age;
    char* name;
};

struct person p1;
struct person p2;

int main( void )
{   
    // shallow copy
    // p2.age = p1.age;
    // p2.name = p1.name;

    // // deep copy
    p1.name = (char*)malloc( sizeof( MAX_NAME + 1 ) );
    p2.name = (char*)malloc( sizeof( MAX_NAME + 1 ) );
    p1.age = 10;
    p1.name = strcpy( p1.name, "John" );
    // p1.name = "John";
    p2.age = 10;
    p2.name = strcpy( p1.name, "Home" );
    // p2.name = "Home";
    // // strcpy( p2.name, p1.name );
    p2 = p1;

    // // deep copy
    // *p2.name = *p1.name;

    p1.age = 20;
    strcpy( p1.name, "JJJJ" );

    printf( "%d, %s\n", p1.age, p1.name );
    printf( "%d, %s\n", p2.age, p2.name );
}