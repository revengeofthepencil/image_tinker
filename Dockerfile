# Build client
FROM node:20 AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Build server
FROM node:20 AS server-build
WORKDIR /app
COPY package*.json ./
COPY server/package*.json ./server/
RUN npm install
COPY server/ ./server/
COPY --from=client-build /app/client/dist ./client/dist

# Run app
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server/server.js"]