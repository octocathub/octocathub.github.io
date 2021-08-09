# MySQL设置远程连接

## 

``` bash 
use mysql;
select user,host from user;
update user set host='%' where user='root';
select host,user from user;
flush privileges; # 使修改生效
```

> 而%是个通配符，如果Host=192.168.1.%，那么就表示只要是IP地址前缀为“192.168.1.”的客户端都可以连接。如果Host=%，表示所有IP都有连接权限。