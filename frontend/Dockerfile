# Stage 1: Build Angular app
FROM node:16-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm install
COPY . .
RUN npm run build --prod  # produces static files in dist/

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/outbreak-monitor/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
