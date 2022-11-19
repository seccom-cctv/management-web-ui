#!/usr/bin/env bash

sudo docker rm -f $(docker ps -a -q)
sudo docker volume rm $(docker volume ls -q)