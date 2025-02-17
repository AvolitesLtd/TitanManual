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

![Prism File Menu Open Recent](/prism-images/navigation/header-file-recent.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Save a new / replace project file. |
| Open | Open a project file. |
| Open Recent | Select to open from a list of previous projects. |

More information found at [Projects Management](./projects-management.md) 

|  Menu Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank** or **Encodelist**. |
| Export   | Exports either a **Bank** or **Encodelist**. |

More information found at [Import/Export](./import-export.md)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Settings |  Navigates to the [Settings](../settings/settings.md) View.|

### Edit

![Prism Edit Menu](/prism-images/navigation/header-edit.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
|    Undo     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    Redo   |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View
![Prism Header Video Menu](/prism-images/navigation/prism-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Preview | Open the [Preview](./preview.md) window for editing bank elements.|
### Audio

![Prism Audio Menu](/prism-images/navigation/header-audio.png)

|  Menu Item   |   Description   |
|--------------|-----------------|
| Audio Device | Set the audio device for **Prism** to output to, the same setting can configured on the [settings](../settings/settings-general.md#audio). |

### Video
![Prism Header Video Menu](/prism-images/navigation/prism-header-video.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Show Grid   |   Displays a reference grid over the media player / layer preview. |
| Transparency Preview |  Toggles on the alpha channel showing a checkerboard in the transparent areas. |
### Help

![Prism Header Help Menu](/prism-images/navigation/header-help.png)

| Menu Item | Description |
|-----------|-------------|
| Manual  | Opens the Desktop Manual App |
| Support | Shows a pop-up with company details |
| About   | About **Prism**

## View Tabs
![Prism File Menu Open Recent](/prism-images/navigation/view-tabs.png)

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