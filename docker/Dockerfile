FROM node:22.11.0-alpine as build

USER root

WORKDIR /app

COPY . .

COPY ./tsconfig.prod.json ./tsconfig.base.json

RUN chmod -R 777 /app

RUN npm install \
    && npm run build \
    && npm prune --production

RUN find packages -type d -name 'src' -exec rm -rf \{\} +

RUN find packages -type f -name 'tsconfig*' -exec rm -rf \{\} +


FROM node:22.11.0-alpine as deploy

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/packages ./packages

COPY --from=build /app/package.json ./

EXPOSE 3000

CMD ["npm", "start"]
