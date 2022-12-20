# --- reactjs ---
FROM node:16.14.2

# set working directory
WORKDIR /home/management-web-ui
COPY package.json .
RUN yarn install

COPY . .
 
EXPOSE 3000
ENV PUBLIC_URL https://gxdowy8at3.execute-api.eu-west-3.amazonaws.com/test/managementwebui

CMD [ "yarn", "start" ]
