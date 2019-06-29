#!/usr/bin/bash

cd webservice
npm install

cd ../website
npm install

cd ./
docker-compose up