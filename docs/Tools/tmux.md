---
sidebar: auto
title: Tmux操作指南
---
## 什么是Tmux

一种将会话Session与窗口Window解绑的工具

- 允许在单个窗口中，访问多个对话
- 可以让新窗口接入已经存在的会话
- 允许每个会话有多个连接窗口，可多人实时共享会话
- 支持窗口水平和垂直拆分


## 基本用法

### 安装

```shell
# Ubuntu or Debian
sudo apt-get install tmux

# Centos or Fedora
sudo yum install tmux

# Mac
brew install tmux
```

### 启动

键入`tmux`命令，就进入了 Tmux 窗口

```
tmux
```

命令会启动 Tmux 窗口，底部有一个状态栏。状态栏的左侧是窗口信息（编号和名称），右侧是系统信息

### 退出

按下`Ctrl+d`或者显式输入`exit`命令，就可以退出 Tmux 窗口。

```
exit
```



### 会话管理

```shell
# 新建会话
tmux new -s <session-name>

# 查看会话
tmux ls
tmux list-session

# 分离会话
tmux detach

# 接入会话
tmux attach -t 0								# 按会话编号
tmux attach -t <session-name>		# 按会话名称

# 杀死会话
tmux kill-session -t 0								# 按会话编号 
tmux kill-session -t <session-name>		# 按会话名称

# 切换会话
tmux switch -t 0								# 按会话编号
tmux switch -t <session-name>		# 按会话名称

# 重命名会话
tmux rename-session -t 0 <new-name>								# 按会话编号
tmux rename-session -t <session-name> <new-name>	# 按会话名称

# 快捷键
Ctrl+b d：分离当前会话。
Ctrl+b s：列出所有会话。
Ctrl+b $：重命名当前会话。
```



### 窗口管理

Tmux 允许新建多个窗口。

```shell
# 新建窗口
tmux new-window
tmux new-window -n <window-name>	#	指定窗口名称

# 切换窗口
tmux select-window -t <window-number>	# 切换到指定编号的窗口
tmux select-window -t <window-name>		# 切换到指定名称的窗口

# 重命名窗口
tmux rename-window <new-name>

# 窗口快捷键
Ctrl+b c：创建一个新窗口，状态栏会显示多个窗口的信息。
Ctrl+b p：切换到上一个窗口（按照状态栏上的顺序）。
Ctrl+b n：切换到下一个窗口（按照状态栏上的顺序）。
Ctrl+b <number>：切换到指定编号的窗口，其中的<number>是状态栏上的窗口编号。
Ctrl+b w：从列表中选择窗口。
Ctrl+b ,：窗口重命名。
```



### 窗格操作

Tmux 可以将窗口分成多个窗格（pane），每个窗格运行不同的命令。

```sh
# 划分窗格
tmux split-window			# 划分为上下两个窗格
tmux split-window -h 	# 划分为左右两个窗格

# 移动光标
tmux select-pane -U		# 光标切换到上方窗格
tmux select-pane -D		# 光标切换到下方窗格
tmux select-pane -L		# 光标切换到左边窗格
tmux select-pane -R		# 光标切换到右边窗格

# 交换窗格位置
$ tmux swap-pane -U		# 当前窗格上移
$ tmux swap-pane -D		# 当前窗格下移

# 窗格快捷键
Ctrl+b %：划分左右两个窗格。
Ctrl+b "  划分上下两个窗格。
Ctrl+b <arrow key>：光标切换到其他窗格。<arrow key>是指向要切换到的窗格的方向键，比如切换到下方窗格，就按方向键↓。
Ctrl+b ;：光标切换到上一个窗格。
Ctrl+b o：光标切换到下一个窗格。
Ctrl+b {：当前窗格与上一个窗格交换位置。
Ctrl+b }：当前窗格与下一个窗格交换位置。
Ctrl+b Ctrl+o：所有窗格向前移动一个位置，第一个窗格变成最后一个窗格。
Ctrl+b Alt+o：所有窗格向后移动一个位置，最后一个窗格变成第一个窗格。
Ctrl+b x：关闭当前窗格。
Ctrl+b !：将当前窗格拆分为一个独立窗口。
Ctrl+b z：当前窗格全屏显示，再使用一次会变回原来大小。
Ctrl+b Ctrl+<arrow key>：按箭头方向调整窗格大小。
Ctrl+b q：显示窗格编号。
```