FROM nginx:alpine

# Copy custom config into container
COPY default.conf /etc/nginx/conf.d/default.conf

# Create directory for logs (optional)
RUN mkdir -p /var/log/nginx
