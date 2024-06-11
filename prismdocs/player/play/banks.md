---
id: banks
title: Banks
sidebar_label: Banks
---

import Keys from '@site/src/components/key.ts';

Banks within **Prism Player** provide a versatile space for managing media. 

Banks can play back media, be reordered, be renamed, and imported or exported for use in another project. 

Additionally, Banks can display thumbnails of the added elements via the [grid view](./banks#grid-view).


The Bank has its own <Keys.PrismKey>Sub Menu</Keys.PrismKey>:

| Feature | Description |
|--------|--------------|
| Rename | Renames the Bank | 
| Import | Replaces the Bank with the saved Bank. See [Import & Export](../quick-start/import-export) for more details. | 
| Export | Saves the Bank to a JSON file. See [Import & Export](../quick-start/import-export) for more details. | 

*Note: Only 1 Bank is allowed to be used on **Prism Player**, more can be added on **Prism**. audio, images and video can be added*


<!--
The Bank has its own <Keys.PrismKey>Sub Menu</Keys.PrismKey>:

| Feature | Description |
|--------|--------------|
| Rename | Renames the Bank | 
| Import | Replaces the Bank with the saved Bank. See [Import & Export](../quick-start/import-export) for more details. | 
| Export | Saves the Bank to a JSON file. See [Import & Export](../quick-start/import-export) for more details. | 

*Note: Only 1 Bank is allowed to be used on **Prism Player**, more can be added on **Prism**. audio, images and video can be added*
-->

<!--
Pressing the <Keys.PrismKey>+</Keys.PrismKey> button will add a new Bank, the area will split into two sections:
- Left side - Bank Manager
- Right side - Selected Bank

Adding Banks will not be possible on the left side.

Each Bank has its own <Keys.PrismKey>Sub Menu</Keys.PrismKey>:

| Feature | Description |
|--------|--------------|
| Rename | Renames the Bank | 
| Remove | Deletes the Bank and its contents | 
| Duplicate | Duplicates the Bank and its contents, including any Bank element property changes | 
| Import | Replaces the Bank with the saved Bank. See [Import & Export](../quick-start/import-export) for more details. | 
| Export | Saves the Bank to a JSON file. See [Import & Export](../quick-start/import-export) for more details. | 

*Note: Multiple Banks can be added and as well as the basic feature of Prism Player and Prism Zero, NDI and Live input sources are also able to be added, please see [Settings > Inputs](../../prism/settings/settings-inputs) for more details.*
-->

## Bank

To add new media to a Bank, select the Bank you wish to add to, and simply drag and drop your files or press the <Keys.PrismKey>+</Keys.PrismKey> button. This action caches the data in the [**Prism Media Cache**](../quick-start/media-management#prism-media-cache), enhancing the loading speed for future projects.

The Bank can be displayed in two views: Table or Grid. Both views feature a header at the top, which includes options to duplicate or remove selected Bank elements, and a toggle button to switch between views. There is also a button for adding new media.

## Bank Element

If you need extra performance when triggering video, you can send selected Bank elements over to the [encoder](../encoder/encoder) for transcoding into our **Avolites AIM** codec.

**Prism Player** and **Prism Zero** can only  audio, images and video to be added to the Banks. Where as, **Prism** introduces new elements such as NDI / Live Inputs and Virtual Returns. Bank elements can be rearranged by dragging them around in both table view and grid view.

### Types

#### Image 

Supports standard image types, such as **PNG**, **JPG**, **GIF** etc

#### Audio
Supports standard audio types, such as **MP3**, **WAV** etc 

#### Video
Supports standard video playback of **H264**, **ProRes**, **NotchLC**, **HAP** & **AiM**. As all of the **Prism Suite** uses the **ffmpeg** we can support playback of any supported file.

<!--
#### NDI Input
Any active NDI sources on your network can be used here, please see both [Settings](../settings/settings-inputs) and [Preview](../play/preview) pages in order to setup and select your NDI Sources.

#### Live Input
Any connected USB devices can be used here, please see both [Settings](../settings/settings-inputs) and [Preview](../play/preview) pages in order to setup and select your Webcam / USB Capture Devices.

#### Virtual Return
The virtual return element allows you to take the rendered result of any layer and send it to any other layer in the project.
-->

## Table View

*Table View* gives more information about video / audio codecs, resolution, whether hardware acceleration is available on the media and much more.

![Prism Player Banks](/prismdocs/images/player-table-banks.png)

Users can playback elements using the <Keys.PrismKey>Play</Keys.PrismKey> button and preview elements with the <Keys.PrismKey>Preview</Keys.PrismKey> button.

### Actions

#### Play


Playing an element will playback on the [media player](../play/mediaplayer).


<!--
A layer must be selected in order to play elements
-->

<!--
A layer must be selected in order to play elements
-->


<!--
#### Preview

When previewing an element adjustments can be made to its properties, please see [Preview](../play/preview) for more details on how this works.

After any adjustments are made from the **Preview**, when the media is ready to export, pressing the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button will send all selected files into the **Encoder** Area. Relevant properties from the Bank element will be preserved and setup automatically to encode into the **AIM** codec. If the media file has been renamed this will also be used to set the output file name when encoding.
-->

<!--
#### Preview

When previewing an element adjustments can be made to its properties, please see [Preview](../play/preview) for more details on how this works.

After any adjustments are made from the **Preview**, when the media is ready to export, pressing the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button will send all selected files into the **Encoder** Area. Relevant properties from the Bank element will be preserved and setup automatically to encode into the **AIM** codec. If the media file has been renamed this will also be used to set the output file name when encoding.
-->

#### Sub Menu

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:

- **Remove** - Deletes the element from the Bank
- **Duplicate** - Add a new copy of the Bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file


<!--
Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:

- **Remove** - Deletes the element from the Bank | 
- **Preview** - Preview and adjust properties of the Bank element
- **Duplicate** - Add a new copy of the Bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file
-->
<!--
Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:

- **Remove** - Deletes the element from the Bank
- **Preview** - Preview and adjust properties of the Bank element
- **Duplicate** - Add a new copy of the Bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file
-->

## Grid View

*Grid View* allows for easier triggering of clips due to the larger trigger area, thumbnails are shown here and are also stored on the **Prism Media Cache**.

![Prism Player Banks](/prismdocs/images/player-grid-Banks.png)

## Import/Export

Please see [Import/Export](../quick-start/import-export) for reference.

*Note: It is also possible to import Banks by simply dragging and dropping `JSON` files in the drag and drop area.*