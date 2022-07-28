---
id: settings
title: Settings
sidebar_label: Settings
---

The settings window contains several sections of user adjustable parameters as well as giving feedback on the machine currently in use.

### General

When **Keep Server Running On Close** is activated, when the main UI is closed the application will keep running in the system tray and continue with any assigned tasks. If this option is deactivated, closing the UI will exit the application fully regardless of its current state.

**Disable UI Notifications** is used to determine if messages from the application are displayed at the top of the **Prism Player** interface.

Using the **Graphics Card** dropdown allows the user to specify which GPU in the computer is used. The **AiM codec** makes use of hardware acceleration, so choosing the most powerful GPU in the system will benefit playback. Only DirectX 12 capable GPU's will be shown.

The **Audio Device** dropdown allows **Prism Player** to specify the output device separately from the main computer to create a dedicated preview feed.

**Undo History** provides feedback on the Undo function. The Total Steps determines how many undo actions can be made and Active Steps indicates the current position within the Total Steps.

### System Info

The **Memory section** gives the user feedback on the total amount of system memory available, the amount in use by **Prism Zero** and the amount the system is using overall.

### Playback

Whilst in the **Bank**, it is possible to use the left arrow key to jump back and the right arrow key to jump forwards along the player timeline. The size of this jump is specified in seconds in the **Step Amount** box.

If the **Resume Playback At Start** option is selected, **Prism Zero** will automatically start to play through the existing **Bank** when the application is launched.

### Encoder

Unless a specific export destination has been set for an item in the **Encoderlist**, it will use the default locations specified here. Pressing the **Change Folder** button opens a dialogue allowing a new destination folder to be selected. This new location will then be shown in the **Default Folder** box.

![Change Folder](/prismdocs/images/change_folder.png "Chnage Folder")

If the **Auto Update Encodelist** option is active, all existing jobs in the **Encodelist** will have their export destinations updated to the newly specified **Default Folder**. When this is deactivated, only newly added jobs will default to this location whilst pre-existing jobs will retain their already specified output location.
