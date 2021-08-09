# Linux修改时区


``` bash 
[root@localhost /] vim /etc/sysconfig/clock
```
加入以下配置文件：
``` bash 
ZONE=Asia/Shanghai
UTC=false
ARC=false
```
然后运行以下命令
``` bash 
rm /etc/localtime
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
查看时间
``` bash 
hwclock -w
hwclock --hctosys

date
date -R
```