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
tlmgr install adjustbox babel-german background bidi collectbox csquotes everypage filehook footmisc footnotebackref framed fvextra letltxmacro ly1 mdframed mweights needspace pagecolor sourcecodepro sourcesanspro titling ucharcat ulem unicode-math upquote xecjk xurl zref
````

It is also worth updating existing packages:
````
sudo tlmgr update --all
````

*After installing open a new terminal window*

## Running Commands

For all of the following commands they need to be run from the terminal/command line in the `parse` folder, e.g.:

````shell
cd parse
````

# PDF

To produce a PDF version of the manual run:

````shell
node pdf.js
````

> Requires [node.js](#nodejs), [Pandoc](#pandoc) and [its dependencies](#pandoc-pdf-dependencies)

There are various options for this command which are listed in the help:

````shell
node pdf.js --help
````

For example, to just export the Synergy section of version 12, run:

````shell
node pdf.js -v 12.0 -s synergy
````

### Troubleshooting

- Producing the full manual can take a couple of minutes depending on your system, *please be patient...*

- The script will bring up various node warnings, including broken links/images, if you would prefer not to see these use:

    ````shell
    node --no-warnings pdf.js
    ````

- Errors that occur during the Pandoc conversion are listed in the console between `Producing PDF` and `PDF produced in XXs`, these are generally self-explanatory, but do quote them when [creating an issue](https://github.com/Farrser/AvoDocs/issues)

- If the images are not showing in the outputted PDF, try updating the LaTex packages (as [descibed above](#pandoc-pdf-dependencies))

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