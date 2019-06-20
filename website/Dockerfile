FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install

COPY . .