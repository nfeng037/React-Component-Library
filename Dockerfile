# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /na_feng_ui_garden

# Copy the package.json file and package-lock.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your component library's source files
COPY . .

# Build your component library
RUN npm run rollup

# Build the static Storybook
RUN npm run build-storybook

# Install a simple http server for serving static content
RUN npm install -g http-server

# The default command to run when starting the container
CMD ["http-server", "storybook-static", "-p 8083"]
