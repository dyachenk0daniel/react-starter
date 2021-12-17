# Build react app
FROM node:latest AS builder

# Create app directory
RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

# Installing dependencies
COPY package*.json /usr/app/client/
RUN npm install

# Copying source files
COPY . /usr/app/client/

# Building app
RUN npm run build

# Build react server
FROM nginx:1.16.0-alpine

# Copying the application to the server
COPY --from=builder /usr/app/client/build /usr/share/nginx/html

# PORT
EXPOSE 80

# Server start
CMD ["nginx", "-g", "daemon off;"]