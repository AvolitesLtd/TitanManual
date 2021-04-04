/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = {
  Container: props => <div {...props}></div>,
  GridBlock: props => <div {...props}></div>,
  MarkdownBlock: props => <div {...props}></div>
};

import Layout from "@theme/Layout";

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
      content: `Learn more using the [documentation on this site.](${docUrl(
        'introduction',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: `Help make these docs better by becoming a contributor on [GitHub](${repoUrl})`,
      title: 'Contribute',
    },
    {
      content: `For help and support visit the [Avolites site](https://www.avolites.com/software/latest-version)`,
      title: 'Official help and support',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="container">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <div className="row">
            <div className="col col--6">Learn more using the documentation on this site.</div>
            <div className="col col--6">
              For help and support visit the 
              <a className="button button--outline" href="https://www.avolites.com/support/">
                Avolites Support Site
              </a>
            </div>
          </div>

          <div>
            <h2>Special Thanks To</h2>
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

export default props => <Layout><Help {...props} /></Layout>;
