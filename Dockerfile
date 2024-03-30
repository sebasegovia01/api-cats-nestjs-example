# Etapa de construcción
FROM node:lts-alpine as builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos del paquete y el bloqueo de paquetes
COPY package*.json ./

# Instalar las dependencias de Node.js (incluyendo las dependencias de desarrollo)
RUN npm install --only=development --ignore-scripts && npm cache clean --force

# Copiar todos los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa de producción
FROM node:lts-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos del paquete y el bloqueo de paquetes
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --only=production --ignore-scripts && npm cache clean --force

# Copiar los archivos de construcción y el archivo .env desde la etapa de construcción
COPY --from=builder /usr/src/app/dist ./dist

# Comando para ejecutar la aplicación
CMD ["node", "dist/main"]
