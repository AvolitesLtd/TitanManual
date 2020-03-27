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
# rsync -aPzr --delete ../docs/ tempdocs

echo "Syncing images"
# rsync -aPzr --delete ../website/static/docs/images docs/

echo "Replacing images"
# change    ![alt](/path/to/img)
# to        ![alt](path/to/img)
perl -i -0pe \
's/!\[([^\]]*)\]\(\/([^\)]*\))/\[\1](\2)/mg' \
tempdocs/*/*.md

# Make parts
cd tempdocs
perl -i -0pe \
's/^---(?:[\n]|.)*title: *([\w ]*)(?:[\n]|.)*---/# \{#$ARGV\}\n\\part\{\1\}/mg' \
*.md
cd ../

echo "Creating PDF"
pandoc --template "templates/eisvogel_avo.latex" \
    -o "$ISODATE $VERSION Manual $DATE.pdf" \
    --highlight-style kate \
    --metadata-file header.yaml \
    --toc \
    -fmarkdown-implicit_figures \
    --self-contained \
    -M date="$DATE" \
    -M footer-center="$DATE" \
    -M footer-left="$VERSION Manual" \
    -M subtitle="$VERSION" \
    $(cat "index.txt")>&1
#    -f gfm \