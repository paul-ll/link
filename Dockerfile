FROM nginx
LABEL name="link-container"
LABEL version="1.0"
COPY ./dist /www/wwwroot/nginx/html
COPY ./link.conf  /etc/nginx/conf.d
EXPOSE 233