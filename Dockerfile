# FROM node:18-alpine

# WORKDIR /react-docker-interlogica/

# COPY public/ /react-docker-interlogica/public

# COPY src/ /react-docker-interlogica/src
# COPY package.json /react-docker-interlogica/

# VOLUME /react-docker-interlogica/public/img

# EXPOSE 3000

# RUN npm install
# CMD ["npm", "start"]

FROM node:18-alpine

WORKDIR /react-docker-interlogica

COPY package.json package-lock.json* ./

RUN npm install

COPY public ./public
COPY src ./src

EXPOSE 3000

CMD ["npm", "start"]

# FRONTEND
# git checkout sul FE
# docker buildx build . -t interlogica-fe:v1.0.0
# docker run -d -p 3000:3000 -h localhost -v /app/node_modules -v interlogica_volume:/react-docker-interlogica/public/img --name dockerized-react-app interlogica-fe:v1.0.0
