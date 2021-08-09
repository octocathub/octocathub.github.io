# centos设置静态IP

## 修改网卡配置
``` bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

``` bash 
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static  #设置网卡获得ip地址的方式，可能的选项为static，dhcp或bootp，分别对应静态指定的 ip地址，通过dhcp协议获得的ip地址，通过bootp协议获得的ip地址
ONBOOT=yes
DEFROUTE=yes
IPADDR=192.168.124.10   #如果设置网卡获得 ip地址的方式为静态指定，此字段就指定了网卡对应的ip地址
NETMASK=255.255.255.0  #网卡对应的网络掩码
GETWAY=192.168.124.1 #网卡对应的网关地址
IPV4_FAILURE_FATAL=no
PEERDNS=no
DNS1=8.8.8.8
DNS2=192.168.43.253
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=95e42e27-ea8f-4c1d-b26b-df1988d19454
DEVICE=ens33   #描述网卡对应的设备别名，例如ifcfg-eth0的文件中它为eth0
ONBOOT=yes
```  

## 修改网关配置

``` bash
vi /etc/sysconfig/network
```

``` bash 
NETWORKING=yes     #(表示系统是否使用网络，一般设置为yes。如果设为no，则不能使用网络，而且很多系统服务程序将无法启动)
NETWORKING_IPV6=no #是否启用IPV6
HOSTNAME=centos    #(设置本机的主机名，这里设置的主机名要和/etc/hosts中设置的主机名对应)
GATEWAY=192.168.0.1  #(设置本机连接的网关的IP地址。)
HOSTNAME=centos    #(设置本机的主机名，这里设置的主机名要和/etc/hosts中设置的主机名对应)
GATEWAY=192.168.0.1  #(设置本机连接的网关的IP地址。)
```

## 修改DNS配置
``` bash 
vi /etc/resolv.conf
```

``` bash 
nameserver 8.8.8.8
nameserver 114.114.114.114
```
nameserver　#即是DNS服务器ＩＰ地址，第一个是首选，第二个是备用。

## 重启网络

``` bash 
service network restart
```
或者
``` bash
/etc/init.d/network 
```
