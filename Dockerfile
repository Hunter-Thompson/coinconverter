FROM 400541374133.dkr.ecr.eu-central-1.amazonaws.com/coin:latest

WORKDIR /app

RUN apk add git
RUN apk add bash

RUN npm install serve -g


COPY . .

WORKDIR /app/coin

RUN npm run build

CMD ["serve", "-s", "build"]
