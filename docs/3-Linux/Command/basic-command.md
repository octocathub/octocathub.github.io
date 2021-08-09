# 基本命令使用

## ssh命令

``` bash  
# 远程登陆
ssh -p 端口号 用户名@IP地址
# ssh服务的关闭
service sshd stop
# ssh服务的开启：
service sshd start
# ssh服务的重启
service sshd reload   # [停止进程后重启] ==> 推荐
service sshd restart  # [干掉进程后重启] ==> 不推荐 
```




