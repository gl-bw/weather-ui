FROM nginx:alpine
RUN npm install
RUN npm run build
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf