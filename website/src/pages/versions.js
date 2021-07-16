/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React, { useEffect, useState } from "react";
 import versions from "@site/versions.json"
 import Layout from "@theme/Layout"; 
 import downloads from "@site/static/download/download.json"

/**
 * Returns the index of downloads which holds the latest PDF for that version
 * @param {array} downloads 
 * @param {string} version 
 */
function latestPDF(downloads, version) {
  for (let i in downloads)
    if(!downloads[i].prerelease && downloads[i].downloads.PDF[version])
      return i
  return -1
}

/**
 * 
 * @param {array} downloads 
 * @param {string} version 
 */
function PDF(downloads,version) {
  if(latestPDF(downloads,version) > -1) {
    let download = downloads[latestPDF(downloads,version)]
    let pdf = download.downloads.PDF[version]

    return (
      <div>
        <a
          href={pdf.url} download>
          PDF
        </a>
        &nbsp;&nbsp;
        <em>{`${pdf.size} (${formatDate(download.date)})`}</em>
      </div>
    )
  }
}

/**
 * Formats date string
 * @param {string} date 
 */
function formatDate(date) {
  return date.substr(0,10).split("-",3).reverse().join("/")
}


/**
 * Returns the index of downloads which is the first to have downloads for all platforms
 * @param {array} downloads 
 */
function latestDownload(downloads) {
  for (let idx = 0; idx < downloads.length; idx++) {
    const download = downloads[idx];
    let hasAllDownloads = true
    
    Object.keys(download.downloads).forEach(type => {
      hasAllDownloads = Object.keys(download.downloads[type]).length ? hasAllDownloads : false
    })
    if(hasAllDownloads)
      return idx
  }
  return -1
}

function Versions(props) {
  const {config: siteConfig} = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  
  return (
    <div className="container">
      <div style={{margin: "50px 0"}}>
        <div className="post">
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
                        href={`/docs/${
                          props.language ? props.language + '/' : ''
                        }${
                          version == latestVersion ? '' : version + '/'}`}>
                        Documentation
                      </a>
                    </td>
                    {downloads && (
                      <td>
                        { PDF(downloads,version) }
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
                {downloads && latestPDF(downloads,'Pre-Release') > -1 && (
                  <td>
                    { PDF(downloads,'Pre-Release') }
                  </td>
                )}
              </tr>
            </tbody>
          </table>

          {downloads && (
            <div>
              <h3 id="download">Downloads</h3>
              <table className="versions">
                {downloads.map((download,idx) => 
                  <tr key={download.version}>
                    <td>
                      <strong>
                        <a
                          href={download.url}>
                          {download.version}
                        </a>
                      </strong>
                      {download.prerelease && (
                        <div>
                          <em>
                            Pre-release
                          </em>
                        </div>
                      )}
                      {!download.prerelease && !idx && (
                        <div>
                          <em>
                            Latest
                          </em>
                        </div>
                      )}
                      <div>
                        {formatDate(download.date)}
                      </div>
                    </td>
                    {Object.keys(download.downloads).map(type =>
                      <td key={download.version+type}>
                        {Object.keys(download.downloads[type]).map(format =>
                          <div key={download.version+type+format}>
                            <a
                              href={download.downloads[type][format].url} download>
                              {type} ({format})
                            </a>
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                ).filter((download, idx) => {
                  return latestDownload(downloads) == -1 || idx <= (latestDownload(downloads))
                })}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default props => <Layout><Versions {...props} /></Layout>;
