FROM nginx
LABEL name="link"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
COPY ./link.conf  /etc/nginx/conf.d
EXPOSE 233