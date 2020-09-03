The translations process is fairly simple. You it works by basically creating a copy of the docs in your local language.

If you have a basic understanding of the command line and git then you can follow the steps below to perform translations.

Otherwise, if you are an Avolites Distributor and need to perform translations, you can contact support@avolites.com to be provided with a folder to translate.


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
