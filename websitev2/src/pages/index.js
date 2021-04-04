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

const MarkdownBlock = CompLibrary.MarkdownBlock;/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const translate = props => <div {...props}></div>;

import Layout from "@theme/Layout";

function pageUrl(doc, language) {
  return '/docs/' + (language ? `${language}/` : '') + doc;
}

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <translate>Avolites Titan Manual</translate>
        <small><translate>Official Manual for the Avolites Titan software</translate></small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button button--outline" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );
  //   <SplashContainer>
  //   <div className="inner">
  //     <ProjectTitle className="hero" siteConfig={siteConfig} />
  //     <Button href={pageUrl("introduction", language)}><translate>Get Started</translate></Button>
  //   </div>
  // </SplashContainer>
    return (
      <div class="hero shadow--lw">
        <div class="container text--center">
          <h1 class="hero__title">Avolites Titan Manual</h1>
          <p class="hero__subtitle">Official Manual for the Avolites Titan software</p>
          <div>
            <Button href={pageUrl("", language)}>Get Started</Button>
          </div>
        </div>
      </div>

    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: <translate>Bring lighting and video together on one visual canvas</translate>,
            image: `${baseUrl}img/synergy.png`,
            imageAlign: 'top',
            title: `<a href=${pageUrl("synergy", language)}>${<translate>Synergy</translate>}</a>`
          },
          {
            content: <translate>PioneerDJ waveform and BPM sync integration</translate>,
            image: `${baseUrl}img/avoxpioneer.png`,
            imageAlign: 'top',
            title: `<a href=${pageUrl("running-the-show/linking-pioneerdj-system-to-titan", language)}>${<translate>Pioneer DJ Integration</translate>}</a>`,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
        </div>
      </div>
    );
  }
}

export default props => <Layout><Index {...props} /></Layout>;
