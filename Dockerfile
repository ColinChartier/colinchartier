FROM node:14 AS webpacker
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN ./node_modules/.bin/webpack


FROM node:14
COPY download.sh ./
COPY static static
RUN bash ./download.sh
COPY --from=webpacker /src/dist dist
COPY index.html ./
RUN npm install -g http-server

ENTRYPOINT ["http-server", "-c-1", "--proxy", "http://localhost:8080?"]
EXPOSE 8080