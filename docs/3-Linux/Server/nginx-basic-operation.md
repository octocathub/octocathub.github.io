# Nginx常规操作

> Centos7为例

## 通过软件源进行安装
添加EPEL软件源，如果已经安装EPEL仓库请跳过该步骤。

yum install epel-release
安装Nginx软件

yum install nginx

## 启动与停止
设置开机启动
systemctl

systemctl enable nginx
启动nginx
systemctl

systemctl start nginx
停止nginx
systemctl

systemctl stop nginx
查看当前状态
systemctl

systemctl status nginx
重启nginx
systemctl

systemctl restart nginx
重新加载配置
systemctl

systemctl reload nginx