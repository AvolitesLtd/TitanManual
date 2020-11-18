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

  const supportLinks = [
    {
      content: `Weiter zur [Bedienungsanleitung.](${docUrl(
        'introduction',
      )})`,
      title: 'Handbuch/Bedienungsanleitung',
    },
    {
      content: `Hilf mit, das Handbuch zu verbessern, <br>und werde Unterstützer auf [GitHub](${repoUrl})`,
      title: 'Mitmachen',
    },
    {
      content: `Für weitere Hilfe und Support besuchen Sie die<br> [Avolites Website](https://www.avolites.com/software/latest-version). <br>Hilfe auf Deutsch gibt es auf [www.avolites.de](https://www.avolites.de)`,
      title: 'Offizieller Avolites-Support',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Weitere Links</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />

          <div>
            <h2>Besonderer Dank an</h2>
            <ul>
              <li>
                <a href="https://fraserstockley.com/" target="_blank">Fraser Stockley</a>
              </li>
              <li>
                <a href="https://garethnunns.com/" target="_blank">Gareth Nunns</a>
              </li>
              <li>
              <a href="http://sabretechnology.co.uk/" target="_blank">Tim Mitchell</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
