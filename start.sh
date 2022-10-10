sudo docker build -t management-web-ui .
sudo docker run -d -p 3001:3000 --name management-web-ui management-web-ui