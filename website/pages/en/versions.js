/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const fs = require('fs');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

// paths
const PDFPath = `${CWD}/static/download/download-pdf.json`;
const windowsPath = `${CWD}/static/download/download-windows.json`;
const linuxPath = `${CWD}/static/download/download-linux.json`;
const macPath = `${CWD}/static/download/download-mac.json`;


// PDFs
let PDFs = fs.existsSync(PDFPath);
PDFs = PDFs ? require(PDFPath) : false;

// downloads
let downloads = {
  "os": {
    "Windows": windowsPath,
    "Linux": linuxPath,
    "Mac": macPath,
  },
  "versions": [],
  "length": 0
};

Object.keys(downloads.os).forEach(os => {
  downloads.os[os] = fs.existsSync(downloads.os[os]) ? require(downloads.os[os]) : false;
  downloads.versions = downloads.versions.concat([...Object.keys(downloads.os[os])]);
  downloads.length += !!downloads.os[os];
})

// remove duplicates
downloads.versions = [...new Set(downloads.versions)].sort().reverse();

function Versions(props) {
  const {config: siteConfig} = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title}</h1>
          </header>
          <h3 id="latest">Versions</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      {/* You are supposed to change this href where appropriate
                      Example: href="<baseUrl>/docs(/:language)(/:version)/:id" */}
                      <a
                        href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                          props.language ? props.language + '/' : ''
                        }${
                          version == latestVersion ? '' : version + '/'
                        }introduction`}>
                        Documentation
                      </a>
                    </td>
                    {!!Object.keys(PDFs).length && (
                      <td>
                        {PDFs[version] && (
                          <a
                            href={`/download/${PDFs[version]}`} download>
                            PDF
                          </a>
                        )}
                      </td>
                    )}
                  </tr>
              )}
            </tbody>
          </table>
          <h3 id="rc">Pre-release versions</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}+</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/next/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + '/' : ''
                    }next/introduction`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
                {PDFs["latest"] && (
                  <td>
                    <a
                      href={`/download/${PDFs["latest"]}`} download>
                      PDF
                    </a>
                  </td>
                )}
              </tr>
            </tbody>
          </table>

          {!!downloads.length && (
            <div>
              <h3 id="download">Downloads</h3>
              <table className="versions">
                {downloads.versions.map(version =>
                  <tr>
                    <td>
                      <strong>
                        {version}
                      </strong>
                    </td>
                    {Object.keys(downloads.os).map(os =>
                      downloads.os[os] && (
                        <td>
                          {downloads.os[os][version] && Object.keys(downloads.os[os][version]).map(format =>
                            <div>
                              <a
                                href={`/download/${downloads.os[os][version][format]}`} download>
                                {os} ({format})
                              </a>
                            </div>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                )}
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
