FROM homebrew/brew as builder

RUN brew install \
    node \
    yarn \
    pandoc \
    texlive


# LaTeX packages
RUN tlmgr update --self

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
RUN yarn install

COPY ./docs /app/docs
COPY ./parse /app/parse

#localhost
FROM builder AS web
WORKDIR /app/website
EXPOSE 3000 35729
CMD ["yarn", "start"]

# PDF Build
FROM builder AS pdf
WORKDIR /app/parse
CMD ["node","pdf.js"]