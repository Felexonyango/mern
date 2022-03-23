FROM node

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn  install

COPY . .

EXPOSE 5000



CMD ["node", "server.js"]