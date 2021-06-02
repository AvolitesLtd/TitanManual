/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Layout from "@theme/Layout";

class HomeSplash extends React.Component {
  render() {
    return (
      <div class="hero shadow--lw" style={{height: "calc(100vh - 60px)"}}>
        <div class="container text--center">
          <h1 class="hero__title">Avolites Titan Manual</h1>
          <p class="hero__subtitle">
            <Translate>
              Official Manual for the Avolites Titan software
            </Translate>
          </p>
          <div>
            <Link to="/docs" className="button button--primary">
              <Translate id="homepage.getStarted">Get Started</Translate>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <HomeSplash />
      </div>
    );
  }
}

export default props => <Layout><Index {...props} /></Layout>;
