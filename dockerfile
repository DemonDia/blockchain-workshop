FROM node:15 
WORKDIR /MintingMS
COPY package.json . /MintingMS/
RUN npm install 
COPY . /MintingMS/
EXPOSE 3005
CMD ["node", "babyTest.js"]
