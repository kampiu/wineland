FROM node:14.3.0-alpine3.11 as builder
WORKDIR /wineland
ADD package.json /package.json
ADD package-lock.json /package-lock.json
RUN npm install
COPY . .
RUN npm run build

#FROM nginx:latest
#COPY --from=builder /login-web/build /usr/share/nginx/html
#RUN chmod 655 /usr/share/nginx/html
#EXPOSE 80
#CMD "nginx" "-g" "daemon off;"
