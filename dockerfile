# Use an official Node.js runtime as the base image
FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .


# Expose the API port (if necessary)
EXPOSE 8080

# Set the command to run your API server
# CMD ["npm", "start"]