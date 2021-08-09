# Linux防止ssh暴力破解

每次登录系统(CentOS7)，就会发现有N次登陆失败的统计信息。
查看 /var/log/secure 日志文件可以看到文件中有很多认证失败的ip登录信息，这就说明已经被无数不同的IP地址和不同的用户进行SSH尝试连接了。
所以可能会遇到暴力破解。也就是不断地通过字典来进行暴力破解。

以下几种防范方法：

## 禁止root登陆
其实这里也就是禁止默认用户登陆。因为root在Linux
利属于默认账户，所以破解的时候也一定会选择这个默认的账户进行暴力破解的。


修改sshd服务器端的配置文件 /etc/ssh/sshd_config

``` bash 
[root@vps ~]$ vi /etc/ssh/sshd_config

PermitRootLogin no  # 配置该选项

[root@vps ~]$ service sshd restart # 重启 ssh服务
```

## 修改 SSH 默认端口

修改SSH默认端口号，sshd服务器端的配置文件为`/etc/ssh_config` 。
``` bash 
[root@vps ~]$  vi /etc/ssh/sshd_config

Port 2280 # 配置ssh的端口号

[root@vps ~]$ systemctl restart sshd #重启SSH
```
查看状态
``` bash 
[root@vps ~]$ systemctl status sshd
```
查看端口是否更改
``` bash 
[root@vps ~]$ netstat -ntlp | grep 2280
tcp    0   0 0.0.0.0:2280   0.0.0.0:*   LISTEN   8793/sshd          
tcp6   0   0 :::2280        :::*        LISTEN   8793/sshd
```

## 根据secure文件中失败的ip次数做限制
当同一个IP地址超过5次的尝试，那么就加入/etc/hosts.deny 。

``` bash 
#! /bin/bash
# 提取所有的IP到black.list文件中
cat /var/log/secure|awk '/Failed/{print $(NF-3)}'|sort|uniq -c|awk '{print $2"="$1;}' > /usr/local/bin/black.list
 
# 设定次数
define="5"
for i in `cat  /usr/local/bin/black.list`
do
  IP=`echo $i |awk -F= '{print $1}'`
  NUM=`echo $i|awk -F= '{print $2}'`
 
  if [ $NUM -gt $define]; then
    grep $IP /etc/hosts.deny > /dev/null
    if [ $? -gt 0 ];then
      echo "sshd:$IP:deny" >> /etc/hosts.deny
    fi
  fi
done
```
添加计划任务
``` bash 
[root@vps ~]$ crontab -e
# 每3分钟检查一次
*/3 * * * *  sh /usr/local/bin/secure_ssh.sh
```

重启 crontab
``` bash 
[root@vps ~]$ systemctl restart crond
```


## 附录---sshd常用配置参数



| 参数      | 说明     | 
|:-------------:|:-------------:|
|port  |   监听端口号  |
|ListenAddress ip|  监听的IP地址     |
|LoginGraceTime      |   发起连接后多少时间内必须登录超时断开连接    |
|PermitRootLogin       |  是否允许root登录     |
|StrictModes	     |   检查.ssh/文件的所有者，权限等    |
|MaxAuthTries     |   最大密码尝试次数    |
|MaxSessions    |同一连接的最大绘会话数|
|PubkeyAuthentication     |   基于Key验证    |
|PermitEmptyPasswords    |   是否使用空口令登录    |
|PasswordAuthentication     |   基于口令验证    |
|GatewayPorts      |  ssh服务监听所使用的端口当网关使用     |
|ClientAliveInterval|间隔多久客户端和服务器端没有操作就断开连接|
|ClientAliveCountMax|和上面那项一起使用为检查的次数|
|UseDNS|是否使用名称解析|
|GSSAPIAuthentication|GSSAPI的认证|
|MaxStartups|  未验证的最大连接数|
|Banner|登录前提示|
|AllowUsers| 允许哪些用户登录（白名单） |
|DenyUsers| 不允许哪些用户登录（黑名单） |
| AllowGroups | 允许哪些组登录（白名单） |
|DenyGroups	 | 不允许哪些组登录（黑名单） | 
	
