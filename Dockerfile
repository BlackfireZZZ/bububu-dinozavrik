# Stage 1: Сборка фронтенда
FROM node:14-alpine as build
LABEL authors="Степан"

COPY frontend /app
WORKDIR /app
RUN npm i
RUN npm run build

FROM nginx:latest as prod

# Копируем статические файлы фронтенда
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порты
EXPOSE 80
EXPOSE 443

# Команда запуска Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
