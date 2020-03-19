FROM 400541374133.dkr.ecr.eu-central-1.amazonaws.com/coin:latest

WORKDIR /app

RUN apk add git
#RUN npm install express
RUN apk add bash



COPY . .

WORKDIR /app/coin
#RUN npm run build
#RUN npm install serve -g

CMD ["serve", "-s", "build"]
