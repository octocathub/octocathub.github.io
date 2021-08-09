# linux端口占用，并杀掉相关进程


## 方式一：lsof命令

1、查看占用端口进程的PID：
``` bash
lsof -i:{端口号}
```
2、根据PID kill掉相关进程：
``` bash
kill -9 {PID}
```

## 方式二：netstat命令

1、查看占用端口进程的PID：
``` bash
netstat -tunlp|grep {port}
```
2、根据PID kill掉相关进程：
``` bash
kill -9 {PID}
```

