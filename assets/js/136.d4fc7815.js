(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{557:function(a,s,t){"use strict";t.r(s);var e=t(13),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux修改时区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux修改时区"}},[a._v("#")]),a._v(" Linux修改时区")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/sysconfig/clock\n")])])]),t("p",[a._v("加入以下配置文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ZONE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Asia/Shanghai\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("UTC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ARC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),t("p",[a._v("然后运行以下命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /etc/localtime\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n")])])]),t("p",[a._v("查看时间")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("hwclock -w\nhwclock --hctosys\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" -R\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);