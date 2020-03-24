/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('introduction', this.props.language)}>
              Getting Started
            </a>
          </div>
          <div>
            <h5>Contribute</h5>
            <a href={this.props.config.repoUrl} target="_blank">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              target="_blank"
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            <a href={this.props.config.repoUrl + "/issues/new"} target="_blank">Report an Issue</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                  target="_blank">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
          <div>
            <h5>Other Resources</h5>
            <a href={this.props.config.copyrightUrl} target="_blank">Main Website</a>
            <a href="https://www.youtube.com/avolites" target="_blank">YouTube</a>
            <a href="https://www.facebook.com/groups/Avolites/" target="_blank">Facebook Group</a>
            <a href="https://www.avolites.de/wiki" target="_blank">Avolites.de Wiki</a>
          </div>
          <div className="copyright">
            {this.props.config.footerIcon && (
              <a
                href={this.props.config.copyrightUrl}
                className="copyrightImg">
                <img
                  className="logo"
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                />
              </a>
            )}
            {this.props.config.copyright}
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;