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
