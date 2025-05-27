---
id: settings-general
title: General Settings
sidebar_label: General
---

This page displays the general settings for **{{PRISM-APP}}**.

![Settings General](/prism-images/settings/{{PRISM-APP-LOWER}}-settings-general.png)

There are four sections:
- **Application** - Controls settings related to the application’s user interface (UI).
- **Graphics** - Controls settings for the application’s graphics performance and quality.
- **Audio** - Controls settings for the application’s audio output.
- **Cache** - Controls settings for the application’s caching system.

### Application

| Item                         | Description                                                                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **Keep Server Running On Close** | Choose whether the application continues running after closing the UI. <br/><br/>When enabled, the application stays active in the system tray and continues assigned tasks even after the UI is closed. <br/><br/>When disabled, closing the UI will fully exit the application regardless of its current state. |
| **Disable UI Notifications** | Toggle UI notifications on or off. When enabled, messages from the application appear at the top of the UI.                                |
| **UI Warnings**               | Resets the status of UI warnings. For example, if a "Render Warning" popup is disabled by selecting "Don't show this message again," pressing this button will re-enable that warning so it appears again when relevant. |


### Graphics

|  Item  |  Description  |
|----------------------|------------|
| **Graphics Card** | List of available GPUs on the system. The selected device will be used by the application to output video frames.|

### Audio

|  Item  |  Description  |
|----------------------|------------|
| **Audio Output Device** | List of available audio output devices on the system. The selected device will be used by the application to output master audio.|

### Cache

|  Item  |  Description  |
|----------------------|------------|
| **Clear Cache** |  Clears bank elements informations and thumbnails, resets NDI and Live Inputs settings and clears Undo/Redo history. |