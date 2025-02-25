# Use Node.js base image for building React app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json  ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the build files
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
