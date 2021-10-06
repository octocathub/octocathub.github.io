(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{577:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理"}},[t._v("#")]),t._v(" nginx-反向代理")]),t._v(" "),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("反向代理是nginx的一个重要功能，在编译安装时会默认编译该模块。在配置文件中主要配置proxy_pass指令。")]),t._v(" "),s("p",[t._v("代理服务器接受客户端的请求，然后把请求转发给后端真实服务器进行处理，然后再将服务器的响应结果返给客户端。")]),t._v(" "),s("h2",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("p",[t._v("与正向代理（正向代理主要是代理客户端的请求）相反，反向代理主要是代理服务器返回的数据，所以它的作用主要有以下两点：")]),t._v(" "),s("ul",[s("li",[t._v("可以防止内部服务器被恶意攻击（内部服务器对客户端不可见）。")]),t._v(" "),s("li",[t._v("为负载均衡和动静分离提供技术支持。\n语法：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Syntax:\t proxy_pass URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault:\t—\nContext: location, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" location, limit_except\n")])])]),s("p",[t._v("代理服务器的协议，可支持http与https。")]),t._v(" "),s("p",[t._v("地址可以指定为域名或IP地址，以及可选端口。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("proxy_pass http://localhost:9000/uri/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nproxy_pass http://192.168.0.188:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nproxy_pass http://192.168.0.188"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"实例一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例一"}},[t._v("#")]),t._v(" 实例一")]),t._v(" "),s("p",[t._v("代理服务器：192.168.0.109")]),t._v(" "),s("p",[t._v("后端服务器：192.168.0.114")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("代理服务器的简单配置：\n\nlocation / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://192.168.0.114"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_pass  转发请求给后端服务器")]),t._v("\n后端服务器的配置：\n location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo $host  这个主要是来看下后端接收到的Host是什么。")]),t._v("\n")])])]),s("p",[t._v("第一次验证：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# curl 192.168.0.109")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.114\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取的请求Host是后端服务器ip，去掉该指令，验证请求结果。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# curl 192.168.0.109")]),t._v("\n                         this is "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114")]),t._v(" page\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以看到我们访问的是109，但是得到的结果是114的发布目录文件。")]),t._v("\n")])])]),s("h2",{attrs:{id:"实例二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例二"}},[t._v("#")]),t._v(" 实例二")]),t._v(" "),s("p",[t._v("如果proxy_pass没有设置uri路径，但是代理服务器的location 有uri，那么代理服务器将把客户端请求的地址传递给后端服务器。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("代理服务器的配置：\n\nlocation /document/data/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://192.168.0.114"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n后端服务器的配置：\n\n location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo $host;")]),t._v("\n            root   html/uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("验证：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -p /usr/local/nginx/html/uri/document/data/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "this is /usr/local/nginx/html/uri/document/data/ test" > /usr/local/nginx/html/uri/document/data/index.html')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# curl 192.168.0.109/document/data/")]),t._v("\nthis is /usr/local/nginx/html/uri/document/data/ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整请求路径 是在后端服务器的/usr/local/nginx/html/uri 后追加客户端请求的路径 /document/data/")]),t._v("\n")])])]),s("h2",{attrs:{id:"实例三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例三"}},[t._v("#")]),t._v(" 实例三")]),t._v(" "),s("p",[t._v("如果proxy_pass设置了uri路径，则需要注意，此时，proxy_pass指令所指定的uri会覆盖后端服务器的root指令。")]),t._v(" "),s("p",[t._v("代理服务器的配置：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://192.168.0.114/data/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n后端服务器的配置：\n\nlocation / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("验证：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -p /usr/local/nginx/html/data/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "this is /usr/local/nginx/html/data test。" > /usr/local/nginx/html/data/index.html')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# curl 192.168.0.109")]),t._v("\nthis is /usr/local/nginx/html/data test。\n")])])]),s("p",[t._v("这样看好像很正常。但是我们稍作修改。")]),t._v(" "),s("p",[t._v("再次验证，这次加上location的uri，后端服务器加个子目录：")]),t._v(" "),s("p",[t._v("代理服务器的配置：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("location /document/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://192.168.0.114/data/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n后端服务器的配置：\n\n location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#echo $host;")]),t._v("\n            root   html/uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("验证：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# curl 192.168.0.109/document/")]),t._v("\nthis is /usr/local/nginx/html/data test。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#该路径还是 proxy_pass 指定的uri路径，与location 和后端的root指令都没有关系了！")]),t._v("\n")])])]),s("p",[t._v("这是反代单台服务器，如果是多台服务器呢？那就涉及到负载均衡了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);