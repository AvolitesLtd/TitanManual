module.exports={
  "title": "Avolites Titan Manual",
  "tagline": "Official Manual for the Avolites Titan software",
  "url": "https://manual.avolites.com",
  "baseUrl": "/",
  "organizationName": "Avolites",
  "projectName": "AvoDocs",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    "/js/fuse.js",
    "/js/search.js",
    "/js/video.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "gaGtag": true,
    "copyrightUrl": "https://avolites.com",
    "markdownPlugins": [
      null
    ],
    "repoUrl": "https://github.com/AvolitesLtd/TitanManual"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "introduction",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": ["../static/avolites-icons/icons.css", "../src/css/customTheme.scss"]
        }
      }
    ]
  ],
  "plugins": [
    'docusaurus-plugin-sass',
    [
      require.resolve("./docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
        docsDir: "../docs",

        highlightSearchTermsOnTargetPage: true,        
      },
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Avolites Titan Manual",
      "logo": {
        "src": "img/Avolites_Logo_Red.svg"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
        },
        // {
        //   "to": "/help",
        //   "label": "Help",
        //   "position": "left"
        // },
        {
          "href": "https://avolites.com",
          "label": "Main Website",
          "position": "left"
        },
        {
          "label": "Version",
          "to": "docs",
          "position": "right",
          "items": [
            {
              "label": "14.0",
              "to": "docs/",
              "activeBaseRegex": "docs/(?!12.0|13.0|14.0|next)"
            },
            {
              "label": "13.0",
              "to": "docs/13.0/"
            },
            {
              "label": "12.0",
              "to": "docs/12.0/"
            },
            {
              "label": "v15.0 Beta",
              "to": "docs/next/",
              "activeBaseRegex": "docs/next/(?!support|team|resources)"
            }
          ]
        }
      ]
    },
    "image": "img/avolites_share.jpg",
    "footer": {
      "links": [],
      "copyright": "Copyright Avolites 2021 ©",
      "logo": {
        "src": "img/Avolites_Logo_Red.svg"
      }
    },
    "gtag": {
      "trackingID": "GTM-TZMDJV5"
    }
  }
}