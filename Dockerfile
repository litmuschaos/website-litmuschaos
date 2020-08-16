# build environment
FROM node:10.19.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/package.json
RUN npm install -g gatsby-cli --quite
RUN npm install --quite
COPY . /app
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]