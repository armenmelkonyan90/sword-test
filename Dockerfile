FROM node:16-alpine
#FROM node:16
RUN npm -v
RUN node -v
WORKDIR /app/
COPY package*.json /app/
COPY . /app/
#RUN yarn install
RUN npm install
#RUN npm run migration:generate staging25_08
#RUN yarn run build
RUN npm run build
#RUN npm run migration:up

CMD ["node", "dist/src/main.js"]
