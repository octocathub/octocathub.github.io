# Linux安装docker
官方推荐使用通过设置docker仓库的方法来安装，安装和升级都简单些。


## 卸载旧版本
较旧的 Docker 版本称为 docker 或 docker-engine 。如果已安装这些程序，请卸载它们以及相关的依赖项。

``` bash
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

## 设置docker仓库
安装所需的软件包.

``` bash
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

设置仓库.

使用官方源地址（比较慢）
``` bash
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

可以选择国内的一些源地址：

阿里云
``` bash 
$ sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

清华大学源
``` bash 
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo
```

## 安装docker引擎

``` bash
$ sudo yum install docker-ce docker-ce-cli containerd.io
```

Docker 安装完默认未启动。并且已经创建好 docker 用户组，但该用户组下没有用户。

## 启动docker
``` bash
$ sudo systemctl start docker
```
通过运行 hello-world 映像来验证是否正确安装了 Docker Engine-Community 。
``` bash
$ sudo docker run hello-world
```
如果这个hello-world镜像默认不存在，会自动下载，然后运行这个image。

## 卸载 docker
删除安装包：
``` bash 
yum remove docker-ce
```
删除镜像、容器、配置文件等内容：
``` bash 
rm -rf /var/lib/docker
```