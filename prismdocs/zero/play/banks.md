---
id: banks
title: Banks
sidebar_label: Banks
---

import Keys from '@site/src/components/key.ts';

Banks within **Prism Zero** provide a versatile space for managing media.  
You can play back media, reorder banks and their elements, rename banks, and import or export bank contents.  
Additionally, Banks can display thumbnails of the added elements via the [grid view](./banks.md#grid-view).

<!--
*Note: Only 1 bank is allowed to be used on **Prism Zero**, more can be added on **Prism**. audio, images and video can be added*
-->


*Note: Only 1 bank is allowed to be used on **Prism Zero**, more can be added on **Prism**. audio, images and video can be added*


<!--
*Note: Multiple banks can be added and as well as the basic feature of Prism Player and Prism Zero, NDI and Live input sources are also able to be added, please see [Settings > Inputs](../../prism/settings/settings-inputs.md) for more details.*
-->

## Bank

To add new media to a bank, select the bank you wish to add to, and simply drag and drop your files or press the <Keys.PrismKey>+</Keys.PrismKey> button. This action caches the data in the [**Prism Media Cache**](../quick-start/media-management#prism-media-cache), enhancing the loading speed for future projects.

The Bank can be displayed in two views: Table or Grid. Both views feature a header at the top, which includes options to duplicate or remove selected bank elements, and a toggle button to switch between views. There is also a button for adding new media.

## Bank Element

If you need extra performance when triggering video, you can send selected bank elements over to the [encoder](../encoder/encoder.md) for transcoding into our **Avolites AIM** codec.

**Prism Player** and **Prism Zero** allow the adding of audio, images and video. Where as **Prism** introduces new elements such as NDI / Live Inputs and Virtual Returns. Bank elements can be rearranged by dragging them around in both table view and grid view.

### Types

#### Image 

Supports standard image types, such as **PNG**, **JPG**, **GIF** etc

#### Audio
Supports standard image types, such as **MP3**, **WAV** etc 

#### Video
Supports standard video playback of **H264**, **ProRes**, **NotchLC**, **HAP** & **AiM**. As all of the **Prism Suite** uses the **ffmpeg** we can support playback of any supported file.

<!--
#### NDI Input
Any active ndi sources on your network can be used here, please see both [Settings](../settings/settings-inputs) and [Preview](../play/preview) pages in order setup and select your NDI Sources

#### Live Input
Any connected usb devices which supports DirectShow can be used here, please see both [Settings](../settings/settings-inputs) and [Preview](../play/preview) pages in order setup  and select your Webcam / USB Capture Devices

#### Virtual Return
Any connected usb devices which supports DirectShow can be used here, please see [Preview](../play/preview) page in order setup and select your Webcam / USB Capture Devices
-->

## Table View

*Table View* gives more information about video / audio codecs, resolution, whether hardware acceleration is available on the media and much more.

![Prism Zero Banks](/prismdocs/images/zero-table-banks.png)

Users can playback elements using the <Keys.PrismKey>Play</Keys.PrismKey> and preview elements with the <Keys.PrismKey>Preview</Keys.PrismKey>.

### Play

<!--
Playing an element will playback on the [media player](../play/mediaplayer).
-->


A layer must be selected in order to play elements


<!--
A layer must be selected in order to play elements
-->



### Preview

When previewing an element adjustments can be made to its properties, please see [Preview](../play/preview) for more details on how this works.

After any adjustments are made from the **Preview**, when the media is ready to export, pressing the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button will send all selected files into the **Encoder** Area. Relevant properties from the bank element will be preserved and setup automatically to encode into the **AIM** codec. If the media file has been renamed this will also be used to set the output file name when encoding.


<!--
### Preview

When previewing an element adjustments can be made to its properties, please see [Preview](../play/preview) for more details on how this works.

After any adjustments are made from the **Preview**, when the media is ready to export, pressing the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button will send all selected files into the **Encoder** Area. Relevant properties from the bank element will be preserved and setup automatically to encode into the **AIM** codec. If the media file has been renamed this will also be used to set the output file name when encoding.
-->

### Menu Actions

<!--
Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:
- **Remove** - to delete the element from the bank.
- **Duplicate** - add a new copy of the bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file.
-->

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:
- **Remove** - Delete the element from the bank.
- **Preview** - Preview and adjust properties of the bank element.
- **Duplicate** - Add a new copy of the bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file.

<!--
Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:
- **Remove** - Delete the element from the bank.
- **Preview** - Preview and adjust properties of the bank element.
- **Duplicate** - Add a new copy of the bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file.
-->

## Grid View

*Grid View* allows for easier triggering of clips due to the larger trigger area, thumbnails are shown here and are also stored on the **Prism Media Cache**.

![Prism Zero Banks](/prismdocs/images/zero-grid-banks.png)

## Import/Export

Please see [Import/Export](../quick-start/import-export) for reference.  
It is also possible to import banks by simply dragging and dropping `JSON` files in the drag and drop area.