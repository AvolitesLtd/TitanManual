/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React, { useEffect, useState } from "react";
 import versions from "@site/prism_versions.json"
 import Layout from "@theme/Layout"; 
 import downloads from "@site/static/download/prism-download.json"

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
  console.log(siteConfig)
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
                    {version === latestVersion && (
                      <a
                        href={`/prism/prism/introduction/`}>
                        Documentation
                      </a>
                    )}
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
        </div>
      </div>
    </div>
  );
}

export default props => <Layout><Versions {...props} /></Layout>;
