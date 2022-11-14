# --- reactjs ---
FROM node:16.14.2

# set working directory
WORKDIR /home/management-web-ui
COPY package.json .
RUN yarn install

COPY . .
 
EXPOSE 3000

CMD [ "yarn", "start" ]