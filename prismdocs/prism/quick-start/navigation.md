---
id: navigation
title: Navigation
sidebar_label: Navigation
---

import Keys from '@site/src/components/key.ts';

**Prism**'s user interface is organized into three main sections:

- [Header Menu](./navigation#header-menu)
- [View Tabs](./navigation#view-tabs)
- [Status Bar](./navigation#status-bar)

## Header Menu
![Prism File Menu Open Recent](/prismdocs/images/navigation/prism-header-menu.png)

In this section it is possible to navigate the application menu, see the Project name and minimize, maximize or close the user interface.

### App Logo
Clicking on Prism logo will hide all [View Tabs](./navigation#view-tabs) showing the selected **Surface** in fullscreen.

### File

![Prism File Menu Open Recent](/prismdocs/images/navigation/header-file-recent.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Save a new / replace project file. |
| Open | Open a project file. |
| Open Recent | Select to open from a list of previous projects. |

More information found at [Projects Management](../quick-start/projects-management) 

|  Menu Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank** or **Encodelist**. |
| Export   | Exports either a **Bank** or **Encodelist**. |

More information found at [Import/Export](../quick-start/import-export)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Settings |  Navigates to the [Settings](../settings) View.|

### Edit

![Prism Edit Menu](/prismdocs/images/navigation/header-edit.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
|    Undo     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    Redo   |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View


![Prism Header Video Menu](/prismdocs/images/navigation/zero-prism-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Preview | Open the [Preview](../play/banks#preview) window for editing bank elements.|


<!--
![Prism Header Video Menu](/prismdocs/images/navigation/zero-prism-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Preview | Open the [Preview](../preview) window for editing bank elements.|
-->

<!--
![Prism Header Video Menu](/prismdocs/images/navigation/player-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Enter Fullscreen  | Toggle fullscreen mode on to fill the video display also toggle by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the <Keys.PrismKey>Esc</Keys.PrismKey> button on your keyboard.|
-->

### Audio

![Prism Audio Menu](/prismdocs/images/navigation/header-audio.png)

|  Menu Item   |   Description   |
|--------------|-----------------|
| Audio Device | Switch the audio device for **Prism** to output to, the same setting can be set [here](../settings/settings-general#audio). |

### Video


![Prism Header Video Menu](/prismdocs/images/navigation/zero-prism-header-video.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Show Grid   |   Displays a reference grid over the media player / layer preview. |
| Transparency Preview |  Toggles on the alpha channel showing a checkerboard in the transparent areas. |


<!--
![Prism Header Video Menu](/prismdocs/images/navigation/zero-prism-header-video.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Show Grid   |   Displays a reference grid over the media player / layer preview. |
| Transparency Preview |  Toggles on the alpha channel showing a checkerboard in the transparent areas. |
-->

<!--
![Prism Header Video Menu](/prismdocs/images/navigation/player-header-video.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Aspect Mode |  Changes the way the media fills the media player canvas. |
| Show Grid   | Displays a reference grid over the media player / layer preview. |
| Transparency Preview | Toggles on the alpha channel showing a checkerboard in the transparent areas. |
-->

### Help

![Prism Header Help Menu](/prismdocs/images/navigation/header-help.png)

| Menu Item | Description |
|-----------|-------------|
| Manual  | Opens the Desktop Manual App |
| Support | Shows a pop-up with company details |
| About   | About **Prism**

## View Tabs
![Prism File Menu Open Recent](/prismdocs/images/navigation/view-tabs.png)

In this section it is possible to navigate the following app **Views**:


- [Play](../play)
- [Stage](../stage)
- [Encoder](../encoder)
- [Settings](../settings)


<!--
- [Play](../play)
- [Stage](../stage)
- [Encoder](../encoder)
- [Settings](../settings)
-->

<!--
- [Play](../play)
- [Encoder](../encoder)
- [Settings](../settings)
-->

An underline will give visual feedback of the selected **View**.

## Status Bar

This bar shows the following app informations at a glance.

![Prism Status Bar Left](/prismdocs/images/navigation/prism-status-bar.png)

- App performance metrics - The full performance metrics are shown in [Settings System Info](../settings/settings-system-info)
- Prism release version
- User interface connection status led - red when disconnected, green when connected to the server.