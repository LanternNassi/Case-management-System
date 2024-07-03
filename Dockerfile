# Stage 1: Build the Vite app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_USER_ID

RUN echo "VITE_SERVICE_ID=${VITE_SERVICE_ID}" >> .env
RUN echo "VITE_TEMPLATE_ID=${VITE_TEMPLATE_ID}" >> .env
RUN echo "VITE_USER_ID=${VITE_USER_ID}" >> .env


# Build the Vite app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80