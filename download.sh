#!/usr/bin/env bash

set -eu -o pipefail

cd static

rm -rf feather-font-*
curl -fSsL -o /tmp/feather-font.zip https://github.com/AT-UI/feather-font/archive/master.zip
unzip /tmp/feather-font.zip && rm /tmp/feather-font.zip
rm -rf feather-font
mkdir feather-font
mv feather-font-*/src/{css,fonts} feather-font/
rm -rf feather-font-*

curl -fSsL -O https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js
curl -fSsL -O https://unpkg.com/flickity@2/dist/flickity.min.css
curl -fSsL -O https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css