# Stage 1: Building the code
FROM node:latest as build

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8083 for the service.
EXPOSE 8083

# Set the default command for the container to nginx
CMD ["nginx", "-g", "daemon off;"]
