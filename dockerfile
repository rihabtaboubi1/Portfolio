# Étape 1 : Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

RUN npm install

# Copier tout le projet
COPY . .

# Construire le projet Next.js
RUN npm run build

# Étape 2 : Runner
FROM node:20-alpine AS runner

WORKDIR /app

# Installer uniquement les dépendances de production
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copier le build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exposer le port Next.js
EXPOSE 3000

# Commande pour lancer Next.js en production
CMD ["npm", "start"]
