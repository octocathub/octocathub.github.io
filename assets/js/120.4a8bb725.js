(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{537:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos设置静态ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos设置静态ip"}},[s._v("#")]),s._v(" centos设置静态IP")]),s._v(" "),t("h2",{attrs:{id:"修改网卡配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改网卡配置"}},[s._v("#")]),s._v(" 修改网卡配置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-eth0\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROXY_METHOD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BROWSER_ONLY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置网卡获得ip地址的方式，可能的选项为static，dhcp或bootp，分别对应静态指定的 ip地址，通过dhcp协议获得的ip地址，通过bootp协议获得的ip地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".124.10   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果设置网卡获得 ip地址的方式为静态指定，此字段就指定了网卡对应的ip地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网卡对应的网络掩码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GETWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".124.1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网卡对应的网关地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERDNS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".43.253\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6INIT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_AUTOCONF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_DEFROUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_FAILURE_FATAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_ADDR_GEN_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stable-privacy\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens33\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("95e42e27-ea8f-4c1d-b26b-df1988d19454\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens33   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#描述网卡对应的设备别名，例如ifcfg-eth0的文件中它为eth0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n")])])]),t("h2",{attrs:{id:"修改网关配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改网关配置"}},[s._v("#")]),s._v(" 修改网关配置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETWORKING")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(表示系统是否使用网络，一般设置为yes。如果设为no，则不能使用网络，而且很多系统服务程序将无法启动)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETWORKING_IPV6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否启用IPV6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(设置本机的主机名，这里设置的主机名要和/etc/hosts中设置的主机名对应)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(设置本机连接的网关的IP地址。)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("centos    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(设置本机的主机名，这里设置的主机名要和/etc/hosts中设置的主机名对应)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(设置本机连接的网关的IP地址。)")]),s._v("\n")])])]),t("h2",{attrs:{id:"修改dns配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改dns配置"}},[s._v("#")]),s._v(" 修改DNS配置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/resolv.conf\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\nnameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\n")])])]),t("p",[s._v("nameserver　#即是DNS服务器ＩＰ地址，第一个是首选，第二个是备用。")]),s._v(" "),t("h2",{attrs:{id:"重启网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启网络"}},[s._v("#")]),s._v(" 重启网络")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/etc/init.d/network \n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);