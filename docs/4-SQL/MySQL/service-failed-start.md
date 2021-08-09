# MYSQL服务无法启动解决办法


Windows启动mysql服务
``` bash 
net start mysql 
```

在命令行输入
``` bash 
mysqld --console 
```
然后在这里就可以看到具体的错误信息了。

然后根据错误信息定位到错误后，就可以重写启动MySQL了。


