# MySQL定时备份

> 在linux下mysql通过mysqldump备份数据库。

## 创建备份脚本
``` bash 
vi mysqldumpbackup.sh
```
备份脚本：
``` bash 
#!/bin/bash
#数据库地址
hostname='localhost'
#数据库账号
username='username'
#数据库密码
password='password'
#备份时间
backuptime=`date +%Y%m%d%H%M%S`
#日志备份路径
logpath='/bak/mysqldumpbackuplog/'
#文件备份路径
filepath='/bak/mysqldumpbackupfile/'
#输出日志
echo "数据库备份开始!!${backuptime}" >> ${logpath}/mysqldumplog.log
#执行mysqldump备份数据库
mysqldump --single-transaction -h${hostname} -u${username} -p${password} --all-databases > ${filepath}/mysqldump_${backuptime}.sql
#备份成功以下操作
if [ "$?" == 0 ];then
cd $filepath
#只保存7天内的备份,这里先注释删除语句
#find $filepath -name "*.sql" -type f -mtime +7 -exec rm -rf {} \;
echo "数据库备份成功!!${backuptime}" >> ${logpath}/mysqldumplog.log
else
#备份失败则进行以下操作
echo "数据库备份失败!!${backuptime}" >> ${logpath}/mysqldumplog.log
fi
```
## 添加运行权限
``` bash 
chmod +x mysqldumpbackup.sh
```

## 创建备份文件存放目录

``` bash 
#创建备份日志目录
mkdir mysqldumpbackuplog
#创建备份文件目录
mkdir mysqldumpbackupfile
```

## 添加定时执行脚本任务

``` bash 
crontab -e

0 2 * * * /bak/mysqldumpbackup.sh # 每天2点执行备份

crontab -l # 查看crontab列表
```

