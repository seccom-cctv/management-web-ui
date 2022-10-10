# --- reactjs ---
FROM node:16.14.2

# set working directory
WORKDIR /frontend

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
 
EXPOSE 3000

CMD [ "yarn", "start" ]