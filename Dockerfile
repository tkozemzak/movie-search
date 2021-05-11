#Pull from base image
FROM node:lts-alpine

#Use app as working dir
WORKDIR /app

#Copy files from current dir to app
COPY . /app

#Install Dependencies
RUN apt update && apt install -y --no-install-recommends apt-utils
RUN npm install

#Build production app
RUN npm run build

#Listen on specified port
EXPOSE 3000

#Set node server
ENTRYPOINT npm run start