(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{370:function(s,a,t){"use strict";t.r(a);var e=t(41),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql定时备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql定时备份"}},[s._v("#")]),s._v(" MySQL定时备份")]),s._v(" "),t("blockquote",[t("p",[s._v("在linux下mysql通过mysqldump备份数据库。")])]),s._v(" "),t("h2",{attrs:{id:"创建备份脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建备份脚本"}},[s._v("#")]),s._v(" 创建备份脚本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" mysqldumpbackup.sh\n")])])]),t("p",[s._v("备份脚本：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hostname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库账号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("backuptime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d%H%M%S"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志备份路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bak/mysqldumpbackuplog/'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件备份路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filepath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bak/mysqldumpbackupfile/'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数据库备份开始!!'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${backuptime}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logpath}")]),s._v("/mysqldumplog.log\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行mysqldump备份数据库")]),s._v("\nmysqldump --single-transaction -h"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${hostname}")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(" -p"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${password}")]),s._v(" --all-databases "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filepath}")]),s._v("/mysqldump_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${backuptime}")]),s._v(".sql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份成功以下操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$filepath")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只保存7天内的备份,这里先注释删除语句")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#find $filepath -name "*.sql" -type f -mtime +7 -exec rm -rf {} \\;')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数据库备份成功!!'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${backuptime}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logpath}")]),s._v("/mysqldumplog.log\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份失败则进行以下操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数据库备份失败!!'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${backuptime}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logpath}")]),s._v("/mysqldumplog.log\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("h2",{attrs:{id:"添加运行权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加运行权限"}},[s._v("#")]),s._v(" 添加运行权限")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x mysqldumpbackup.sh\n")])])]),t("h2",{attrs:{id:"创建备份文件存放目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建备份文件存放目录"}},[s._v("#")]),s._v(" 创建备份文件存放目录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建备份日志目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" mysqldumpbackuplog\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建备份文件目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" mysqldumpbackupfile\n")])])]),t("h2",{attrs:{id:"添加定时执行脚本任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加定时执行脚本任务"}},[s._v("#")]),s._v(" 添加定时执行脚本任务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" * * * /bak/mysqldumpbackup.sh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每天2点执行备份")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看crontab列表")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);