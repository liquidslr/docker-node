# Use Node from the Debian Linux project
FROM node:10


# Add labels for metadata
LABEL maintainer="Gaurav Kumar <https://gaurav9825.github.io/>"

# Create app directory
RUN mkdir  -p /usr/src/app
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
# If you are building your code for production
# RUN npm install --only=production


# Bundle app source
COPY . .

# Port 5000 is the port we use to run our web server, 
# and 9229 is a default port for Node.js Inspector
EXPOSE 5000 



CMD [ "npm", "start" ]