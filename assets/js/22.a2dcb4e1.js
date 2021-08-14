(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{324:function(t,a,n){"use strict";n.r(a);var r=n(41),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"java异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java异常"}},[t._v("#")]),t._v(" Java异常")]),t._v(" "),n("h2",{attrs:{id:"分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),n("p",[t._v("异常对象都是派生于Throwable类的一个实例。")]),t._v(" "),n("p",[t._v("Throwable\n- Error\n- Exception\n- IOException\n- RuntimeException")]),t._v(" "),n("p",[t._v("所有的异常都是由Throwable继承而来，但在下一层立即分解为两个分支：Error和Exception。")]),t._v(" "),n("p",[t._v("Error类层次结构描述了Java运行时系统的内部错误和资源耗尽错误。应用程序不应该抛出这种类型的对象。如果出现了这样的内部错误，除了通告给用户，并尽力使程序安全地终止之外，再也无能为力了。这种情况很少出现。")]),t._v(" "),n("p",[t._v("在设计Java程序时，需要关注Exception层次结构。这个层次结构又分解为两个分支：一个分支派生于RuntimeException；另一个分支包含其他异常。划分两个分支的规则是：由程序错误导致的异常属于RuntimeException；而程序本身没有问题，但由于像I/O错误这类问题导致的异常属于其他异常。")]),t._v(" "),n("p",[t._v("派生于RuntimeException的异常包含下面几种情况：\n- 错误的类型转换。\n- 数组访问越界。\n- 访问null指针。")]),t._v(" "),n("p",[t._v("不是派生于RuntimeException的异常包括：\n- 试图在文件尾部后面读取数据。\n- 试图打开一个不存在的文件。\n- 试图根据给定的字符串查找Class对象，而这个字符串表示的类并不存在。")]),t._v(" "),n("p",[n("strong",[t._v("“如果出现RuntimeException异常，那么就一定是你的问题”")]),t._v(" 是一条相当有道理的规则。")]),t._v(" "),n("h2",{attrs:{id:"捕获异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#捕获异常"}},[t._v("#")]),t._v(" 捕获异常")]),t._v(" "),n("p",[t._v("通过设置try...catch语句块来捕获异常。\n如果在try语句块中的任何代码抛出了一个在catch子句中说明的异常类，那么1）程序将跳过try语句块的其余代码。2）程序将执行catch子句中的处理器代码。如果在try语句块中的代码没有抛出任何异常，那么程序将跳过catch子句。")]),t._v(" "),n("h2",{attrs:{id:"finally字句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#finally字句"}},[t._v("#")]),t._v(" finally字句")]),t._v(" "),n("p",[t._v("当代码抛出一个异常时，就会终止方法中剩余代码的处理，并退出这个方法的执行。如果方法获得了一些本地资源，并且只有这个方法自己知道，又如果这些资源在退出方法之前必须被回收，那么就会产生资源回收问题。一种解决方案是捕获并重新抛出所有的异常。但是，这种解决方案比较乏味，这是因为需要在两个地方清除所分配的资源。一个在正常的代码中；另一个在异常代码中。")]),t._v(" "),n("p",[t._v("所以这个时候我们可以使用finally子句来解决。")]),t._v(" "),n("p",[n("strong",[t._v("不管是否有异常被捕获，finally子句中的代码都被执行")])])])}),[],!1,null,null,null);a.default=e.exports}}]);