# 1. Сборка (Build stage)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# 2. Запуск (Runner stage)
FROM node:20-alpine AS runner
WORKDIR /app
# Устанавливаем переменную окружения, чтобы Next понимал, что он в докере
ENV NODE_ENV=production
# Копируем только то, что реально нужно для запуска
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Наш порт
EXPOSE 3000
# Запускаем через встроенный сервер
CMD ["node", "server.js"]