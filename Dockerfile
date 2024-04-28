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


# COMANDI DA ESEGUIRE
# VOLUME
# docker volume create interlogica_volume

# BACKEND
# git checkout sul BE
# docker buildx build . -t interlogica:v1.0.0
# docker tag adabae0c08c7 giusetega/interlogica:v1.1.0
# docker push giusetega/interlogica:v1.1.0
# docker run -d -p 8080:8080 -h localhost -v interlogica_volume:/opt/app/static/tmp --name dockerized-backend interlogica:v1.0.0

# FRONTEND
# git checkout sul FE
# docker buildx build . -t interlogica-fe:v1.0.0
# docker tag adabae0c08c7 giusetega/interlogica_fe:v1.1.0
# docker push giusetega/interlogica_fe:v1.1.0
# docker run -d -p 3000:3000 -h localhost -v /app/node_modules -v interlogica_volume:/react-docker-interlogica/public/img --name dockerized-react-app interlogica-fe:v1.0.0

#AWS
# sudo docker run -d -p 8080:8080 -h localhost -v interlogica_volume:/opt/app/static/tmp giusetega/interlogica:v1.0.0
# sudo docker run -d -p 3000:3000 -h localhost -v /app/node_modules -v interlogica_volume:/react-docker-interlogica/public/img giusetega/interlogica_fe:v1.0.0

# COMMAND FOR LINUX EC2 INSTANCE
#sudo yum update
#sudo yum install -y docker
#sudo systemctl start docker
#sudo service docker start
#Add security group -> all traffic
