# 使用node:slim作为基础镜像
# FORM node:slim

# 安装
# RUN apt-get update\&& apt-get install -y nginx

# 指定工作目录
# WORKDIR /app

#当前目录下所有文件拷贝至app目录下
# COPY ./app/

# 声明运行时容器提供服务端口
# EXPOSE 80

# 安装依赖
# RUN npm i \
#   && npm run build \
#   && cp -r dist/* /var/www/html\
#   && rm -rf /app

# 启动Nginx
# CMD ["nginx",'-g',"daemon off;"]
