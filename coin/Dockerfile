FROM 400541374133.dkr.ecr.eu-central-1.amazonaws.com/coin:latest

WORKDIR /app

RUN apk add git
RUN apk add bash

RUN npm install serve -g

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]
