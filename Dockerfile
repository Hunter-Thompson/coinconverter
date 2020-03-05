FROM node:alpine

WORKDIR /app


RUN npm install express

COPY index.js .


CMD ["node", "index.js"]