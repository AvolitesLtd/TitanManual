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
          "sidebarPath": require.resolve('./sidebars.json'),
        },
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
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
          id: 'prism',
          "path": "../prismdocs",
          routeBasePath: 'prism',
          // "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "sidebarPath": require.resolve('./sidebarsPrism.json'),
        },
    ]
  ],
  "i18n": {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'German',
      },
    },
  },
  "themeConfig": {
    "navbar": {
      "title": "Avolites Titan Manual",
      "logo": {
        "src": "img/Avolites_Logo_White.svg"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Titan",
          "position": "left"
        },
        {
          label: 'Prism',
          position: 'left',
          items: [
            {
              label: 'Player',
              to: 'prism/player/about',
            },
            {
              label: 'One',
              to: 'prism/one/about'
            }
          ]
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        },
        {
          "href": "https://avolites.com",
          "label": "Main Website",
          "position": "left"
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: 'default',
          dropdownActiveClassDisabled: true,

        },
        // {
        //   type: 'docsVersion',
        //   position: 'right',
        //   docsPluginId: 'prism',
        //   dropdownActiveClassDisabled: true,

        // }
      ]
    },
    "image": "img/avolites_share.jpg",
    "footer": {
      "links": [
        {
          // Label of the section of these links
          title: 'Avolites',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Support',
              to: 'https://www.avolites.com/support/"',
            },
            {
              label: 'Titan API Documentation',
              to: 'https://api.avolites.com/"',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.avolites.com/privacy-policy',
            }
          ],
        },
        {
          title: 'Other Resources',
          items: [
            {
              label: 'Downloads',
              to: "/versions"
            },
            {
              label: 'Main Website',
              to: "https://www.avolites.com/"
            },
            {
              label: 'YouTube',
              to: "https://www.youtube.com/avolites"
            },
            {
              label: 'Facebook Group',
              to: "https://www.facebook.com/groups/Avolites/"
            },
            {
              label: 'Avolites.de Wiki',
              to: "https://www.avolites.de/wiki"
            },
          ]
        }
      ],
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