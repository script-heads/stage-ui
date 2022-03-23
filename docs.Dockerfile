FROM node:16-alpine as build
WORKDIR /source
COPY . .
RUN yarn && \
    yarn docs:build

# Create server for static
FROM nginx:alpine
COPY --from=build /source/build/docs /usr/share/nginx/html/
COPY ./drone/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80