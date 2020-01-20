#! /bin/bash
PATH=$PATH:$(npm bin)

set -x

# Prodcution build
ng build --prod

#serve
cd dist/angularShop
http-server