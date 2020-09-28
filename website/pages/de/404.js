/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl, repoUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
  const content = [
    {
      content: `Browse the rest of the [documentation on this site.](${docUrl(
        'introduction',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: `For help and support visit the [Avolites site](https://www.avolites.com/software/latest-version)`,
      title: 'Official help and support',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <h2 className="center">404 - Page Not Found</h2>
          <GridBlock contents={content} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
