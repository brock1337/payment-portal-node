FROM node:8.11.3

WORKDIR /var/www/app

COPY package.*json ./

RUN npm install -g pm2 && npm install

COPY . .

EXPOSE 5000

CMD npm run start-docker
