FROM texlive/texlive as builder

RUN apt-get install perl \
node \
pandoc

# get font files
RUN fmtutil-sys --all

RUN tlmgr install \
    adjustbox \
    babel-german \
    background \
    bidi \
    collectbox \
    csquotes \
    everypage \
    filehook \
    footmisc \
    footnotebackref \
    framed \
    fvextra \
    letltxmacro \
    ly1 \
    mdframed \
    mweights \
    needspace \
    pagecolor \
    sourcecodepro \
    sourcesanspro \
    titling \
    ucharcat \
    ulem \
    unicode-math \
    upquote \
    xecjk \
    xurl \
    zref \
    newunicodechar

COPY ./website /app/website
WORKDIR /app/website
RUN npm install --unsafe-perm=true

COPY ./docs /app/docs
COPY ./parse /app/parse

#localhost
FROM builder AS web
WORKDIR /app/website
EXPOSE 3000 35729
CMD ["npm", "run", "start"]

# PDF build
FROM builder AS pdf
WORKDIR /app/parse
CMD ["node","pdf.js"]

# app build
FROM builder AS app
WORKDIR /app/website
CMD ["npm", "run", "app-build"]
