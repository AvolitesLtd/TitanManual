---
id: banks
title: Banks
sidebar_label: Banks
---

import Keys from '@site/src/components/key.ts';

Banks within **Prism** provide a versatile space for managing media. 

Banks can be reordered, be renamed, and imported or exported for use in another project. 

Additionally, Banks can display thumbnails of the added elements via the [grid view](./banks.md#grid-view).

Pressing the <Keys.PrismKey>+</Keys.PrismKey> button will add a new Bank, the area will split into two sections:
- Left side - Bank Manager
- Right side - Selected Bank

Each Bank has its own <Keys.PrismKey>Sub Menu</Keys.PrismKey>:

| Feature | Description |
|--------|--------------|
| **Rename** | Renames the Bank | 
| **Remove**| Deletes the Bank and its contents | 
| **Duplicate**| Duplicates the Bank and its contents, including any Bank element property changes | 
| **Import** | Replaces the Bank with the saved Bank. See [Import & Export](../quick-start/import-export.md) for more details. | 
| **Export** | Saves the Bank to a file. See [Import & Export](../quick-start/import-export.md) for more details. | 

## Bank

To add new media to a Bank, select the Bank you wish to add to, and simply drag and drop your files or press the <Keys.PrismKey>+</Keys.PrismKey> button.

The Bank can be displayed in two views: Table or Grid. Both views feature a header at the top, which includes options to duplicate or remove selected Bank elements, and a toggle button to switch between views. There is also a button for adding new media.

## Bank Element
Bank elements can be rearranged by dragging them around in both table view and grid view.

### Types

#### Image 

Supports standard image types, such as **PNG**, **JPG**, **GIF**, etc.

#### Audio
Supports standard audio types, such as **MP3**, **WAV**, etc.

#### Video
Supports natively **Avolites AiM**, **NotchLC**, and **HAP**.
Additionally, other standard video codecs such as **H264**, **H265**, **ProRes**, etc., are also supported.

To enhance playback performance, consider transcoding media into **Avolites AiM** codec. Media can be added to the [encoder](../encoder/encoder.md) list by the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button. 

#### NDI Input
Any active NDI sources on the network.
Please see both [Settings](../settings/settings-inputs.md) and [Preview](../quick-start/preview.md) pages in order to setup and select NDI Sources.

#### Live Input
Any connected capture devices on the system.
Please see both [Settings](../settings/settings-inputs.md) and [Preview](../quick-start/preview.md) pages in order to setup and select Webcam / Capture Devices.

#### Virtual Return
The virtual return element enables one layer in the project to receive the rendered output of another layer.

## Table View

*Table View* gives more information about video / audio codecs, resolution, whether hardware acceleration is available on the media and much more.

![Prism Banks](/prism-images/play/banks/prism-table-banks.png)

Users can playback elements using the <Keys.PrismKey>Play</Keys.PrismKey> button and preview elements with the <Keys.PrismKey>Preview</Keys.PrismKey> button.

### Actions

#### Play

A layer must be selected in order to play elements

#### Preview

When previewing an element, adjustments can be made to its properties, please see [Preview](../quick-start/preview.md) for more details on how this works.

#### Sub Menu

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:

- **Remove** - Deletes the element from the Bank
- **Preview** - Preview and adjust properties of the Bank element
- **Duplicate** - Add a new copy of the Bank element, including all settings
- **Show In Folder** - Open file explorer and navigate to the element's media file

## Grid View

*Grid View* allows for easier triggering of clips due to the larger trigger area, thumbnails are shown here and are also stored on the **Prism Media Cache**.

![Prism Banks](/prism-images/play/banks/prism-grid-banks.png)

## Import/Export

Please see [Import/Export](../quick-start/import-export.md) for reference.

*Note: It is also possible to import Banks by simply dragging and dropping them in the drag and drop area.*