# ---- build stage ----
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY public ./public
COPY src ./src
# produce la cartella /app/build
RUN npm run build


# ---- runtime stage ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
# CRA output: build/
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM node:18-alpine

# WORKDIR /react-docker-interlogica

# COPY package.json package-lock.json* ./

# RUN npm install

# COPY public ./public
# COPY src ./src

# EXPOSE 3000

# CMD ["npm", "start"]


# docker buildx build . -t interlogica-fe:v1.0.0
# docker run -d -p 3000:3000 -h localhost -v interlogica_volume:/react-docker-interlogica/public/img --name dockerized-react-app interlogica-fe:v1.0.0
