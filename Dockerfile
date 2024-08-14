# Этап 1: Сборка фронтенд-приложения
FROM node:14-alpine as build
LABEL authors="Степан"

# Копируем исходный код фронтенда
COPY ../frontend /app
WORKDIR /app

# Устанавливаем зависимости и собираем проект
RUN npm i
RUN npm run build

# Этап 2: Настройка Nginx
FROM nginx:latest as prod

# Копируем SSL сертификаты и ключи в контейнер
COPY /etc/letsencrypt/live/bububu-dinozavrik.ru/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY /etc/letsencrypt/live/bububu-dinozavrik.ru/privkey.pem /etc/nginx/ssl/privkey.pem

# Копируем собранный фронтенд в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем кастомный конфиг Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порты 80 и 443
EXPOSE 80 443

# Запускаем Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
