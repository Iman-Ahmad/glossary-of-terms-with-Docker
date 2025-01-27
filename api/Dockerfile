FROM node:20
WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD node index.js
