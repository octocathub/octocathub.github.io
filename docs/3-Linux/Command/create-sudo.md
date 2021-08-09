# linux创建用户并给用户sudo权限

## 创建用户
创建一个名为test的用户，且同时给他在home目录下面创建了文件夹。
``` bash 
useradd -d /home/test -m test
```
设置密码。
``` bash 
passwd test
```
把命令行的模式换为bash，默认是sh。你肯定会问为什么要这样，因为如果使用默认的sh，你打开终端的提示符显示的是$，不是“用户名$主机名”这种形式。
``` bash 
usermod -s /bin/bash test
```

把test用户添加到sudo和admin用户组里面。这里要注意的是系统里面的admin的用户组的名字是"adm"。
``` bash 
usermod -a -G sudo test
usermod -a -G adm test
```

注意： centos默认没有sudo组，可以将你的用户指向wheel用户组, wheel用户组同样有sudo权限

``` bash 
usermod -a -G wheel test
```

还有一种是 直接修改配置文件使之生效。
该文件是个可读文件，所以需要进行现授权，再收回权限。

``` bash 
chmod u+w /etc/sudoers 
 
vi /etc/sudoers

root    ALL=(ALL)       ALL 
test    ALL=(ALL)       ALL  #加入以下代码即可

chmod u-w /etc/sudoers # 回收权限
```

## 其他
检查test所在的用户组
``` bash 
groups test
```
切换到sudo。
``` bash 
sudo su
```

