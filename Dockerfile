FROM node:14 AS webpacker
WORKDIR /src
COPY package.json ./
RUN npm install
COPY . ./
RUN ./node_modules/.bin/webpack


FROM node:14
COPY --from=webpacker /src/dist dist
COPY static static
RUN npm install -g http-server

ENTRYPOINT ["http-server", "-c-1", "--proxy", "http://localhost:8080?"]
EXPOSE 8080