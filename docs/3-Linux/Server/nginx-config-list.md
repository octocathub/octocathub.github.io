# Nginx 常用配置清单

Nginx 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务，其因丰富的功能集、稳定性、示例配置文件和低系统资源的消耗受到了开发者的欢迎。

本文，我们总结了一些常用的 Nginx 配置代码，希望对大家有所帮助。

侦听端口

``` bash
server {
# Standard HTTP Protocol
listen 80;
# Standard HTTPS Protocol
listen 443 ssl;
# For http2
listen 443 ssl http2;
# Listen on 80 using IPv6
listen [::]:80;
# Listen only on using IPv6
listen [::]:80 ipv6only=on;
}
```

访问日志
``` bash
server {
# Relative or full path to log file
access_log /path/to/file.log;
# Turn 'on' or 'off'  
access_log on;
}
```

域名
``` bash
server {
# Listen to yourdomain.com
server_name yourdomain.com;
# Listen to multiple domains server_name yourdomain.com www.yourdomain.com;
# Listen to all domains
server_name *.yourdomain.com;
# Listen to all top-level domains
server_name yourdomain.*;
# Listen to unspecified Hostnames (Listens to IP address itself)
server_name "";
}
```

静态资产
``` bash
server {
listen 80;
server_name yourdomain.com;
location / {
root /path/to/website;
}
}
```
重定向

``` bash
server {
listen 80;
server_name www.yourdomain.com;
return 301 http://yourdomain.com$request_uri;
}
server {
listen 80;
server_name www.yourdomain.com;
location /redirect-url {
return 301 http://otherdomain.com;
}
}
```

反向代理
``` bash
server {
listen 80;
server_name yourdomain.com;
location / {
proxy_pass http://0.0.0.0:3000;
# where 0.0.0.0:3000 is your application server (Ex: node.js) bound on 0.0.0.0 listening on port 3000
}
}
```

负载均衡
``` bash
upstream node_js {
server 0.0.0.0:3000;
server 0.0.0.0:4000;
server 123.131.121.122;
}
server {
listen 80;
server_name yourdomain.com;
location / {
proxy_pass http://node_js;
}
}
```


SSL 协议
``` bash
server {
listen 443 ssl;
server_name yourdomain.com;
ssl on;
ssl_certificate /path/to/cert.pem;
ssl_certificate_key /path/to/privatekey.pem;
ssl_stapling on;
ssl_stapling_verify on;
ssl_trusted_certificate /path/to/fullchain.pem;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_session_timeout 1h;
ssl_session_cache shared:SSL:50m;
add_header Strict-Transport-Security max-age=15768000;
}
# Permanent Redirect for HTTP to HTTPS
server 
{
listen 80;
server_name yourdomain.com;
return 301 https://$host$request_uri;
}
```


