# Git操作指南

### 下载GitHub分支上的文件
- 默认的我们会下载master分支上的文件，但是由于有可能还会存在其他的分支，甚至其他分支上的文件与主分支上的文件大相径庭，所以我们可以这样操作clone
``` bash
git clone -b branch_name URL.git
```

### 切换分支，并提交文件
创建新分支
``` bash
git branch -c branch_name
```
切换到新分支
``` bash
git checkout branch_name
```
列出所有分支
``` bash
git branch -a
```
合并分支
1. 切换到master(主分支)
``` bash
git checkout master
```
2. 合并新分支(子分支)
``` bash
git merge --no-ff branch_name
```
3. 提交注释
``` bash
git commit -am "merage affect REAMD.md"
```
4. 上传更新
``` bash
git push
```

### git clone 的参数depth=1有什么用？
- depth用于指定克隆深度，为1即表示只克隆最近一次commit.
这种方法克隆的项目只包含最近的一次commit的一个分支，体积很小，即可解决文章开头提到的项目过大导致Timeout的问题，但会产生另外一个问题，他只会把默认分支clone下来，其他远程分支并不在本地，所以这种情况下，需要用如下方法拉取其他分支：
```
$ git clone --depth 1 https://github.com/username/xxxxxxx.git
$ git remote set-branches origin 'remote_branch_name'
$ git fetch --depth 1 origin remote_branch_name
$ git checkout remote_branch_name
```
