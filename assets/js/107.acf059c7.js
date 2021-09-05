(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{490:function(t,a,v){"use strict";v.r(a);var i=v(19),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"vim操作指南"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim操作指南"}},[t._v("#")]),t._v(" Vim操作指南")]),t._v(" "),v("h2",{attrs:{id:"vim的使用要求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim的使用要求"}},[t._v("#")]),t._v(" vim的使用要求")]),t._v(" "),v("p",[t._v("在最开始的时候是在刻意的使用vim编程，当一旦熟练之后，应该熟练到自发的本能的区使用，感觉使用vim和其他任何图形化的编辑器一样。熟悉任何一个操作步骤。")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("vim的三种模式：")]),t._v(" "),v("ol",[v("li",[t._v("命令行模式：\n用户在用vim编辑文件时，最初进入的为该模式，可以进行赋值、粘贴等操作。")]),t._v(" "),v("li",[t._v("插入模式：\n进行文件编辑，按ESC键可以回到命令行模式。")]),t._v(" "),v("li",[t._v("底行模式：\n光标位于屏幕的底行。可以进行文件的保存、退出、查找、替换、列出行号等。")])]),t._v(" "),v("h2",{attrs:{id:"命令行模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式"}},[t._v("#")]),t._v(" 命令行模式")]),t._v(" "),v("h3",{attrs:{id:"vim拷贝与粘贴命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim拷贝与粘贴命令"}},[t._v("#")]),t._v(" vim拷贝与粘贴命令")]),t._v(" "),v("p",[t._v("命令     功能\n[N]x     (Expure)删除从光标位置开始的连续N个字符(并复制到编辑缓冲区)\n[N]dd    (Delete)删除光标位置开始的连续N行(并复制到编辑缓冲区)，实际为剪切\n[N]yy    (Yank)复制从光标位置开始的连续N行到编辑缓冲区\np或P     (Put)从编辑缓冲区复制文本到当前光标位置(即粘贴)\nu        (Undo)取消上一次操作(即恢复)")]),t._v(" "),v("h3",{attrs:{id:"vim模式切换命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim模式切换命令"}},[t._v("#")]),t._v(" vim模式切换命令")]),t._v(" "),v("p",[t._v("命令   功能\na     (Append)进行编辑状态，从当前光标之后的位置开始插入键盘输入的字符\ni     (Insert)进入编辑状态，从当前光标之后的位置开始插入键盘输入的字符\no     (Open)进入编辑状态，并插入一新行，光标移到该新行的行首，以后键盘输入的字符将插入到光标位置。\nESC   进入命令状态。\n:! Command 在vim中执行外部命令Command，按回车键可以返回vim继续工作。")]),t._v(" "),v("h2",{attrs:{id:"底行模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#底行模式"}},[t._v("#")]),t._v(" 底行模式")]),t._v(" "),v("h3",{attrs:{id:"vim保存和退出命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim保存和退出命令"}},[t._v("#")]),t._v(" vim保存和退出命令")]),t._v(" "),v("p",[t._v("命令  功能\n:q    (Quit)退出没有修改的文件(若文件被修改了而没有保存，则此命令无效)\n:q!   强制退出，且不保存修改过的部分\n:w    (Write)保存文件，但不退出\n:x    (Exit)保存文件并退出\n:w file 另存为file给出的文件名，不退出\n:r file (Read)读入file指定的文件内容插入到光标位置")])])}),[],!1,null,null,null);a.default=r.exports}}]);