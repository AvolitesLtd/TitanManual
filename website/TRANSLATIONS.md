The translations process is fairly simple. It works by basically creating a copy of the docs in your local language.

If you have a basic understanding of the command line and git then you can follow the advanced steps below to perform translations.

Otherwise, if you are an Avolites Distributor and need to perform translations, you can follow the basic steps.

# Before you start

It is important that you don't edit the ids or names of the files.

# Basic User steps

1. Contact Avolites Support support@avolites.com and request your language to be added.
2. The support agent will let you know what branch to work on your translations in for example `feature/german`
3. Create a fork of the repository
4. On github.com navigate to
`https://github.com/USER/TitanManual/tree/BRANCH/website/translated_docs/LANGUAGE/VERSION/`
Replacing USER, BRANCH, LANGUAGE and VERSION as required.
For example: `https://github.com/AvolitesLtd/TitanManual/tree/feature/translations/website/translated_docs/de/version-13.0`

5. Translate the files using the edit button.
6. Translate the file at `i18n/de.json`.
7. Create a pull request using the button at the top of the page.
7. Email support@avolites.com to let them know you are finished.


# Advanced User Steps

Pre Requisites
-------------

1. Node.js installed
2. Basic understanding of git
3. A github account


Instructions
------------

1. Contact Avolites Support support@avolites.com and request your language to be added.
2. The support agent will let you know what branch to work on your translations in for example `feature/german`
3. Create a fork of the repository
4. Clone your fork
5. Navigate to the `website` directory and run `npm install`
6. Execute `npm run start` to start a development environment
7. Navigate to `website/translated_docs/de/version-13.0` and perform the required translations. Replacing for the relevant language and version
8. Perform the additional translations in the `i18n/de.json` file. Again using the correct language file.
9. Submit your changes back to the repository
10. Submit a pull request to the Avolites Repoisotry
