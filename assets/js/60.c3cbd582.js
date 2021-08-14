(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{365:function(t,a,s){"use strict";s.r(a);var e=s(41),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[t._v("#")]),t._v(" 防火墙")]),t._v(" "),s("p",[t._v("linux防火墙常用操作，包含了基本的防火墙启动/停止、端口开放设置、端口出入站设置等相关功能。由于Linux各个发行版使用的防火墙软件并不相同，特此整理该文档帮助大家能够进行速查。\n摘自"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000040395813",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000040395813"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("在centos7以上版本，默认的防火墙是firewall-cmd。centos6及其以下版本，是iptables。")])]),t._v(" "),s("h2",{attrs:{id:"一般性前置条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般性前置条件"}},[t._v("#")]),t._v(" 一般性前置条件")]),t._v(" "),s("p",[t._v("一般对防火墙进行操作时，需要使用具备系统管理者的身份执行指令。本文档所有操作命令示例均按已经获得系统管理者权限为前提。另外本文所有指令均已80端口为样例。")]),t._v(" "),s("h2",{attrs:{id:"firewall-cmd使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firewall-cmd使用"}},[t._v("#")]),t._v(" firewall-cmd使用")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("查看防火墙状态\nfirewall-cmd --state\n开启防火墙\nsystemctl start firewalld\n关闭防火墙\nsystemctl stop firewalld\n设置开机启动\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" firewalld\n禁用开机启动\nsytemctl disable firewalld\n重启防火墙\nfirewall-cmd --reload\n开放防火墙端口\nfirewall-cmd --permanent --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp\nfirewall-cmd --reload \n关闭防火墙端口\nfirewall-cmd --permanent --remove-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp\nfirewall-cmd --reload \n查看防火墙规则\nfirewall-cmd --list-all\n")])])]),s("h2",{attrs:{id:"iptables使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iptables使用"}},[t._v("#")]),t._v(" iptables使用")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("查看防火墙状态\nfirewall-cmd --state\n开启防火墙\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables start\n关闭防火墙\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables stop\n设置开机启动\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" iptables on\n禁用开机启动\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" iptables off\n重启防火墙\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables restartd\n开放防火墙端口\n/sbin/iptables -I INPUT -p tcp --dport "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" -j ACCEPT \n/etc/init.d/iptables save                                       \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables restart                                               \n关闭防火墙端口\n/sbin/iptables -I INPUT -p tcp --dport 端口号 -j DROP \n/etc/init.d/iptables save                                        \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables restart                                             \n查看防火墙规则\n/etc/init.d/iptables status\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);