---
id: save-and-load
title: Save and Load
sidebar_label: Save and Load
---

### Save

In order to save a **Prism Zero** project it is possible to click on `File > Save` or use the `Ctrl+S` shortcut.  
The default destination folder of project files is in the **Documents** folder under `Avolites > Prism > Zero > Projects`.  

Clicking on `File > Save As` or using the `Ctrl+Shift+S` shortcut will prompt the **Save Project As** dialog box where the project file name and the default destination folder can be changed.

When a project is saved in **Prism Zero**, it will contain all application settings throughout the software.  

<!-- Player -->
<p style={{display: (`zero` === 'player') ? 'inline-block' : 'none'}}>
    This includes all <b>Bank</b>, <b>Surface</b> and <b>Layers</b> settings.
</p>

<!-- Zero -->
<p style={{display: (`zero` === 'zero') ? 'inline-block' : 'none'}}>
    This includes all<b>Bank</b>, <b>Surface</b>, <b>Layers</b>, <b>Outputs</b> and Outputs' <b>Regions</b> settings.
</p>

<!-- Prism -->
<p style={{display: (`zero` === 'prism') ? 'inline-block' : 'none'}}>
   This includes all <b>Banks</b>, <b>Surfaces</b>, <b>Layers</b>, <b>Outputs</b> and Outputs' <b>Regions</b> settings.
</p>

### Load

In order to load a **Prism Zero** project it is possible to click on `File > Open` or use the `Ctrl+O` shortcut.  
The default source folder of project files is in the **Documents** folder under `Avolites > Prism > Zero > Projects`.  

Clicking on `File > Open Recent` will show the list of recently opened projects, with the most recent at the top.  
Selecting one of the projects form the list will load it.

Loading a previously saved project greatly reduces the setup time for a show and allows the recall of an earlier setup render queue without the need to rebuild it. When a project is loaded, all settings across the application will be updated to those in the saved file.