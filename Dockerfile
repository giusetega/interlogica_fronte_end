FROM node:18-alpine

WORKDIR /react-docker-interlogica/

COPY public/ /react-docker-interlogica/public
# COPY public/img /react-docker-interlogica/public/img
# COPY public/img/cannoli_siciliani.jpg /react-docker-interlogica/public/img/cannoli_siciliani.jpg
# COPY public/img/frolle.jpg /react-docker-interlogica/public/img/frolle.jpg
COPY src/ /react-docker-interlogica/src
COPY src/ /react-docker-interlogica/src
COPY package.json /react-docker-interlogica/

# VOLUME ["/code_fe"]
# VOLUME /react-docker-interlogica/public/img

RUN npm install
CMD ["npm", "start"]

#Commands:
#  bake        Build from a file
#  build       Start a build
#  create      Create a new builder instance
#  inspect     Inspect current builder instance
#  ls          List builder instances
#  rm          Remove a builder instance
#  stop        Stop builder instance
#  use         Set the current builder instance
#  version     Show buildx version information#docker buildx build .


# docker buildx build . -t interlogica-fe:v1.0.0
# docker run -d -p 3000:3000 -h localhost- -v host-path:container-path interlogica-fe:v1.0.0
# docker run -d -p 3000:3000 -h localhost -v prova_volume:/tmp interlogica-fe:v1.0.2

# docker run -d -p 3000:3000 -v /app/node_modules -v $(pwd):/app --name dockerized-react-app react-app-image:1

# COMMANDI DA ESEGUIRE
# VOLUME
# docker volume create interlogica_volume

# BACKEND
# git checkout sul BE
# docker buildx build . -t interlogica:v1.0.0
# docker run -d -p 8080:8080 -h localhost -v interlogica_volume:/opt/app/static/tmp --name dockerized-backend interlogica:v1.0.0

# FRONTEND
# git checkout sul FE
# docker buildx build . -t interlogica-fe:v1.0.0
# docker run -d -p 3000:3000 -h localhost -v /app/node_modules -v interlogica_volume:/react-docker-interlogica/public/img --name dockerized-react-app interlogica-fe:v1.0.0
