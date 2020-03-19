/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

require('./custom_rules.js');

const siteConfig = {
  title: 'Avolites Titan Manual', // Title for your website.
  tagline: 'Official Manual for the Avolites Titan software',
  url: 'https://avolites.fraserstockley.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Avolites Titan Documentation',
  organizationName: 'Fraser Stockley',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  gaTrackingId: 'UA-157551013-1',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'docs/introduction', label: 'Docs'},
    {page: 'help', label: 'Help'},
    { href: 'https://avolites.com', label: 'Main Website'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/Avolites_Logo_White.svg',
  footerIcon: 'img/avo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#D80029',
    secondaryColor: '#8F0006',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright Avolites ${new Date().getFullYear()} ©`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  markdownPlugins: [
    function buttonStyling(md) {
      md.inline.ruler.before('text',"softkey", custom_rules.softkeyRule)
      md.renderer.rules.softkey_open = custom_rules.softkey_open
      md.renderer.rules.softkey_close = custom_rules.softkey_close
      md.inline.ruler.before('text',"button", custom_rules.buttonRule)
      md.renderer.rules.button_open = custom_rules.button_open
      md.renderer.rules.button_close = custom_rules.button_close
    },
    function enableSubscriptAndSuperscript(md) {
      md.inline.ruler.enable(['sub', 'sup']);
    },
  ],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
    '/js/fuse.js',
    '/js/search.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/avolites_share.jpg',
  twitterImage: 'img/avolites_share.jpg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/Farrser/AvoDocs',
};

module.exports = siteConfig;
