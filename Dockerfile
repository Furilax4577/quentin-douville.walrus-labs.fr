# ---------- STAGE 1 : build Angular SSR ----------
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # ===== Déclarer les arguments passés par le docker build =====
    ARG BASE_URL
    
    # ===== Les exposer comme variables d'environnement pour npm =====
    ENV BASE_URL=$BASE_URL
    
    # Copier package.json et installer dépendances
    COPY package*.json ./
    RUN npm install
    
    # Copier tout le code
    COPY . .
    
    # Build Angular SSR (browser + server)
    RUN npm run build
    