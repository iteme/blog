#!/bin/sh

HTML_DIR=/root/caddy/site

pnpm build
zip -r dist.zip ./dist/*

scp dist.zip root@rite.me:$HTML_DIR/dist.zip
ssh root@rite.me "cd $HTML_DIR; unzip $HTML_DIR/dist.zip; rm -rf riteme; mv dist riteme; rm -f dist.zip"

rm -rf ./dist dist.zip