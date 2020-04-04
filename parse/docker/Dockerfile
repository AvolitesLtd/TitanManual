FROM homebrew/brew

RUN brew install \
    node \
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

WORKDIR /app/pdf
COPY input.md .

# needs changing
COPY docs docs
COPY parse parse
COPY website website

WORKDIR /app/pdf/website
RUN npm install

CMD npm run pdf