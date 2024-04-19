# Getting Started

For running the scripts in this folder, like the one to [produce the PDF](#pdf), you can either run them
in a [containerised environemt](#running-commands-with-docker) or for experienced users they 
can be [run locally](#running-commands-locally).

## Running Commands with Docker

All of these commands can be run within a docker container which means you will not have to install the 
[dependencies](#dependencies) on your computer. 

First install Docker, using either:
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Docker CLI](https://docs.docker.com/install/)

The first time you run any `docker-compose` command it  will take time to build the environment but then
after that it will run much faster.

## Running Commands Locally

For all of the following commands they need to be run from the terminal/command line in the `parse` folder, e.g.:

````shell
cd parse
````

> When using [Docker](#running-commands-with-docker), the `pdf` service in the root `docker-compose` has 
this as the entry point. `docker-compose` commands must be run from the root, e.g. `~/Documents/AvoDocs`

# PDF

To produce a PDF of the all version of the manual locally run:

````shell
node pdf.js
````

> Requires [node.js](#nodejs), [Pandoc](#pandoc) and [its dependencies](#pandoc-pdf-dependencies)

Or with Docker:
````shell
docker-compose up pdf
````

> All PDFs are created in `/parse/output` - these files ignored by Git

## PDF Options

There are various options for this command which are listed in the help:

````shell
node pdf.js --help
````

For example, to just export the Synergy section of version 12, locally run:

````shell
node pdf.js -v 12.0 -s synergy
````

## PDF with Docker

To produce all the versions with Docker:
````shell
docker-compose run pdf
````

For a one-off:
````shell
docker-compose run pdf bash -c 'node ../parse/pdf.js -v next -s synergy'
````

Or in an interactive shell:
````shell
docker-compose up -d pdf
node pdf.js -v 12.0 -s synergy
````

Then to close the shell:
````
exit
docker-compose down
````

## Troubleshooting

- Producing the full manual can take a couple of minutes depending on your system, *please be patient...*

- The script will bring up various node warnings, including broken links/images, if you would prefer not to see these use:

    ````shell
    node --no-warnings pdf.js
    ````

- Errors that occur during the Pandoc conversion are listed in the console between `Producing PDF` and `PDF produced in XXs`, these are generally self-explanatory, but do quote them when [creating an issue](https://github.com/Farrser/AvoDocs/issues)

- If the images are not showing in the outputted PDF, try updating the LaTex packages (as [descibed above](#pandoc-pdf-dependencies))

- Unicode characters can cause issues and throw errors like `There is no ⇑ (U+21D1) in font...` - where possible avoid these characters but special rules can be added - [make an issue](https://github.com/Farrser/AvoDocs/issues) to request these

- If there are errors when using Docker, your image may be out of date and can be rebuilt using :
    ````shell
    docker-compose up --build pdf
    ````

## Exit Codes

Code | Meaning
---- | -------
2    | **No sections were found, this could be because of the section specified or there weren't any sections found in the sidebar**<br>Try omitting the section parameter of the command
3    | **Failed to write formatted MarkDown file: `...`**<br>The script couldn't create the intermeadiate MarkDown file, this may be because `parse/output` folder doesn't exist

# Search Index

To produce the `index.json` used in the search bar:

````shell
node search.js
````

> Requires [node.js](#nodejs)

# DOCX Conversion

To convert the original manual from DOCX to MarkDown:

````shell
pandoc export.docx -t markdown --extract-media "media" -o export.md

gcsplit --prefix='manual' --suffix-format='%03d.md'  export.md /Ref_Heading[1-2]/ "{*}"
````

> Requires [Pandoc](#pandoc)

# Dependencies

## Node.js

Node is used throughout this project for all scripting, [download & install for your OS](https://nodejs.org/en/download/) or [install via a package manager](https://nodejs.org/en/download/package-manager/), e.g.:

````shell
brew install node
````

Then install the dependencies of this project by switching to the `website` directory and installing:

````shell
cd website
npm install
````

## Pandoc

For converting between formats we use Pandoc, to install:

````shell
brew install pandoc
````

Or follow [their OS dependent instructions](https://pandoc.org/installing.html).

### Pandoc PDF Dependencies

Pandoc uses LaTeX to typeset the PDFs, so to produce PDF you will need a LaTeX compiler, the [Pandoc installation instructions](https://pandoc.org/installing.html) cover this for this your OS. For example on Mac to install [BasicTex](http://www.tug.org/mactex/morepackages.html):

````shell
brew cask install basictex
````

Then we use a lightly modified version of the [Eisvogel template](https://github.com/Wandmalfarbe/pandoc-latex-template) which requires [various LaTeX packages](https://github.com/Wandmalfarbe/pandoc-latex-template#required-latex-packages), e.g. on a Mac run:

````shell
sudo tlmgr install adjustbox babel-german background bidi collectbox csquotes everypage filehook footmisc footnotebackref framed fvextra letltxmacro ly1 mdframed mweights needspace pagecolor sourcecodepro sourcesanspro titling ucharcat ulem unicode-math upquote xecjk xurl zref
````

To remap unicode characters we use newunicodechar.sty, on a Mac run:
````shell
tlmgr install newunicodechar
````


It is also worth updating existing packages:
````shell
sudo tlmgr update --all
````

*After installing open a new terminal window*