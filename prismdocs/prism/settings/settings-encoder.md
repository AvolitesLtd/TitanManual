---
id: settings-encoder
title: Encoder Settings
sidebar_label: Encoder
---
import Keys from '@site/src/components/key.ts';

This page shows the settings for the encoding of media files.

![Settings System Info](/prism-images/settings/prism-settings-encoder.png)

### Encoder Options
|  Item  |   Description   |
|-------------|-----------------|
| **Auto Update Encoder Folder**   |  Enable automatic updates of the encoded media destination folder. <br /> When enabled all existing jobs in the **Encode List** will have their export destinations updated to the newly specified **Default Folder**.  <br /> When disabled only newly added jobs will default to this location whilst pre-existing jobs will retain their already specified output location. |
| **Default Folder** |  Set the default destination folder for encoded media. <br />By pressing the <Keys.PrismKey>Change Folder</Keys.PrismKey> button it is possible to update the default destination folder that will be displayed in the box. <br /> Encoded media will use this default folder unless a specific export destination has been set for an item in the **Encode List** element **Encode Options**. |
| **Auto Replace in Playlist** | Enable automatic replacement of the source media.|