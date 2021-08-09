# 防火墙

linux防火墙常用操作，包含了基本的防火墙启动/停止、端口开放设置、端口出入站设置等相关功能。由于Linux各个发行版使用的防火墙软件并不相同，特此整理该文档帮助大家能够进行速查。
摘自<https://segmentfault.com/a/1190000040395813>

> 在centos7以上版本，默认的防火墙是firewall-cmd。centos6及其以下版本，是iptables。

## 一般性前置条件
一般对防火墙进行操作时，需要使用具备系统管理者的身份执行指令。本文档所有操作命令示例均按已经获得系统管理者权限为前提。另外本文所有指令均已80端口为样例。

## firewall-cmd使用

``` bash
查看防火墙状态
firewall-cmd --state
开启防火墙
systemctl start firewalld
关闭防火墙
systemctl stop firewalld
设置开机启动
systemctl enable firewalld
禁用开机启动
sytemctl disable firewalld
重启防火墙
firewall-cmd --reload
开放防火墙端口
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --reload 
关闭防火墙端口
firewall-cmd --permanent --remove-port=80/tcp
firewall-cmd --reload 
查看防火墙规则
firewall-cmd --list-all
```

## iptables使用
``` bash 
查看防火墙状态
firewall-cmd --state
开启防火墙
service iptables start
关闭防火墙
service iptables stop
设置开机启动
chkconfig iptables on
禁用开机启动
chkconfig iptables off
重启防火墙
service iptables restartd
开放防火墙端口
/sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT 
/etc/init.d/iptables save                                       
service iptables restart                                               
关闭防火墙端口
/sbin/iptables -I INPUT -p tcp --dport 端口号 -j DROP 
/etc/init.d/iptables save                                        
service iptables restart                                             
查看防火墙规则
/etc/init.d/iptables status
```