(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{456:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux清理垃圾-释放空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux清理垃圾-释放空间"}},[a._v("#")]),a._v(" Linux清理垃圾，释放空间")]),a._v(" "),t("p",[a._v("首先查询磁盘空间占用情况。\n发现/根目录下面磁盘占用百分之一百")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v(" -ah\n")])])]),t("p",[a._v("进入根目录，查询大文件与目录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -sh * "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" -n\n")])])]),t("p",[a._v("查看上GB的目录并且排序")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -h --max-depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'G'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v("\n")])])]),t("p",[a._v("2.清理YUM缓存\n清理yum缓存很简单：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum clean all\n")])])]),t("p",[a._v("请注意，上面的命令不会删除yum已安装的与之相关的所有文件。")]),a._v(" "),t("p",[a._v("您可能希望释放禁用或删除的存储库中的孤立数据占用的空间：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /var/cache/yum\n")])])]),t("p",[a._v("此外，当您意外地yum通过普通用户（忘记sudo）时，yum将创建用户缓存。所以我们也删除它：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /var/tmp/yum-*\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);