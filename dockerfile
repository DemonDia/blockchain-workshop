FROM node:15 
WORKDIR /ROOTFOLDER
COPY package.json . /ROOTFOLDER/
RUN npm install 
COPY . /ROOTFOLDER/
EXPOSE 3005
CMD ["node", "server.js"]
