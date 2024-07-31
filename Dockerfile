FROM node:14-alpine as build
LABEL authors="Степан"

COPY frontend /app
WORKDIR /app
RUN npm i
RUN npm run build

FROM nginx:latest as prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]