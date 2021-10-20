FROM node:14
RUN npm install express
RUN npm install aws-sdk

COPY . .
CMD [ "node", "index.js" ]

EXPOSE 80


