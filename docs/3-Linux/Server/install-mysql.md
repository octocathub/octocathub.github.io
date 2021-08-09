# 安装MySQL8

## 安装MySQL软件包

下载并安装MySQL官方的 Yum Repository,Mysql版本8.0.20

``` bash
wget -i -c http://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```

下载后直接yum安装
``` bash
yum -y install mysql80-community-release-el7-3.noarch.rpm
```

安装MySQL服务器
``` bash
yum -y install mysql-community-server

[root@CentOS Linux]# yum -y install mysql-community-server
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirror.lzu.edu.cn
 * extras: mirror.lzu.edu.cn
 * updates: mirror.lzu.edu.cn
mysql-connectors-community            | 2.5 kB 00:00:00  
mysql-tools-community             | 2.5 kB 00:00:00  
mysql80-community              | 2.5 kB 00:00:00  
(1/3): mysql-connectors-community/x86_64/primary_db      | 57 kB 00:00:00  
mysql-tools-community/x86_64/p FAILED           B 00:51:07 ETA 
http://repo.mysql.com/yum/mysql-tools-community/el/7/x86_64/repodata/12bd1e8730cd532791529877bf5e7babbbb02879-primary.sqlite.bz2: [Errno 12] Timeout on http://repo.mysql.com/yum/mysql-tools-community/el/7/x86_64/repodata/12bd1e8730cd532791529877bf5e7babbbb02879-primary.sqlite.bz2: (28, 'Operation too slow. Less than 1000 bytes/sec transferred the last 30 seconds')
Trying other mirror.
(2/3): mysql-tools-community/x86_64/primary_db       | 72 kB 00:00:00  
mysql80-community/x86_64/prima FAILED           B 00:00:15 ETA 
http://repo.mysql.com/yum/mysql-8.0-community/el/7/x86_64/repodata/833c637b3989c2dd5a079a045177d2f1c96e9c1e-primary.sqlite.bz2: [Errno 12] Timeout on http://repo.mysql.com/yum/mysql-8.0-community/el/7/x86_64/repodata/833c637b3989c2dd5a079a045177d2f1c96e9c1e-primary.sqlite.bz2: (28, 'Operation too slow. Less than 1000 bytes/sec transferred the last 30 seconds')
Trying other mirror.
(3/3): mysql80-community/x86_64/primary_db        | 107 kB 00:00:00  
Resolving Dependencies
--> Running transaction check
---> Package mysql-community-server.x86_64 0:8.0.20-1.el7 will be installed
--> Processing Dependency: mysql-community-common(x86-64) = 8.0.20-1.el7 for package: mysql-community-server-8.0.20-1.el7.x86_64
--> Processing Dependency: mysql-community-client(x86-64) >= 8.0.11 for package: mysql-community-server-8.0.20-1.el7.x86_64
--> Running transaction check
---> Package mysql-community-client.x86_64 0:8.0.20-1.el7 will be installed
--> Processing Dependency: mysql-community-libs(x86-64) >= 8.0.11 for package: mysql-community-client-8.0.20-1.el7.x86_64
---> Package mysql-community-common.x86_64 0:8.0.20-1.el7 will be installed
--> Running transaction check
---> Package mariadb-libs.x86_64 1:5.5.65-1.el7 will be obsoleted
--> Processing Dependency: libmysqlclient.so.18()(64bit) for package: 2:postfix-2.10.1-9.el7.x86_64
--> Processing Dependency: libmysqlclient.so.18(libmysqlclient_18)(64bit) for package: 2:postfix-2.10.1-9.el7.x86_64
---> Package mysql-community-libs.x86_64 0:8.0.20-1.el7 will be obsoleting
--> Running transaction check
---> Package mysql-community-libs-compat.x86_64 0:8.0.20-1.el7 will be obsoleting
--> Finished Dependency Resolution
  
Dependencies Resolved
  
===============================================================================================
 Package       Arch  Version    Repository    Size
===============================================================================================
Installing:
 mysql-community-libs    x86_64  8.0.20-1.el7  mysql80-community  4.5 M
  replacing mariadb-libs.x86_64 1:5.5.65-1.el7
 mysql-community-libs-compat  x86_64  8.0.20-1.el7  mysql80-community  1.2 M
  replacing mariadb-libs.x86_64 1:5.5.65-1.el7
 mysql-community-server   x86_64  8.0.20-1.el7  mysql80-community  488 M
Installing for dependencies:
 mysql-community-client   x86_64  8.0.20-1.el7  mysql80-community  47 M
 mysql-community-common   x86_64  8.0.20-1.el7  mysql80-community  609 k
  
Transaction Summary
===============================================================================================
Install 3 Packages (+2 Dependent packages)
  
Total download size: 541 M
Is this ok [y/d/N]: y
Downloading packages:
warning: /var/cache/yum/x86_64/7/mysql80-community/packages/mysql-community-common-8.0.20-1.el7.x86_64.rpm: Header V3 DSA/SHA1 Signature, key ID 5072e1f5: NOKEY
Public key for mysql-community-common-8.0.20-1.el7.x86_64.rpm is not installed
(1/5): mysql-community-common-8.0.20-1.el7.x86_64.rpm     | 609 kB 00:00:00  
(2/5): mysql-community-libs-8.0.20-1.el7.x86_64.rpm      | 4.5 MB 00:00:13  
(3/5): mysql-community-libs-compat-8.0.20-1.el7.x86_64.rpm    | 1.2 MB 00:00:04  
mysql-community-client-8.0.20- FAILED           B 00:22:23 ETA 
http://repo.mysql.com/yum/mysql-8.0-community/el/7/x86_64/mysql-community-client-8.0.20-1.el7.x86_64.rpm: [Errno 12] Timeout on http://repo.mysql.com/yum/mysql-8.0-community/el/7/x86_64/mysql-community-client-8.0.20-1.el7.x86_64.rpm: (28, 'Operation too slow. Less than 1000 bytes/sec transferred the last 30 seconds')
Trying other mirror.
(4/5): mysql-community-server-8.0.20-1.el7.x86_64.rpm     | 488 MB 00:22:18  
(5/5): mysql-community-client-8.0.20-1.el7.x86_64.rpm     | 47 MB 00:01:57  
-----------------------------------------------------------------------------------------------
Total               376 kB/s | 541 MB 00:24:34  
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Importing GPG key 0x5072E1F5:
 Userid  : "MySQL Release Engineering <mysql-build@oss.oracle.com>"
 Fingerprint: a4a9 4068 76fc bd3c 4567 70c8 8c71 8d3b 5072 e1f5
 Package : mysql80-community-release-el7-3.noarch (installed)
 From  : /etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Is this ok [y/N]: y 
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
Warning: RPMDB altered outside of yum.
 Installing : mysql-community-common-8.0.20-1.el7.x86_64         1/6 
 Installing : mysql-community-libs-8.0.20-1.el7.x86_64         2/6 
 Installing : mysql-community-client-8.0.20-1.el7.x86_64         3/6 
 Installing : mysql-community-server-8.0.20-1.el7.x86_64         4/6 
 Installing : mysql-community-libs-compat-8.0.20-1.el7.x86_64        5/6 
 Erasing : 1:mariadb-libs-5.5.65-1.el7.x86_64           6/6 
 Verifying : mysql-community-libs-compat-8.0.20-1.el7.x86_64        1/6 
 Verifying : mysql-community-common-8.0.20-1.el7.x86_64         2/6 
 Verifying : mysql-community-server-8.0.20-1.el7.x86_64         3/6 
 Verifying : mysql-community-client-8.0.20-1.el7.x86_64         4/6 
 Verifying : mysql-community-libs-8.0.20-1.el7.x86_64         5/6 
 Verifying : 1:mariadb-libs-5.5.65-1.el7.x86_64           6/6 
  
Installed:
 mysql-community-libs.x86_64 0:8.0.20-1.el7             
 mysql-community-libs-compat.x86_64 0:8.0.20-1.el7           
 mysql-community-server.x86_64 0:8.0.20-1.el7             
  
Dependency Installed:
 mysql-community-client.x86_64 0:8.0.20-1.el7 mysql-community-common.x86_64 0:8.0.20-1.el7 
  
Replaced:
 mariadb-libs.x86_64 1:5.5.65-1.el7 
  
Complete!
```

## 配置mysql数据库

启动mysql
``` bash
systemctl start mysqld.service
```

查看mysql运行状态

``` bash 
systemctl status mysqld.service

● mysqld.service - MySQL Server
 Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
 Active: active (running) since Wed 2020-05-13 23:57:41 HKT; 18s ago
  Docs: man:mysqld(8)
   http://dev.mysql.com/doc/refman/en/using-systemd.html
 Process: 9563 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCESS)
 Main PID: 9649 (mysqld)
 Status: "Server is operational"
 Tasks: 39
 CGroup: /system.slice/mysqld.service
   └─9649 /usr/sbin/mysqld
  
May 13 23:57:34 CentOS.highning.com systemd[1]: Starting MySQL Server...
May 13 23:57:41 CentOS.highning.com systemd[1]: Started MySQL Server.
```

此时你并不能登陆mysql，虽然已经有了mysql的默认用户名。

``` bash
grep "password" /var/log/mysqld.log

2021-07-18T22:51:37.815353Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: 9*CxxNRWHqmL
```
进入数据库：
``` bash
mysql -u root -p  
```
输入上面查询到的密码，但此时不能操作数据库，必须修改密码之后才能操作数据库。

``` bash 
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password';
```
其中 `new password`替换成你要设置的密码，注意：密码设置必须要大小写字母+数字+特殊符号(,/';:等),不然会因为mysql的密码强度策略而导致重置密码不成功。
> 当然这个策略是可以修改的.


## 开启mysql的远程访问

执行以下命令开启远程访问限制（注意：下面命令开启的IP是 192.168.0.1，如要开启所有的，用%代替IP）,mysql8.0和以前的版本不一样，不能用原来的命令同时授权和创建用户：

``` bash
create user 'root'@'192.168.0.1' identified by 'password';
grant all privileges on *.* to 'root'@'192.168.0.1' with grant option;
``` 
再输入以下两行命令
``` bash 
flush privileges;
exit
```

## 为firewalld添加开放端口

添加mysql端口3306和Tomcat端口8080
``` bash 
firewall-cmd --zone=public --add-port=3306/tcp --permanent
 
firewall-cmd --zone=public --add-port=8080/tcp --permanent
```

重新载入

``` bash 
firewall-cmd --reload
```

最后用mysql命令登录

``` bash 
mysql -h 192.168.88.88 -P 3306 -u root -p
Enter password: ********
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.0.20 MySQL Community Server - GPL
  
Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.
  
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
  
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
  
mysql> show databases;
+--------------------+
| Database   |
+--------------------+
| information_schema |
| mysql    |
| performance_schema |
| sys    |
+--------------------+
4 rows in set (0.00 sec)
  
```

