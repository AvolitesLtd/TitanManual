/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from "react";
 import Layout from "@theme/Layout"; 

function Versions(props) {
  // const {config: siteConfig} = props;
  // const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  // console.log(siteConfig)

  return (
    <div className="container">
      <div style={{margin: "50px 0"}}>
        <div className="post">
          <h3 id="latest">Versions</h3>

          <h5>Prism</h5>
          <table className="versions">
            <tbody>
              <tr>
                <th>1.3</th>
                <td>
                  <a
                    href={`/prism/prism/introduction/`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <div>
                    <a
                      href="https://github.com/AvolitesLtd/TitanManual/releases/download/1.0.21/Titan-12-0-2021-01-25-11-04-19.pdf">
                      PDF
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h5>Prism Zero</h5>
          <table className="versions">
            <tbody>
              <tr>
                <th>1.3</th>
                <td>
                  <a
                    href={`/prism/zero/introduction/`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <div>
                    <a
                      href="https://github.com/AvolitesLtd/TitanManual/releases/download/1.0.21/Titan-12-0-2021-01-25-11-04-19.pdf">
                      PDF
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1.2</th>
                <td>
                </td>
                <td>
                  <div>
                    <a
                      href="https://github.com/AvolitesLtd/TitanManual/releases/download/1.0.21/Titan-12-0-2021-01-25-11-04-19.pdf">
                      PDF
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h5>Prism Player</h5>
          <table className="versions">
            <tbody>
              <tr>
                <th>1.3</th>
                <td>
                  <a
                    href={`/prism/player/introduction/`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <div>
                    <a
                      href="https://github.com/AvolitesLtd/TitanManual/releases/download/1.0.21/Titan-12-0-2021-01-25-11-04-19.pdf">
                      PDF
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1.2</th>
                <td>
                </td>
                <td>
                  <div>
                    <a
                      href="https://github.com/AvolitesLtd/TitanManual/releases/download/1.0.21/Titan-12-0-2021-01-25-11-04-19.pdf">
                      PDF
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default props => <Layout><Versions {...props} /></Layout>;
