(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{464:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nginx-常用配置清单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用配置清单"}},[t._v("#")]),t._v(" Nginx 常用配置清单")]),t._v(" "),n("p",[t._v("Nginx 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务，其因丰富的功能集、稳定性、示例配置文件和低系统资源的消耗受到了开发者的欢迎。")]),t._v(" "),n("p",[t._v("本文，我们总结了一些常用的 Nginx 配置代码，希望对大家有所帮助。")]),t._v(" "),n("p",[t._v("侦听端口")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Standard HTTP Protocol")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Standard HTTPS Protocol")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For http2")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen on 80 using IPv6")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen only on using IPv6")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":80 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ipv6only")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("访问日志")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Relative or full path to log file")]),t._v("\naccess_log /path/to/file.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Turn 'on' or 'off'  ")]),t._v("\naccess_log on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("域名")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen to yourdomain.com")]),t._v("\nserver_name yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen to multiple domains server_name yourdomain.com www.yourdomain.com;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen to all domains")]),t._v("\nserver_name *.yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen to all top-level domains")]),t._v("\nserver_name yourdomain.*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Listen to unspecified Hostnames (Listens to IP address itself)")]),t._v("\nserver_name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("静态资产")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nroot /path/to/website"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("重定向")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name www.yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" http://yourdomain.com"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name www.yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation /redirect-url "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" http://otherdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("反向代理")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nproxy_pass http://0.0.0.0:3000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# where 0.0.0.0:3000 is your application server (Ex: node.js) bound on 0.0.0.0 listening on port 3000")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("负载均衡")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("upstream node_js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:3000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:4000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.131")]),t._v(".121.122"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nproxy_pass http://node_js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("SSL 协议")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_certificate /path/to/cert.pem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_certificate_key /path/to/privatekey.pem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_stapling on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_stapling_verify on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_trusted_certificate /path/to/fullchain.pem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_protocols TLSv1 TLSv1.1 TLSv1.2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_session_timeout 1h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nssl_session_cache shared:SSL:50m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadd_header Strict-Transport-Security max-age"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15768000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Permanent Redirect for HTTP to HTTPS")]),t._v("\nserver \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name yourdomain.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https://"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);