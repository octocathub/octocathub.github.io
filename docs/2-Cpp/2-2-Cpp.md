# C++

## 程序的编译和调试

### gcc编译器
gcc hello.c -o hello
-o 输出可执行文件
-c 只要求编译器输出目标代码(.o文件)而不必输出可执行文件
-g 用于调试
-Wall 显示一切警告
./hello 查看输出结果

当我们在改动源码文件时候，需要重新编译再次执行。
### 程序调试
利用 __FILE__,__LINE__,__FUNCTION__ 实现代码跟踪调试。(两个下划线)
- __FILE__ : 显示文件名
- __LINE__: 显示行号
- __FUNCTION__: 显示函数名
使用这些可以记录进日志，方便调试大型程序。
``` c
#include <stdio.h>
int main(int argc,char *argv[])
{
  printf("%s,%s,%d\n",__FILE__,__FUNCTION__,__LINE__);
  return 0;
}
```
### C语言基础
一个程序应当包含两部分内容:
- 对数据的描述，在程序中要知道数据的类型和数据的组织形式，即数据结构。
- 对操作的描述，即操作步骤，也就是算法。也可以说是程序的解决思路(逻辑)。

#### 算法的基本概念
- 做任何事情都有一定的步骤。步骤要按照一定的顺序进行，缺一不可，次序也不能错。广义的说，为解决一个问题而采取的方法和步骤就称为算法。


## 指针

### 概述
在C语言中，内存单元的地址成为指针，专门用来存放地址的变量，成为指针变量。
C语言程序设计中使用指针可以：
1. 使程序简洁、紧凑、高效
2. 有效的表示复杂的数据结构
3. 动态分配内存
4. 得到多余一个的函数返回值

### 地址和变量
在计算机内存中，每一个字节单元，都有一个编号，称为地址。内存以字节为单位开始编号，这个编号即是地址。
一个字节为8位，为1 Byte = 8 Bit
编译或函数调用时为 其分配内存单元。
变量是对程序中数据存储空间的抽象。
我们看到的地址其实是起始地址，一般是由低往高存储，默认是连续性存储，所以我们打印看到的都是起始地址。

### 指针
在C语言中，内存单元的地址称为指针，专门用来存放地址的变量，称为指针变量。在不影响理解的情况中，有时对地址、指针和指针变量不区分，通称指针。  

### 指针变量的说明

一般形式为：
<存储类型> <数据类型> * <指针变量名> = <地址量>；
指针在说明的同时，也可以被赋予初值，称为指针的初始化
一般形式为：
<存储类型> <数据类型> * <指针变量名> = <地址量>;
e.g.
``` c
int a,*p = &a; //将变量a的地址作为初值赋予了int型指针p
```
在上面语句中，把变量a的地址作为初值赋予了刚说明的int型指针p。
或者

``` c
int a;
int *p = &a;
```

或者

``` c
int a;
int *p;
p = &a;
```
指针的存储类型是指针变量本身的存储类型。指针说明时指定的数据类型不是指针变量本身的数据类型，而是指针目标的数据类型。简称为指针的数据类型。

### 实质
指针即是地址，变量定义后即需要内存空间，而内存空间则为其分配好后，内存单元的编号即是地址也就是指针。指针指向变量，指针的值是变量的起始地址。也就是说指针中存放的就是该变量的地址，该地址就是一个内存单元的编号，为一个16进制数字。  而变量中存在的则是提前定义好的数值。下面举例：
e.g.
``` c
short a=10; // short占2个字节(16bit)
int b=20;   // int占4个字节(32bit)
float c=20.00; // float占4个字节(32bit)
char d='A';  // char占1个字节(8bit)
int *p;
p = &b;    //指针变量p指向了整型变量b
```
如图：
![](./img/pointer.png)

### 指针的运算

1. 指针运算是以指针变量所存放的地址量作为运算量而进行的运算。
2. 指针运算的实质就是地址的计算
3. 指针运算的种类是有限的，它只能进行赋值运算，算术运算和关系运算。

### 指针关系运算
1. 两指针之间的关系运算表示它们指向的地址位置之间的关系。指向地址打的指针大于指向地址小的指针。
2. 指针与一般整数变量之间的关系运算没有意义。但可以和零进行等于或不等于的关系运算，判断指针是否为空。
