(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(t,a,s){t.exports=s.p+"assets/img/pointer.853abe4d.png"},200:function(t,a,s){"use strict";s.r(a);var r=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"c语言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c语言","aria-hidden":"true"}},[t._v("#")]),t._v(" C语言")]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("在C语言中，内存单元的地址成为指针，专门用来存放地址的变量，成为指针变量。\nC语言程序设计中使用指针可以：")]),t._v(" "),r("ol",[r("li",[t._v("使程序简洁、紧凑、高效")]),t._v(" "),r("li",[t._v("有效的表示复杂的数据结构")]),t._v(" "),r("li",[t._v("动态分配内存")]),t._v(" "),r("li",[t._v("得到多余一个的函数返回值")])]),t._v(" "),r("h2",{attrs:{id:"指针的初始化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#指针的初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 指针的初始化")]),t._v(" "),r("p",[t._v("初始化即为赋初值。\n一般形式为：\n<存储类型> <数据类型> * <指针变量名> = <地址量>；\ne.g.")]),t._v(" "),r("div",{staticClass:"language-c extra-class"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将变量a的地址作为初值赋予了int型指针p")]),t._v("\n")])])]),r("p",[t._v("或者")]),t._v(" "),r("div",{staticClass:"language-c extra-class"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("或者")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("int a;\nint *p;\np = &a;\n")])])]),r("h2",{attrs:{id:"实质"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实质","aria-hidden":"true"}},[t._v("#")]),t._v(" 实质")]),t._v(" "),r("p",[t._v("指针即是地址，变量定义后即需要内存空间，而内存空间则为其分配好后，内存单元的编号即是地址也就是指针。指针指向变量，指针的值是变量的起始地址。也就是说指针中存放的就是该变量的地址，该地址就是一个内存单元的编号，为一个16进制数字。  而变量中存在的则是提前定义好的数值。下面举例：\ne.g.")]),t._v(" "),r("div",{staticClass:"language-c extra-class"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" a"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// short占2个字节(16bit)")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// int占4个字节(32bit)")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" c"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.00")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// float占4个字节(32bit)")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" d"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// char占1个字节(8bit)")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指针变量p指向了整型变量b")]),t._v("\n")])])]),r("p",[t._v("如图：\n"),r("img",{attrs:{src:s(166),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"指针的运算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#指针的运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 指针的运算")]),t._v(" "),r("ol",[r("li",[t._v("指针运算是以指针变量所存放的地址量作为运算量而进行的运算。")]),t._v(" "),r("li",[t._v("指针运算的实质就是地址的计算")]),t._v(" "),r("li",[t._v("指针运算的种类是有限的，它只能进行赋值运算，算术运算和关系运算。")])]),t._v(" "),r("h2",{attrs:{id:"指针关系运算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#指针关系运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 指针关系运算")]),t._v(" "),r("ol",[r("li",[t._v("两指针之间的关系运算表示它们指向的地址位置之间的关系。指向地址打的指针大于指向地址小的指针。")]),t._v(" "),r("li",[t._v("指针与一般整数变量之间的关系运算没有意义。但可以和零进行等于或不等于的关系运算，判断指针是否为空。")])])])}],e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);a.default=n.exports}}]);