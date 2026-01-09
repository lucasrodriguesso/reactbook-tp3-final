FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# 🔑 Important : pas de devDependencies
RUN npm ci --omit=dev

COPY . .

# 🔑 Build de l'application
RUN npm run build

EXPOSE 5173

# 🔑 Lancement du serveur de preview (prod)
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]
