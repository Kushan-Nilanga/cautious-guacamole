#!/bin/bash
yum update -y
yum install curl
yum install git
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

git clone https://github.com/Kushan-Nilanga/cautious-guacamole-load-balance.git
cd cautious-guacamole-load-balance
npm install
npm run server