# Use NGINX from the Alpine Linux project
FROM nginx:alpine



# Change the working directory
WORKDIR /etc/nginx


# Remove the default welcome message by NGINX
RUN rm -f ./conf.d/default.conf


# This defines the site configuration for the local-development nginx.
COPY ./default.conf /etc/nginx/conf.d/