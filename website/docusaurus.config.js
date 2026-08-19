module.exports={
  "title": "Avolites Manual",
  "tagline": "Official Manual for the Avolites Titan and Prism software",
  "url": "https://manual.avolites.com",
  "baseUrl": "/",
  "organizationName": "AvolitesLtd",
  "projectName": "TitanManual",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js",
    "/js/fuse.js",
    "/js/search.js"
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
  "markdown": {
    "hooks": {
      "onBrokenMarkdownLinks": "log"
    },
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    // MDX 3 treats `{Select}` as JS. Escape Titan handle labels, but leave
    // JSX objects like style={{width: '100px'}} and import lines alone.
    preprocessor: require('./mdxPreprocessor'),
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": require.resolve('./sidebars.json'),
        },
        "blog": false,
        "theme": {
          "customCss": ["./static/avolites-icons/icons.css", "./src/css/customTheme.scss"]
        }
      }
    ]
  ],
  "plugins": [
    function dedupeReact() {
      const path = require('path');
      return {
        name: 'dedupe-react',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                react: path.resolve(__dirname, 'node_modules/react'),
                'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
                'react-router': path.resolve(__dirname, 'node_modules/react-router'),
                'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
              },
            },
          };
        },
      };
    },
    'docusaurus-plugin-sass',
    [
      "@docusaurus/plugin-content-docs",
      {
          id: 'prism',
          path: "../prismdocs",
          routeBasePath: 'prism',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('../prismdocs/prism_sidebars.json'),
          sidebarCollapsible: true,
          exclude: [
            '**/shared',
          ],
        },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        "trackingID": "GTM-TZMDJV5"
      }
    ]
  ],
  "themes": [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsDir: ["../docs", "../prismdocs"],
        docsRouteBasePath: ["docs", "prism"],
        highlightSearchTermsOnTargetPage: true,
        indexBlog: false,
        // AvolitesLtd/docusaurus-search-local: keep hyphenated tokens (Titan-Go).
        fuzzyMatchingDistance: 1,
      },
    ],
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
      "title": "Avolites Manual",
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
              label: 'Prism',
              to: 'prism/prism/introduction'
            },
            {
              label: 'Prism Player',
              to: 'prism/player/introduction',
            },
            {
              label: 'Licensing',
              to: 'prism/licensing'
            },
            {
              label: 'All Versions',
              to: 'prism/versions'
            }
          ]
        },
        {
          "to": "https://www.avolites.com/support/ai-downloads/",
          "label": "Ai",
          "position": "left"
        },
        {
          "to": "/docs/synergy",
          "label": "Synergy",
          "position": "left"
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
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          docsPluginId: 'default',
        }
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
              to: 'https://www.avolites.com/support/',
            },
            {
              label: 'Titan API Documentation',
              to: 'https://api.avolites.com/',
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
              label: 'AvoSupport.de Wiki',
              to: "https://www.avosupport.de/wiki"
            },
          ]
        }
      ],
      "copyright": "Copyright Avolites 2021 ©",
      "logo": {
        "src": "img/Avolites_Logo_Red.svg"
      }
    }
  }
}
