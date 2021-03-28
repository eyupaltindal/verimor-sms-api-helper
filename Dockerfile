# base node image
FROM node:12-slim

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

# Copy local code to the container
COPY . .

RUN npm ci

ENV NODE_ENV production

# Start the service
CMD npm run start
