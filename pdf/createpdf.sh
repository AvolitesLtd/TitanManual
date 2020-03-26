#!/bin/bash

# $1 - version number, e.g. 14.0

DATE=$(date "+%d %B %Y")
ISODATE=$(date "+%F %H-%M-%S")
VERSION="Titan"
if [ ! -z "$1" ]
then
    VERSION="Titan V${1}"
fi

echo "Syncing docs"
rsync -avzr --delete ../docs/ docs

echo "Syncing images"
rsync -avzr --delete ../website/static/docs/images docs/

echo "Creating PDF"

    --highlight-style kate \
    --metadata-file header.yaml --toc \
    -M date="$DATE"\
    -M footer-center="$DATE" \
    -M footer-left="$VERSION Manual" \
    -M subtitle="$VERSION"