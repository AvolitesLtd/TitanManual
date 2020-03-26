#!/bin/bash

# $1 - version number, e.g. 14.0

DATE=$(date "+%d %B %Y")
ISODATE=$(date "+%F %H-%M-%S")
VERSION="Titan"
if [ ! -z "$1" ]
then
    VERSION="Titan V${1}"
fi

pandoc "input.md" -o "$ISODATE $VERSION Manual $DATE.pdf" \
    --template "templates/eisvogel_avo.latex"\
    --highlight-style kate \
    --metadata-file header.yaml --toc \
    -M date="$DATE"\
    -M footer-center="$DATE" \
    -M footer-left="$VERSION Manual" \
    -M subtitle="$VERSION"