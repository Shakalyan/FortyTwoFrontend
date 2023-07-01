FROM node:16-alpine 

WORKDIR /app

COPY . .

RUN cd frontend \
    && npm ci \
    && npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "frontend/build" ]