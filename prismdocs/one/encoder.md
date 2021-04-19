---
id: encoder
title: Encoder
sidebar_label: Encoder
---

The **Encoder** section allows for files to be converted from common video codecs into the **AIM** codec in preparation for use on a live production.

When a piece of media is loaded into the **Encoder**, several details about the file can be viewed

* The codec that the media will be exported to and whether it has alpha
* The resolution, frame rate and length of the file to be exported 
* The audio codec and format to be exported 
* The destination of the rendered clip. 
* The current status of the job - *Ready*, *In Progress* or *Done*

If in expanded view the source settings will be visible to help compare changes made in the encode settings.

Hiding files will display the element in one line and may help to view lots of files in the list. By pressing <i className="icon icon-menu-dots"></i> to the right of each file a menu will show where individual file actions can then be selected. Here you are able to rename the file and this will become the filename of the output file.

Pressing the <i className="icon icon-menu-dots"></i> at the top of the **Encoder** allows you to **Hide** or **Show** the currently selected files export settings, **Expand** or **Narrow** to show the source and destination details of the file, **Rename** the selected file, **Remove** the file from the **Encoder** or adjust the individual export Settings for the clip.

The order in which the elements are arranged will be the order of the encoding queue this can be changed by dragging and dropping the element to another position in the queue.

At the bottom of the **Encoder** queue a readout shows the completion percentage of the total jobs as well as the remaining time until completion. Next to this are the <i className="icon icon-button-play"></i> / <i className="icon icon-button-pause"></i> and <i className="icon icon-button-stop"></i> buttons which activate the encoder list when ready to export.

### Import & Export

Encodelists are able to be imported and exported from the application by clicking `Edit > Import / Export` from the header menu. The dialog defaults its location to the Windows Documents Folder under `Avolites > Prism > One`. Here you will find other documents such as application logs playlists and project files.