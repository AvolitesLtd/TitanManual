---
id: navigation
title: Navigation
sidebar_label: Navigation
---

import Keys from '@site/src/components/key.ts';

{{PRISM-APP}} user interface is organized into three main sections:

- [Header Menu](./navigation#header-menu)
- [View Tabs](./navigation#view-tabs)
- [Status Bar](./navigation#status-bar)

## Header Menu
![{{PRISM-APP}} File Menu Open Recent](/prismdocs/images/navigation/header-menu.png)

In this section it is possible to navigate the application menu, see the Project name and minimize, maximize or close the user interface.

### App Logo
Clicking on {{PRISM-APP}} logo will hide all [View Tabs](./navigation#view-tabs) showing the selected **Surface** in fullscreen.

### File

![{{PRISM-APP}} File Menu Open Recent](/prismdocs/images/navigation/header-file-recent.png)

<table>
    <thead>
        <tr>
            <th>Menu Item</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>New Project</b></td>
            <td>Resets application state and starts a new project</td>
        </tr>
        <tr>
            <td><b>Save</b></td>
            <td>Saves the current project</td>
        </tr>
        <tr>
            <td><b>Save As</b></td>
            <td>Save a new / replace project file</td>
        </tr>
        <tr>
            <td><b>Open</b></td>
            <td>Open a project file </td>
        </tr>
        <tr>
            <td><b>Open Recent</b></td>
            <td>Select to open from a list of previous projects</td>
        </tr>
    </tbody>
</table>

More information found at [Projects Management](../quick-start/projects-management) 

<table>
    <thead>
        <tr>
            <th>Menu Item</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr style={{display: (`{{PRISM-APP-LOWER}}` === 'player' || `{{PRISM-APP-LOWER}}` === 'zero' ) ? '' : 'none' }}>
            <td><b>Import</b></td>
            <td>Imports and overrides either a <b>Bank</b> or <b>Encodelist</b></td>
        </tr>
        <tr style={{display: (`{{PRISM-APP-LOWER}}` === 'prism' ) ? '' : 'none' }}>
            <td><b>Import</b></td>
            <td>Imports by adding a new <b>Bank</b> or by overriding either a <b>Bank</b> or <b>Encodelist</b></td>
        </tr>
        <tr>
            <td><b>Export</b></td>
            <td>Exports selected Bank either a <b>Bank</b> or <b>Encodelist</b></td>
        </tr>
    </tbody>
</table>

More information found at [Import/Export](../quick-start/import-export)

<table>
    <thead>
        <tr>
            <th>Menu Item</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr >
            <td><b>Settings</b></td>
            <td>Navigates to the <a href="../settings">Settings</a> View</td>
        </tr>
    </tbody>
</table>

### Edit

![{{PRISM-APP}} Edit Menu](/prismdocs/images/navigation/header-edit.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
|    **Undo**     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    **Redo**    |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View

<div style={{display: (`{{PRISM-APP-LOWER}}` === 'player') ? '' : 'none'}}>

![{{PRISM-APP}} Header Video Menu](/prismdocs/images/navigation/player-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| **Enter Fullscreen**  | Toggle fullscreen mode on to fill the video display also toggle by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the <Keys.PrismKey>Esc</Keys.PrismKey> button on your keyboard.
 |

</div>

<div style={{display: (`{{PRISM-APP-LOWER}}` === 'prism' || `{{PRISM-APP-LOWER}}` === 'zero' ) ? '' : 'none'}}>

![{{PRISM-APP}} Header Video Menu](/prismdocs/images/navigation/zero-prism-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| **Preview** | Open the [Preview](../preview) window for editing bank elements.|

</div>

### Audio

![{{PRISM-APP}} Audio Menu](/prismdocs/images/navigation/header-audio.png)

|  Menu Item   |   Description   |
|--------------|-----------------|
| **Audio Device** | Switch the audio device for **{{PRISM-APP}}** to output to, the same setting can be set [here](../settings/settings-general#audio). |

### Video

Further controls can be found in the main header:

<div style={{display: (`{{PRISM-APP-LOWER}}` === 'player') ? '' : 'none'}}>

![{{PRISM-APP}} Header Video Menu](/prismdocs/images/navigation/player-header-video.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Aspect Mode |  Changes the way the media fills the media player canvas. |
| Show Grid   | Displays a reference grid over the media player / layer preview. |
| Transparency Preview | Toggles on the alpha channel showing a checkerboard in the transparent areas. |

</div>

<div style={{display: (`{{PRISM-APP-LOWER}}` === 'prism' || `{{PRISM-APP-LOWER}}` === 'zero' ) ? '' : 'none'}}>

![{{PRISM-APP}} Header Video Menu](/prismdocs/images/navigation/zero-prism-header-video.png)

</div>

|  Menu Item  |   Description   |
|-------------|-----------------|
| Show Grid   |   Displays a reference grid over the media player / layer preview. |
| Transparency Preview |  Toggles on the alpha channel showing a checkerboard in the transparent areas. |

### Help

![{{PRISM-APP}} Header Help Menu](/prismdocs/images/navigation/header-help.png)

| Menu Item | Description |
|-----------|-------------|
| Manual  | Opens the Desktop Manual App |
| Support | Shows a popup with company details |
| About   | About **{{PRISM-APP}}**

## View Tabs
![{{PRISM-APP}} File Menu Open Recent](/prismdocs/images/navigation/view-tabs.png)

In this section it is possible to navigate the following app **Views**:

<ul>
    <li><a href="../play">Play</a></li>
    <li style={{display: (`{{PRISM-APP-LOWER}}` === 'prism' || `{{PRISM-APP-LOWER}}` === 'zero') ? '' : 'none'}}>
        <a href="../stage">Stage</a></li>
    <li><a href="../encoder">Encoder</a></li>
    <li><a href="../settings">Settings</a></li>
</ul>

An underline will give visual feedback of the selected **View**.

## Status Bar

![{{PRISM-APP}} File Menu Open Recent](/prismdocs/images/navigation/status-bar.png)

This bar shows the following app informations at a glance.

- App performance metrics - The full performance metrics are shown in [Settings System Info](../settings/settings-system-info)
- {{PRISM-APP}} release version
- User interface connection status led - red when disconnected, green when connected to the engine.