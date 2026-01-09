# =========================
# 1️⃣ Étape BUILD
# =========================
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# =========================
# 2️⃣ Étape PRODUCTION
# =========================
FROM node:18-alpine

WORKDIR /app

# On ne garde que le build final
COPY --from=builder /app/dist ./dist

# Installation de vite uniquement pour le preview
RUN npm install -g vite

EXPOSE 5173

CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "5173"]
