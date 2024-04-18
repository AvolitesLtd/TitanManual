---
id: settings
title: Settings
sidebar_label: Settings
---

The settings window contains several sections of user adjustable parameters as well as giving feedback on the machine currently in use.

### General

When **Keep Server Running On Close** is activated, when the main UI is closed the application will keep running in the system tray and continue with any assigned tasks. If this option is deactivated, closing the UI will exit the application fully regardless of its current state.

**Disable UI Notifications** is used to determine if messages from the application are displayed at the top of the **Prism Zero** interface.

Using the **Graphics Card** dropdown allows the user to specify which GPU in the computer is used. The **AiM codec** makes use of hardware acceleration, so choosing the most powerful GPU in the system will benefit playback. Only DirectX 12 capable GPU's will be shown.

The **Audio Device** dropdown allows **Prism Zero** to specify the output device separately from the main computer to create a dedicated preview feed.

**Undo History** provides feedback on the Undo function. The Total Steps determines how many undo actions can be made and Active Steps indicates the current position within the Total Steps.

### System Info

The **Memory section** gives the user feedback on the total amount of system memory available, the amount in use by **Prism Zero** and the amount the system is using overall.

### Playback

Whilst in the **Playlist**, it is possible to use the left arrow key to jump back and the right arrow key to jump forwards along the player timeline. The size of this jump is specified in seconds in the **Step Amount** box.

If the **Resume Playback At Start** option is selected, **Prism Zero** will automatically start to play through the existing **Playlist** when the application is launched.

### Encoder

Unless a specific export destination has been set for an item in the **Encoderlist**, it will use the default locations specified here. Pressing the **Change Folder** button opens a dialogue allowing a new destination folder to be selected. This new location will then be shown in the **Default Folder** box.

![Change Folder](/prismdocs/images/change_folder.png "Chnage Folder")

If the **Auto Update Encodelist** option is active, all existing jobs in the **Encodelist** will have their export destinations updated to the newly specified **Default Folder**. When this is deactivated, only newly added jobs will default to this location whilst pre-existing jobs will retain their already specified output location.

When **Auto Replace In Playlist** is active, the exported version of the media will replace the source file in the **Playlist**.

### Output

**Prism Zero** can send its full screen video signal to a physical display output on the machine in use as well as across a network using the **NDI** protocol to any device capable of receiving it.

**Physical Output**

The settings here allow the output from which to send the video signal to be chosen from the dropdown menu and for its **resolution** and **frame rate** to be set according to the project requirements. This can then be activated using the **Output Enabled** switch.

The HDR Support indicator can be used to determine if an HDR pipeline is available with the current hardware configuration.

The **NDI Output** section allows a network broadcast of the video signal to be setup. A name can be entered for the **NDI** stream to make it more easily identifiable by receiving devices on the network. The **resolution** and **frame rate** of the **NDI** stream can also be set. The stream can then be activated with the **Output Enabled** switch.

### Synergy

**Prism Zero** includes **Synergy** compatibility with **Avolites Titan**, providing easier setup as well as advanced features such as previewing of **Prism Zero** within **Titan**, using the output from **Prism Zero** within Titan's Pixelmapper and allowing media transfer directly from the console to **Prism Zero**.

The **Synergy** version in use must match the Titan version. If a missmatch is identified within Titan's **Synergy** Settings, a different version can be selected via this dropdown.

More information on how to setup a **Synergy** connection can be found [here](../../docs/synergy)

**Port** specifies which port is used to allow **Prism Zero** and **Titan** to communicate.

**Enable Synergy** is used to activate the **Synergy** connection between **Prism Zero** and the controlling device.

**Connection Status** indicates the current status of the **Synergy** connection between **Prism Zero** and **Titan**

The **Default Upload Folder** shows the storage location used by all media transfered to **Prism Zero** from **Titan** via a **Synergy** connection.

![Change Folder](/prismdocs/images/change_folder.png "Change Folder")

This may be adjusted using the **CHANGE FOLDER** button.
When activated, the **Auto Transcode** option will allow for automatic conversion of any files transferred to **Prism Zero** via **Synergy** without the need for user input.

When adjusting the **Group Layout** of fixtures within **Titan**, the **Position Overlay** tool can be used to ensure precise alignment of the fixtures within the area of the media surface. **Show / Hide Point Overlay** activates this visual feedback within **Prism Zero**.
