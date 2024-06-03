#include<stdio.h>
int main(){
    int a[50];
    a[6]=10;
    int *pa;
    pa=a;
    printf("%d",*(*pa+5));
    return 0;
}