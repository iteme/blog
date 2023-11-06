#!/bin/sh

HTML_DIR=/app/caddy/site/

pnpm build
zip -r dist.zip ./dist/*

scp dist.zip root@$1:$HTML_DIR/dist.zip
ssh root@$1 "cd $HTML_DIR; unzip $HTML_DIR/dist.zip; rm -rf riteme; mv dist riteme; rm -f dist.zip; docker restart caddy"

rm -rf ./dist dist.zip
