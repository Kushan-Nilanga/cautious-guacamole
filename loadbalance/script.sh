#!/bin/bash
sudo yum update -y
sudo yum install -y curl
sudo yum install -y git
sudo yum install -y gcc-c++ make


curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash - 
sudo yum install -y nodejs

git clone https://github.com/Kushan-Nilanga/cautious-guacamole-load-balance.git
cd cautious-guacamole-load-balance
npm install
npm run server