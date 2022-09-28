FROM nginx:latest
WORKDIR /usr/src/app
COPY host.crt /usr/src/app
COPY host.key /usr/src/app
COPY nginx.local.conf /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 443