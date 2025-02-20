---
id: navigation
title: Navigation
sidebar_label: Navigation
---

import Keys from '@site/src/components/key.ts';

**Prism Player**'s user interface is organized into three main sections:

- [Main Menu](#header-menu)
- [View Tabs](#view-tabs)
- [Status Bar](#status-bar)

## Main Menu
![Prism Player File Menu Open Recent](/prism-images/navigation/player-header-menu.png)

In this section it is possible to navigate the application menu, see the Project name and minimize, maximize or close the user interface.

### App Logo
Clicking on Prism Player logo will hide all [View Tabs](#view-tabs) showing the selected **Surface** in fullscreen.

### File

![Prism Player File Menu](/prism-images/navigation/player-file-menu.png)

|  Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Save a new / replace project file. |
| Open | Open a project file. |
| Open Recent | Select to open from a list of previous projects. |

More information found at [Projects Management](./projects-management.md) 

|  Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank** or **Encode List**. |
| Export   | Exports either a **Bank** or **Encode List**. |

More information found at [Import/Export](./import-export.md)

|  Item  |   Description   |
|-------------|-----------------|
| Settings |  Navigates to the [Settings](../settings/settings.md) View.|

### Edit

![Prism Player Edit Menu](/prism-images/navigation/header-edit.png)

|  Item  |   Description   |
|-------------|-----------------|
|    Undo     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    Redo   |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View

![Prism Player Header Video Menu](/prism-images/navigation/player-header-view.png)

|  Item  |   Description   |
|-------------|-----------------|
| Enter Fullscreen  | Toggle fullscreen mode on to fill the video display also toggle by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the <Keys.PrismKey>Esc</Keys.PrismKey> button on your keyboard.|

### Audio

![Prism Player Audio Menu](/prism-images/navigation/header-audio.png)

|  Item   |   Description   |
|--------------|-----------------|
| Audio Device | Sets the audio device for **Prism Player** to output to, the same setting can configured on the [settings](../settings/settings-general.md#audio). |

### Video

![Prism Player Header Video Menu](/prism-images/navigation/player-header-video.png)

|  Item  |   Description   |
|-------------|-----------------|
| Aspect Mode |  Changes the way the media fills the media player canvas. |
| Show Grid   | Displays a reference grid over the media player / layer preview. |
| Transparency Preview | Toggles on the alpha channel showing a checkerboard in the transparent areas. |

### Help

![Prism Player Header Help Menu](/prism-images/navigation/header-help.png)

|  Item  |  Description  |
|-----------|-------------|
| Manual  | Opens the Desktop Manual app. |
| Support | Shows a pop-up with company details. |
| About   | Shows a pop-up with informations about **Prism Player**. |

## View Tabs
![Prism Player File Menu Open Recent](/prism-images/navigation/player-view-tabs.png)

In this section it is possible to navigate the following app **Views**:

- [Play](../play/play.md)
- [Encoder](../encoder/encoder.md)
- [Settings](../settings/settings.md)

An underline will give visual feedback of the selected **View**.

## Status Bar

This bar shows the following app informations at a glance.

![Prism Player Status Bar Left](/prism-images/navigation/player-status-bar.png)

- App performance metrics - The full performance metrics are shown in [Settings System Info](../settings/settings-system-info.md)
- Prism Player release version
- User interface connection status led - red when disconnected, green when connected to the server.

## Multi Selection

It is possible to select multiple elements by:
- Ticking the elements' selection boxes
- Holding *Ctrl* button and clicking on the elements
- Clicking on an element, then holding *Shift* button and then click on another element. This will select a range of elements where the start is set on the first clicked elements and the end on the last clicked element.

When multiple elements selection is active on   **Bank Elements** or **Encode List**,  in the *Controls* panel a *Multiple elements selected* orange label is shown and any change to a value will be applied to every selected element.<br/>
The displayed values in the *Controls* panel are initially those of the first selected element.<br/>
If undo action is present in the panel where the value has been changed, upon undo action triggering all previous values are restored and the value of the first selected element is displayed.