FROM node:8.11.4

WORKDIR /app/pdf

RUN apt-get update
RUN apt-get install -y \
    pandoc \
    texlive-latex-recommended \
    texlive-xetex

COPY input.md .

CMD pandoc /app/pdf/input.md -o /app/pdf/output.pdf