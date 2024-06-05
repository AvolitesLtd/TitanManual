---
id: settings-synergy
title: Synergy Settings
sidebar_label: Synergy
---
import Keys from '@site/src/components/key.ts';

This page shows the settings for **Synergy**.  
**{{PRISM-APP}}** includes **Synergy** compatibility with **Avolites Titan**, providing easier setup as well as advanced features such as previewing of **{{PRISM-APP}}** within **Titan**, using the output from **{{PRISM-APP}}** within Titan's Pixelmapper and allowing media transfer directly from the console to **{{PRISM-APP}}**.

![Settings Synergy](/prismdocs/images/{{PRISM-APP-LOWER}}-settings-synergy.png)

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Note        |
|------------------------------------------------------|:------------:|
| **Titan Media Node Version** | List of available **Titan Media Node**. The version in use must match the **Titan** version. If a mismatch is identified within Titan's **Synergy** Settings, a different version can be selected via this dropdown. More information on how to setup a **Synergy** connection can be found [here](../../../../docs/synergy).|
| **Port** | Apecifies which port is used to allow **{{PRISM-APP}}** and **Titan** to communicate.|
| **Enable Synergy** | This toggle enable/disable **Synergy** connection between **{{PRISM-APP}}** and the controlling device.|
| **Connection Status** | Indicates the current status of the **Synergy** connection between **{{PRISM-APP}}** and **Titan**.|
| **Default Upload Folder** | This path is the default storage location used by all media transfered to **{{PRISM-APP}}** from **Titan** via a **Synergy** connection. By pressing the <Keys.PrismKey>Change Folder</Keys.PrismKey> button it is possible to update the default destination folder that will be displayed in the box.|
| **Auto Transcode** | This toggle will enable/disable the automatic conversion of any files transferred to **{{PRISM-APP}}** via **Synergy** without the need for user input.|
| **Show/Hide Point Overlay** | This toggle will enable/disable the point overlay visual feedback. When adjusting the **Group Layout** of fixtures within **Titan**, this tool can be used to ensure precise alignment of the fixtures within the area of the media surface.|
| **Automatic NDI Previews** | This toggle will enable/disable surfaces and layers previews which can be displayed within Titan's **[Media Viewer](../../../../docs/synergy/operating-synergy#media-viewer)** through NDI.|