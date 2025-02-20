---
id: navigation
title: Navigation
sidebar_label: Navigation
---

import Keys from '@site/src/components/key.ts';

**Prism**'s user interface is organized into three main sections:

- [Main Menu](#header-menu)
- [View Tabs](#view-tabs)
- [Status Bar](#status-bar)

## Main Menu
![Prism File Menu Open Recent](/prism-images/navigation/prism-header-menu.png)

In this section it is possible to navigate the application menu, see the Project name and minimize, maximize or close the user interface.

### App Logo
Clicking on Prism logo will hide all [View Tabs](#view-tabs) showing the selected **Surface** in fullscreen.

### File

![Prism File Menu](/prism-images/navigation/prism-file-menu.png)

|  Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Saves a new / replace project file. |
| Open | Opens a project file. |
| Open Recent | Opens a project from a list of previous projects, sorted by the most recent. |
| Collect All and Save | Saves the current project and collects all media files in use to a folder. |
| Open Project with Collection | Opens a project file and loads all media files saved with it. |

More information found at [Projects Management](./projects-management.md) 

|  Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank**, **Encode List** or **Regions**. |
| Export   | Exports either a **Bank**, **Encode List** or **Regions**. |

More information found at [Import/Export](./import-export.md)

|  Item  |   Description   |
|-------------|-----------------|
| Settings |  Navigates to the [Settings](../settings/settings.md) View.|

### Edit

![Prism Edit Menu](/prism-images/navigation/header-edit.png)

|  Item  |   Description   |
|-------------|-----------------|
|    Undo     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    Redo   |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View

![Prism Header Video Menu](/prism-images/navigation/prism-header-view.png)

|  Item  |   Description   |
|-------------|-----------------|
| Preview | Open the [Preview](./preview.md) window for editing bank elements.|

### Audio

![Prism Audio Menu](/prism-images/navigation/header-audio.png)

|  Item   |   Description   |
|--------------|-----------------|
| Audio Device | Sets the audio device for **Prism** to output to, the same setting can configured on the [settings](../settings/settings-general.md#audio). |

### Video

![Prism Header Video Menu](/prism-images/navigation/prism-header-video.png)

|  Item  |   Description   |
|-------------|-----------------|
| Show Grid   |   Displays a reference grid over the media player / layer preview. |
| Transparency Preview |  Toggles on the alpha channel showing a checkerboard in the transparent areas. |

### Help

![Prism Header Help Menu](/prism-images/navigation/header-help.png)

|  Item  |  Description  |
|-----------|-------------|
| Manual  | Opens the Desktop Manual app. |
| Support | Shows a pop-up with company details. |
| About   | Shows a pop-up with informations about **Prism**. |

## View Tabs
![Prism File Menu Open Recent](/prism-images/navigation/prism-view-tabs.png)

In this section it is possible to navigate the following app **Views**:

- [Play](../play/play.md)
- [Stage](../stage/stage.md)
- [Encoder](../encoder/encoder.md)
- [Settings](../settings/settings.md)

An underline will give visual feedback of the selected **View**.

## Status Bar

This bar shows the following app informations at a glance.

![Prism Status Bar Left](/prism-images/navigation/prism-status-bar.png)

- App performance metrics - The full performance metrics are shown in [Settings System Info](../settings/settings-system-info.md)
- Prism release version
- User interface connection status led - red when disconnected, green when connected to the server.

## Multi Selection

It is possible to select multiple elements by:
- Ticking the elements' selection boxes
- Holding *Ctrl* button and clicking on the elements
- Clicking on an element, then holding *Shift* button and then click on another element. This will select a range of elements where the start is set on the first clicked elements and the end on the last clicked element.

When multiple elements selection is active on  **Bank Elements**, **Layers** (in Play View), **Regions** or **Encode List**,   in the *Controls* panel a *Multiple elements selected* orange label is shown and any change to a value will be applied to every selected element.<br/>
The displayed values in the *Controls* panel are initially those of the first selected element.<br/>
If undo action is present in the panel where the value has been changed, upon undo action triggering all previous values are restored and the value of the first selected element is displayed.