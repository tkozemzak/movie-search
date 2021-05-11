#Pull from base image
FROM node:lts-alpine

#Use app as working dir
WORKDIR /app

ARG REACT_APP_API_SECRET

ENV REACT_APP_API_SECRET=$REACT_APP_API_SECRET

#Copy files from current dir to app
COPY . /app

#Install Dependencies
RUN npm install

#Build production app
RUN npm run build

#Listen on specified port
EXPOSE 3000

#Set node server
ENTRYPOINT npm run start