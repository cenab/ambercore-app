FROM node:20-alpine

WORKDIR /ambercore-app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
# ... rest of Dockerfile content 