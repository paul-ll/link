#!/bin/bash
WORK_PATH='/usr/projects/link'
cd $WORK_PATH
echo "清理代码"
git reset --hard origin/master
git clean -f
echo "拉取最新代码"
git pull origin master
echo "打包最新代码"
docker build -t link:1.0 .
echo "删除旧容器"
docker stop link-container
docker rm link-container
echo "启动新容器"
docker container run -p 233:233 -d --name link-container link:1.0
docker run --name  myphp7 -v /www/wwwroot/nginx/html  -d php:7.1.30-fpm