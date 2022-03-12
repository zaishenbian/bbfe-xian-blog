---
title: Remote-SSH免密配置
description: Remote-SSH免密配置
tags:
  - web_development
---

## Remote-SSH 免密配置

1. 下载 Remote-SSH
2. 进入 ~/.ssh 目录下，本地生成公钥私钥：ssh-keygen -f name -C "comment"，这样 ~/.ssh 目录下就会有 name h 和 name.pub 两个文件
3. 将本地的 name.pub 上传到服务器的 ~/.ssh 目录下：scp 本地文件地址 远程用户名@IP 地址:服务器存放地址
4. 将传到服务器上的 name.pub 文件写入 authorized_keys 中：cat name.pub >> authorized_keys
