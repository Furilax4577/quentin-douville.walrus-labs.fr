# # Étape 1 : Build de l'application Angular
# FROM node:22 AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build --configuration=production

# # Étape 2 : Servir l'application avec Nginx
# FROM nginx:latest
# COPY --from=build /app/dist/angular-project/browser /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Exposer le port 8081
# EXPOSE 8081
# CMD ["nginx", "-g", "daemon off;"]


# ---------- STAGE 1 : build Angular SSR ----------
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # Copier package.json et installer dépendances
    COPY package*.json ./
    RUN npm install
    
    # Copier tout le code
    COPY . .
    
    # Build Angular SSR (browser + server)
    RUN npm run build
    
    # ---------- STAGE 2 : production image ----------
    FROM node:20-alpine AS app
    
    WORKDIR /app
    
    # Copier le dist Angular SSR depuis le builder
    COPY --from=builder /app/dist /app/dist
    COPY --from=builder /app/node_modules /app/node_modules
    COPY --from=builder /app/package.json /app/package.json
    
    # Lancer l'app SSR
    CMD ["npm", "run", "serve:ssr:angular-project"]
    