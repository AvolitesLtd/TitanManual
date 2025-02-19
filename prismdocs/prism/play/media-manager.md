---
id: media-manager
title: Media Manager
sidebar_label: Media Manager
---

This table shows all media files in use in the *Banks*, where every row corresponds to a unique physical location on the file system. In addition to the media file properties (the same that are displayed in *Banks* [table view](./banks.md#table-view).) the number of *Banks* and *Bank Elements*, which are currently using the media file at the **Source** location, are displayed in the **Uses** column.

![Table All](/prism-images/play/media-manager/table-all.png)

### Actions

#### Replace  
Opens file explorer to choose a media file which will replace the current one.<br/>
All instances in use in *Banks* will be replaced. All **Tag** values will be preserved after replacing the media file. 

#### Show in Finder 
Opens the file explorer in the location of the media file. <br/>
Hovering over the **Source** file name and clicking on the file path will navigate to the location.

#### Relocate 
If a media file is missing from the expected location, relocate can be used to specify the new location.<br/>
Pressing relocate opens file explorer. Navigate to the new location of the missing media file and *Open* the file.<br/>
If multiple missing files match with files located in the selected folder, a pop-up is opened.<br/>
Replace only the media file on which the action was triggered by clicking **Relocate One**, all matching files by clicking **Relocate All** or cancel the action by clicking **Cancel**.

![Relocate Popup](/prism-images/play/media-manager/relocate-popup.png)

### Filter By
It is possible to filter the table rows by: 

- **All media** - Shows all media files in use in *Banks*. 
- **Missing media** - Shows only the media files which are missing, i.e. are not present anymore in the original location on the file system.  

**Source** location of **Missing media** are highlighted in orange and the navigation to the source location is disabled. 

![Table Missing](/prism-images/play/media-manager/table-missing.png)

### Scan Media
Clicking this button will automatically relocate any missing media files if they are found in their original location on the file system.