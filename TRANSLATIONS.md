The translations process is fairly simple. It works by basically creating a copy of the docs in the local language.

If you have a basic understanding of the command line and git then you can follow the advanced steps below to perform translations.

Otherwise, if you are an Avolites Distributor and need to perform translations, you can follow the basic steps.

# Before you start

It is important that you don't rename the files or edit the id in the header. eg.

```
id: quick-start
```

This is how the pages are linked up, so you need to translate the title and sidebar label, but not the ID.

# Basic User steps

Prerequisites
------------
1. A github account

Instructions
------------

1. Contact Avolites Support support@avolites.com and request your language to be added.
2. The support agent will let you know what branch to work on your translations in for example `feature/german`
3. Create a fork of the repository
4. On github.com navigate to
`https://github.com/USER/TitanManual/tree/BRANCH/website/i18n/LANGUAGE/docusaurus-plugin-content-docs/VERSION/`
Replacing USER, BRANCH, LANGUAGE and VERSION as required.
For example: https://github.com/AvolitesLtd/TitanManual/tree/master/website/i18n/de/docusaurus-plugin-content-docs/version-14.0

5. Translate the files using the edit button.

![image](https://user-images.githubusercontent.com/2736036/130786840-889ec0d4-4e3a-4419-8fcc-9b6230de0b21.png)

7. Translate the files at `website/i18n/LANGUAGE/docusaurus-theme-classic/*.json`.
8. Create a pull request using the button at the top of the page.
9. Email support@avolites.com to let them know you are finished.


# Advanced User Steps

Prerequisites
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
7. Navigate to `website/i18n/LANGUAGE` and perform the required translations. Replacing for the relevant language.
8. Submit your changes back to the repository
9. Submit a pull request to the Avolites Repoisotry
