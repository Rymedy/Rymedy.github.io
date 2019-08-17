FROM nginx:alpine
RUN apk --update add bash nano

ADD nginx.conf /etc/nginx/

ADD website /usr/share/nginx/html/
ADD website /var/www/html/