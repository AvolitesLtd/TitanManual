---
id: navigation
title: Navigation
sidebar_label: Navigation
---

import Keys from '@site/src/components/key.ts';

**{{PRISM-APP}}**'s user interface is organized into three main sections:

- [Main Menu](#header-menu)
- [View Tabs](#view-tabs)
- [Status Bar](#status-bar)

## Main Menu
![{{PRISM-APP}} File Menu Open Recent](/prism-images/navigation/{{PRISM-APP-LOWER}}-header-menu.png)

In this section it is possible to navigate the application menu, see the Project name, minimize, maximize or close the user interface.

### App Logo
Clicking on {{PRISM-APP}} logo will hide all [View Tabs](#view-tabs), showing the selected **Surface** in fullscreen.

### File
{{PRISM-START-COMMENT}}
![{{PRISM-APP}} File Menu](/prism-images/navigation/{{PRISM-APP-LOWER}}-file-menu.png)

|  Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Saves a new / replace project file. |
| Open | Opens a project file. |
| Open Recent | Opens a project from a list of previous projects, sorted by the most recent. |
| Collect All and Save | Saves the current project and collects all media files in use to a folder. |
| Open Project with Collection | Opens a project file and loads all media files saved with it. |
{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
![{{PRISM-APP}} File Menu](/prism-images/navigation/{{PRISM-APP-LOWER}}-file-menu.png)

|  Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Save a new / replace project file. |
| Open | Open a project file. |
| Open Recent | Select to open from a list of previous projects. |
{{PLAYER-END-COMMENT}}

More information found at [Projects Management](./projects-management.md) 

{{PRISM-START-COMMENT}}
|  Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank**, **Encode List** or **Regions**. |
| Export   | Exports either a **Bank**, **Encode List** or **Regions**. |
{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
|  Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank** or **Encode List**. |
| Export   | Exports either a **Bank** or **Encode List**. |
{{PLAYER-END-COMMENT}}

More information found at [Import/Export](./import-export.md)

|  Item  |   Description   |
|-------------|-----------------|
| Settings |  Navigates to the [Settings](../settings/settings.md) View.|

### Edit

![{{PRISM-APP}} Edit Menu](/prism-images/navigation/header-edit.png)

|  Item  |   Description   |
|-------------|-----------------|
|    Undo     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    Redo   |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View

{{PRISM-START-COMMENT}}
![{{PRISM-APP}} Header Video Menu](/prism-images/navigation/{{PRISM-APP-LOWER}}-header-view.png)

|  Item  |   Description   |
|-------------|-----------------|
| Preview | Open the [Preview](./preview.md) window for editing bank elements.|
{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
![{{PRISM-APP}} Header Video Menu](/prism-images/navigation/{{PRISM-APP-LOWER}}-header-view.png)

|  Item  |   Description   |
|-------------|-----------------|
| Enter Fullscreen  | Toggle fullscreen mode on to fill the video display also toggle by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the <Keys.PrismKey>Esc</Keys.PrismKey> button on your keyboard.|
{{PLAYER-END-COMMENT}}

### Audio

![{{PRISM-APP}} Audio Menu](/prism-images/navigation/header-audio.png)

|  Item   |   Description   |
|--------------|-----------------|
| Audio Device | Sets the audio device output for **{{PRISM-APP}}**. This can also be configured via [Settings](../settings/settings-general.md#audio). |

### Video

{{PRISM-START-COMMENT}}
![{{PRISM-APP}} Header Video Menu](/prism-images/navigation/{{PRISM-APP-LOWER}}-header-video.png)

|  Item  |   Description   |
|-------------|-----------------|
| Show Grid   |   Displays a reference grid over the media player / layer preview. |
| Transparency Preview |  Toggles on the alpha channel, showing a checkerboard in transparent areas. |
{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
![{{PRISM-APP}} Header Video Menu](/prism-images/navigation/{{PRISM-APP-LOWER}}-header-video.png)

|  Item  |   Description   |
|-------------|-----------------|
| Aspect Mode |  Changes the way the media fills the media player canvas. |
| Show Grid   | Displays a reference grid over the media player / layer preview. |
| Transparency Preview | Toggles on the alpha channel showing a checkerboard in the transparent areas. |
{{PLAYER-END-COMMENT}}

### Help

![{{PRISM-APP}} Header Help Menu](/prism-images/navigation/header-help.png)

|  Item  |  Description  |
|-----------|-------------|
| Manual  | Opens the Desktop Manual app. |
| Support | Shows a pop-up with company details. |
| About   | Shows a pop-up with information about **{{PRISM-APP}}**. |

## View Tabs
![{{PRISM-APP}} File Menu Open Recent](/prism-images/navigation/{{PRISM-APP-LOWER}}-view-tabs.png)

In this section it is possible to navigate the following app **Views**:

{{PRISM-START-COMMENT}}
- [Play](../play/play.md).
- [Stage](../stage/stage.md).
- [Encoder](../encoder/encoder.md).
- [Settings](../settings/settings.md).
{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
- [Play](../play/play.md).
- [Encoder](../encoder/encoder.md).
- [Settings](../settings/settings.md).
{{PLAYER-END-COMMENT}}

An underline will give visual feedback of the selected **View**.

## Status Bar

This bar shows the following app informations at a glance.

![{{PRISM-APP}} Status Bar Left](/prism-images/navigation/{{PRISM-APP-LOWER}}-status-bar.png)

- App performance metrics - The full performance metrics are shown in the [System Info](../settings/settings-system-info.md) page in **Settings**.
- {{PRISM-APP}} release version.
- User interface connection status LED - red when disconnected, green when connected to the Server.

## Multi Selection

It is possible to select multiple elements by:
- Ticking element selection boxes.
- Holding *Ctrl* button and clicking on elements.
- Clicking on an element then *Shift* clicking another element to range select.
- Pressing *Ctrl-A* to select all elements in a list.

When multiple {{PRISM-START-COMMENT}} **Bank Elements**, **Layers** (in Play View), **Regions** or **Encode List** entries {{PRISM-END-COMMENT}} {{PLAYER-START-COMMENT}} **Bank Elements** or **Encode List** entries {{PLAYER-END-COMMENT}} have been selected, a *Multiple elements selected* orange label is shown in the *Controls* panel and changes will be applied to every selected element.<br/>

Any unchanged values in the *Controls* panel will initially display those of the first selected element.<br/>

If [Undo and Redo](#edit) are permitted, all selected elements will be affected.