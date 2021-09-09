(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{502:function(t,s,n){"use strict";n.r(s);var e=n(19),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),n("h2",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("p",[t._v("Linux的负载均衡常用的有三种技术：中国人搞出来的大神级产品 LVS Linux Virtual Server，俄罗斯的Nginx，来发法国的HAProxy。")]),t._v(" "),n("p",[t._v("日常开发中应该就只用到一台服务器，用户发送请求给服务器，服务器返回响应内容，这种情况其实对大多数中小型网站是没问题的，但是对于用户基数大，用户访问量大的应用，所有的请求都交给A来处理肯定是很吃力的，所以便需要做到负载均衡。\n我们可以多搭建几台服务器，服务器A只对用户的请求进行分发，请求的处理交给其他服务器来做，当用户的请求到达A时，服务器A根据定义的策略选择符合条件的服务器去处理这个请求，这样服务器A只做分发，压力自然就小了很多。\n"),n("img",{attrs:{src:"",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"",alt:""}})]),t._v(" "),n("p",[t._v("实现负载均衡最少也要三台服务器。")]),t._v(" "),n("p",[t._v("其中一台作为负载均衡服务器。")]),t._v(" "),n("p",[t._v("打开负载均衡服务器A的配置文件")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/local/nginx/conf/nginx.conf\n\n http "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\ninclude       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndefault_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/access.log  main;")]),t._v("\n\nsendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#keepalive_timeout  0;")]),t._v("\nkeepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定负载均衡的服务器列表")]),t._v("\nupstream taishan "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#weigth参数表示权值，权值越高被分配到的几率越大")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#下面表示137有3分之2几率，138有3分之1几率")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".64.137 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".64.138 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/host.access.log  main;")]),t._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       proxy_pass http://taishan"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请求转向taishan定义的服务器列表")]),t._v("\n       proxy_set_header Host "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将请求头转发给后端服务器")]),t._v("\n       proxy_set_header X-Forward-For "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#其他相关配置入下，可以根据需要添加配置")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#client_max_body_size 10m;#允许客户端请求的最大单文件字节数")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#client_body_buffer_size 128k;#缓冲区代理缓冲用户端请求的最大字节数")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_connect_timeout 90;#nginx跟后端服务器连接超时时间(代理连接超时)")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_send_timeout 90;#后端服务器数据回传时间(代理发送超时)")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_read_timeout 90;#连接成功后，后端服务器响应时间(代理接收超时)")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_buffer_size 4k;#设置代理服务器（nginx）保存用户头信息的缓冲区大小")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_buffers 4 32k;#proxy_buffers缓冲区，网页平均在32k以下的话，这样设置")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_busy_buffers_size 64k;#高负荷下缓冲大小（proxy_buffers*2）")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#proxy_temp_file_write_size 64k;#设定缓存文件夹大小，大于这个值，将从upstream服务器传")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# root   html;")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# index index.php index.html index.htm;")]),t._v("\n\n\n")])])]),n("p",[t._v("参考 ： "),n("a",{attrs:{href:"https://blog.csdn.net/lin_made/article/details/81327287",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/lin_made/article/details/81327287"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);