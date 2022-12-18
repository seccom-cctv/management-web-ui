#!/bin/sh
sudo docker build -t management-web-ui .
sudo docker run \
-p 3001:3000 \
-v $(pwd)/src:/home/management-web-ui/src \
--name management-web-ui management-web-ui