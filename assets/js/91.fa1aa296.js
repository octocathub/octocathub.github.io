(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{473:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"配置部署java和maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置部署java和maven"}},[a._v("#")]),a._v(" 配置部署Java和maven")]),a._v(" "),t("p",[a._v("从oracle官方网站上下载1.8版本中的最新版的JDK。下载完成后，把文件通过WinSCP或者XFTP上传到服务器上。接着进行解压和配置环境变量。")]),a._v(" "),t("p",[a._v("下载地址："),t("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("#进入安装包目录，解压")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/tmp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf jdk-8u301-linux-x64.tar.gz\n")])])]),t("p",[a._v("#把解压出来的文件夹转移到统一的地方")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /data/tmp/jdk1.8.0_301 /data/service/jdk1.8.0_301\n")])])]),t("p",[a._v("#修改环境变量/etc/profile，JAVA_HOME修改为自己的jdk路径。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/service/jdk1.8.0_301\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n")])])]),t("p",[a._v("#使环境变量生效")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),t("p",[a._v("#检查是否配置成功")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("java -version\nMaven "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.0")]),a._v("\n")])])]),t("p",[a._v("从Maven官方网站上下载最新版的压缩包。下载完成后，进行解压和配置环境变量。")]),a._v(" "),t("p",[a._v("下载地址："),t("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://maven.apache.org/download.cgi"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("#进入安装包目录，解压")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/tmp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-maven-3.6.3-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" apache-maven-3.6.3 /data/service/\n")])])]),t("p",[a._v("#修改环境变量/etc/profile，MAVEN_HOME修改为自己的路径。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAVEN_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/service/apache-maven-3.6.3\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MAVEN_HOME")]),a._v("/bin\n")])])]),t("p",[a._v("#使环境变量生效")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),t("p",[a._v("#检查是否配置成功")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mvn -v\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);