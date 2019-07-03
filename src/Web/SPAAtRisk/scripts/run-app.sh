#!/bin/bash

# Go to the project root directory
cd $(dirname $0)/..

buildDir="build"

#install package
npm install ../dls-angular/build/dist/slb-angular-dls-components-3.0.1.tgz

#build app
npm run build

#start app
npm run start