(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{418:function(t,a,s){"use strict";s.r(a);var e=s(41),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git基本使用"}},[t._v("#")]),t._v(" Git基本使用")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ssh-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"邮箱地址"')]),t._v("\n")])])]),s("p",[t._v("其中生成的 id_rsa.pub 的内容，就是公钥，放到需要授权的服务器上。")]),t._v(" "),s("p",[t._v("全局配置 Git 的用户名和邮箱")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx@xx.com"')]),t._v("\n")])])]),s("h2",{attrs:{id:"git-的工作区域和流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-的工作区域和流程"}},[t._v("#")]),t._v(" Git 的工作区域和流程")]),t._v(" "),s("p",[t._v("Git 的4个工作区:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Workspace：工作区，就是平时进行开发改动的地方，是当前看到最新的内容，在开发的过程也就是对工作区的操作")])]),t._v(" "),s("li",[s("p",[t._v("Index：暂存区，当执行 git add 的命令后，工作区的文件就会被移入暂存区，暂存区标记了当前工作区中那些内容是被 Git 管理的，当完成某个需求或者功能后需要提交代码，第一步就是通过 git add 先提交到暂存区。")])]),t._v(" "),s("li",[s("p",[t._v("Repository：本地仓库，位于自己的电脑上，通过 git commit 提交暂存区的内容，会进入本地仓库。")])]),t._v(" "),s("li",[s("p",[t._v("Remote：远程仓库，用来托管代码的服务器，远程仓库的内容能够被分布在多个地点的处于协作关系的本地仓库修改，本地仓库修改完代码后通过 git push 命令同步代码到远程仓库。")])])]),t._v(" "),s("p",[t._v("一般来说，Git 的工作流程分为以下几步")]),t._v(" "),s("p",[t._v("1.在工作区开发，添加，修改文件。\n2.将修改后的文件放入暂存区。\n3.将暂存区域的文件提交到本地仓库。\n4.将本地仓库的修改推送到远程仓库。")]),t._v(" "),s("h2",{attrs:{id:"git-基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-基本操作"}},[t._v("#")]),t._v(" Git 基本操作")]),t._v(" "),s("h3",{attrs:{id:"git-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[t._v("#")]),t._v(" git add")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git add")]),t._v("\n添加文件到暂存区\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加某个文件到暂存区，后面可以跟多个文件，以空格区分")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xxx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前更改的所有文件到暂存区。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h3",{attrs:{id:"git-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存的更改，会新开编辑器进行编辑")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存的更改，并记录下备注")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"you message"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等同于 git add . && git commit -m")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对最近一次的提交的信息进行修改,此操作会修改commit的hash值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])]),s("h3",{attrs:{id:"git-pull"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[t._v("#")]),t._v(" git pull")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程仓库拉取代码并合并到本地，可简写为 git pull 等同于 git fetch && git merge ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用rebase的模式进行合并")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --rebase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"git-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch"}},[t._v("#")]),t._v(" git fetch")]),t._v(" "),s("p",[t._v("与 git pull 不同的是 git fetch 操作仅仅只会拉取远程的更改，不会自动进行 merge 操作。对你当前的代码没有影响")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取远程仓库特定分支的更新")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取远程仓库所有分支的更新")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all\n")])])]),s("h3",{attrs:{id:"git-branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[t._v("#")]),t._v(" git branch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建本地分支，但不切换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地和远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-nane"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新命名分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("old-branch-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-branch-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"git-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[t._v("#")]),t._v(" git log")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看git提交记录  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),s("h3",{attrs:{id:"git-revert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[t._v("#")]),t._v(" git revert")]),t._v(" "),s("p",[t._v("想象这么一个场景，你的项目最近有2个版本要上线，这两个版本还伴随着之前遗留的 bug 的修复，一开始的时候，你将 bug 修复在了第一个版本的 release 分支上，突然在发版前一天，测试那边反馈，需要把第一个版本修复 bug 的内容改在第二个版本上，这个时候，第一个版本的集成分支的提交应该包括了第一个版本的功能内容，遗留 bug 修复的提交和其他同事提交的内容，想要通过 reset 的方式粗暴摘除之前的关于 bug 修复的 commit 肯定是不行的，同时，这种做法比较危险，此时，我们既不想破坏之前的提交记录，又想撤回我们遗留 bug 的 commit 记录应该怎么做呢？git revert 就派上了用场。")]),t._v(" "),s("p",[t._v("git revert 撤销某次操作，此操作不会修改原本的提交记录，而是会新增一条提交记录来抵消某次操作。\n语法： git revert "),s("commit-id",[t._v(" 针对普通 commit")])],1),t._v(" "),s("p",[t._v("git revert "),s("commit-id",[t._v(" -m 针对 merge 的 commit")])],1),t._v(" "),s("h3",{attrs:{id:"git-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),s("p",[t._v("会有这么一个场景，现在你正在用你的 feature 分支上开发新功能。这时，生产环境上出现了一个 bug 需要紧急修复，但是你这部分代码还没开发完，不想提交，怎么办？这个时候可以用 git stash 命令先把工作区已经修改的文件暂存起来，然后切换到 hotfix 分支上进行 bug 的修复，修复完成后，切换回 feature 分支，从堆栈中恢复刚刚保存的内容。\n基本命令如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash //把本地的改动暂存起来\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash save "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v(" 执行存储时，添加备注，方便查找。\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop // 应用最近一次暂存的修改，并删除暂存的记录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply  // 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即 stash@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，如果要使用其他个，git stash apply stash@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" 。\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list // 查看 stash 有哪些存储\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v(" // 删除所有缓存的 stash\n")])])]),s("h2",{attrs:{id:"查看当前git项目的配置信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看当前git项目的配置信息"}},[t._v("#")]),t._v(" 查看当前git项目的配置信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n")])])]),s("h2",{attrs:{id:"撤销commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销commit"}},[t._v("#")]),t._v(" 撤销commit")]),t._v(" "),s("p",[t._v("执行完commit后，想撤回commit，怎么办？\ngit reset --soft HEAD^")]),t._v(" "),s("p",[t._v("这样就成功的撤销了你的commit")]),t._v(" "),s("p",[t._v("注意，仅仅是撤回commit操作，您写的代码仍然保留。\nHEAD^的意思是上一个版本，也可以写成HEAD~1")]),t._v(" "),s("p",[t._v("如果你进行了2次commit，想都撤回，可以使用HEAD~2")]),t._v(" "),s("p",[t._v("至于这几个参数：\n--mixed\n意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作\n这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。")]),t._v(" "),s("p",[t._v("--soft"),s("br"),t._v("\n不删除工作空间改动代码，撤销commit，不撤销git add .")]),t._v(" "),s("p",[t._v("--hard\n删除工作空间改动代码，撤销commit，撤销git add .")]),t._v(" "),s("p",[t._v("注意完成这个操作后，就恢复到了上一次的commit状态。")]),t._v(" "),s("p",[t._v("顺便说一下，如果commit注释写错了，只是想改一下注释，只需要：\ngit commit --amend")]),t._v(" "),s("p",[t._v("此时会进入默认vim编辑器，修改注释完毕后保存就好了。")]),t._v(" "),s("h2",{attrs:{id:"git-add-添加错文件-撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-add-添加错文件-撤销"}},[t._v("#")]),t._v(" git add 添加错文件 撤销")]),t._v(" "),s("p",[t._v("git add 如果添加了错误的文件的话")]),t._v(" "),s("p",[t._v("撤销操作")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status 先看一下add 中的文件 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD 如果后面什么都不跟的话 就是上一次add 里面的全部撤销了 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD XXX/XXX/XXX.java 就是对某个文件进行撤销了\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);