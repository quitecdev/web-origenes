FROM ubuntu:12.04

RUN apt-get update
RUN apt-get install -y ngin

VOLUME /usr/share/nginx/www/

ADD dist/web-origenes/*  /usr/share/nginx/www

ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]

EXPOSE 80
