---
id: projects-management
title: Projects Management
sidebar_label: Projects Management
---

### New Project
To create a **{{PRISM-APP}}** project, click on `File > New Project` or use the `Ctrl+N` shortcut.  
Creating a new project will reset all application settings.

{{PRISM-START-COMMENT}}
By default, a new Prism project will contain 1 **Surface** containing 2 **Layers**, and 2 **Regions**.
{{PRISM-END-COMMENT}}

**Encode list** media files and **Settings** will remain unchanged as they are stored separately.

### Save Project

To save a **{{PRISM-APP}}** project, click on `File > Save` or use the `Ctrl+S` shortcut.  
The default destination folder of project files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Projects`.  

Clicking on `File > Save As` or using the `Ctrl+Shift+S` shortcut will prompt the **Save Project As** dialog box where the project file name and the default destination folder can be changed.

When a project is saved in **{{PRISM-APP}}**, it will contain all application settings throughout the software.  

{{PLAYER-START-COMMENT}}
This includes all **Bank**, **Surface** and **Layers** settings.
{{PLAYER-END-COMMENT}}

{{PRISM-START-COMMENT}}
This includes all **Banks**, **Surfaces**, **Layers**, **Outputs** and **Regions** settings.
{{PRISM-END-COMMENT}}

### Open Project

To open a **{{PRISM-APP}}** project, click on `File > Open` or use the `Ctrl+O` shortcut.  
The default source folder of project files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Projects`.  

Clicking on `File > Open Recent` will show the list of recently opened projects, with the most recent at the top.  
Selecting one of the projects form the list will open it.

Opening a previously saved project greatly reduces the setup time for a show and allows the recall of an earlier setup render queue without the need to rebuild it. When a project is opened, all settings across the application will be updated to those in the saved file.

{{PRISM-START-COMMENT}}
### Collect All and Save 

Collect and save all media used in the project to a specific destination folder. This can be used to backup a project along with its media, or easily transfer it to another machine.<br/>
To save a Prism project with a collection, click on `File > Collect All and Save`. The default destination folder of project files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Projects`. On collecting all and saving the **Save Project with Collection** dialog box will prompt where the project file name and the default destination folder can be changed. 

A pop-up will then show the following information: 

- Number of media files being collected. 
- Destination folder of the collection. 
- Required disk space of the collection. 
- Available disk space at the destination.

![Collecting Media Start](/prism-images/project-management/collecting-media-popup-start.png)

If there is not enough available space, the collection process cannot proceed and the only option is to press the *Cancel* button.

![Collecting Media Error Size](/prism-images/project-management/collecting-media-popup-error-size.png)

If sufficient space is available, once confirmed the collection process begins, displaying a progress bar. <br/>

![Collecting Media Progress](/prism-images/project-management/collecting-media-popup-progress.png)

The process can be cancelled at any time before completion. Once finished, the pop-up can be closed by pressing the *Close* button.<br/>

![Collecting Media End](/prism-images/project-management/collecting-media-popup-end.png)

Additionally, a *Collecting Media* status bar appears in the bottom **Status Bar**. If the UI is closed and later reopened, the pop-up will not be visible, but the status bar will continue to provide visual feedback on the progress.<br/>
If an error occurs during the process (e.g., the destination folder is on an external drive that is removed mid-process), the pop-up will display an error code, an error message, and the *Cancel* button.

![Collecting Media Error Collecting](/prism-images/project-management/collecting-media-popup-error-collecting.png)

### Open Project with Collection 

To open a Prism project with collection, click on `File > Open Project with Collection`.  When opening a project with collection, Prism will look for the *Media* folder that was created when saving with a collection (*Collect All and Save*).<br/>
If the *Media* folder is found, the media files will be loaded to the **Banks** and the media file paths under *Source* will be relative to this folder. If the *Media* folder is not found the loading will fail and an error will be notified.
{{PRISM-END-COMMENT}}