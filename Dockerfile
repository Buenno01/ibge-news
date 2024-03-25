FROM node AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Path: Dockerfile

FROM nginx:stable-alpine3.17 AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80