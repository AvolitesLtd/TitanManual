---
id: banks
title: Banks
sidebar_label: Banks
---

import Keys from '@site/src/components/key.ts';

**Banks** provide a versatile space for managing media. They can be reordered, renamed, and imported or exported to use in other projects.

The **Banks** area can be displayed in two views: *Table* or *Grid*. 

## Table View

*Table View* gives more information about video / audio codecs, resolution, whether hardware acceleration is available on the media and much more.

![Prism Banks](/prism-images/play/banks/prism-table-banks.png)

Users can playback elements using the <Keys.PrismKey>Play</Keys.PrismKey> button and preview elements with the <Keys.PrismKey>Preview</Keys.PrismKey> button.

## Grid View

*Grid View* allows for easier triggering of clips due to the larger trigger area, thumbnails are shown here and are also stored on the **Prism Media Cache**.

![Prism Banks](/prism-images/play/banks/prism-grid-banks.png)

Pressing the <Keys.PrismKey>+</Keys.PrismKey> button will add a new **Bank**, each with its own <Keys.PrismKey>Sub Menu</Keys.PrismKey>

#### Sub Menu

| Item | Description |
|--------|--------------|
| **Rename** | Renames the Bank | 
| **Remove**| Deletes the Bank and its contents | 
| **Duplicate**| Duplicates the Bank and its contents, including any Bank element property changes | 
| **Import** | Replaces the Bank with the saved Bank. See [Import & Export](../quick-start/import-export.md) for more details. | 
| **Export** | Saves the Bank to a file. See [Import & Export](../quick-start/import-export.md) for more details. | 

## Bank

To add new media to a Bank, select the Bank you wish to add to, and simply drag and drop your files or press the <Keys.PrismKey>+</Keys.PrismKey> button.

## Bank Element
Bank elements can be rearranged by dragging them around in both table view and grid view.

### Element Types

#### Image 

Supports standard image types, such as **PNG**, **JPG**, **GIF**, etc.

#### Image Sequence

An **Image Sequence** plays a folder of sequentially numbered still images as a clip. Supported still-image types follow those of a standard [Image](#image) element.

To load an image sequence:

- Enter the path to any of the images in the sequence.
- Or select one of the images in the sequence from the dialog box.

The Image Sequence pop-up checks the format of the sequence, with or without trailing zeros:

| Selected file | Folder | Filename pattern |
|---------------|--------|------------------|
| `D:\Videos\Wildlife_seq\Wildlife-001.png` | `D:\Videos\Wildlife_seq` | `Wildlife-%03d.png` |
| `D:\Videos\Wildlife_seq\Wildlife-1.png` | `D:\Videos\Wildlife_seq` | `Wildlife-%d.png` |

**Frame rate** sets how fast the sequence plays and also updates the duration of the sequence.

##### Sequence pattern

The sequence pattern uses `%0#d`, where `#` is the number of digits in the frame number:

- `%d` is an unpadded frame number, for example `Wildlife-1.png`.
- `%03d` is a frame number padded to 3 digits, for example `Wildlife-001.png`.
- `%04d` is a frame number padded to 4 digits, for example `Wildlife-0001.png`.

The starting frame number must be **0** or **1**.

These filenames are supported:

- `20250718_153946_0000.png`
- `20250718_1539460000.png`, detected as `20250718_153946%04d.png` (not `20250718_%010d.png`)

##### Limitations

- Sequences with missing frames are not supported.
- Sequences with frames of different resolutions are not supported.

#### Audio
Supports standard audio types, such as **MP3**, **WAV**, etc.

#### Video
Supports natively **Avolites AiM**, **NotchLC**, and **HAP**.
Additionally, other standard video codecs such as **H264**, **H265**, and **ProRes** are also supported.

The following **ProRes** profiles are supported:

| Profile | ID | Pixel format |
|---------|----|--------------|
| **Proxy** | `0` | `yuv422p10le` |
| **LT** | `1` | `yuv422p10le` |
| **Standard** | `2` | `yuv422p10le` |
| **HQ** | `3` | `yuv422p10le` |
| **4444** | `4` | `yuva444p10le` |
| **4444 XQ** | `5` | `yuva444p12le` |

Support is also included for the `yuv444p12le` pixel format.

To enhance playback performance, consider transcoding media into **Avolites AiM** codec. Media can be added to the [encoder](../encoder/encoder.md) list by the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button. 

#### NDI® Input
A list of active NDI® sources on the network. Please see both [Settings](../settings/settings-inputs.md) and [Preview](../quick-start/preview.md) pages in order to setup and select NDI® Sources.

Prism NDI® sources use the **NDI® SDK**, a list of all features can be found [here](https://NDI.video/for-developers/#sdk-comparison).

[NDI®](https://ndi.video/) is a registered trademark of Vizrt NDI AB.

#### Live Input
Any connected capture devices on the system.
Please see both [Settings](../settings/settings-inputs.md) and [Preview](../quick-start/preview.md) pages in order to setup and select Webcam / Capture Devices.

#### Virtual Return
The Virtual Return element enables one layer in the project to receive the rendered output of surface or another layer.

#### Network Stream
The Network Stream element receives live video transmitted over a network. Use it to connect to IP cameras, media servers, or other streaming devices that provide real-time video via **RTSP** or **HLS**.

#### Test Pattern
A generated **Test Pattern** bank element, used to align outputs, check colour and geometry, and verify mapping without importing media.

#### Gradient
A generated **Gradient** bank element, used as a colour wash or blend source on a layer. Gradient colours and direction can be adjusted in [Preview](../quick-start/preview.md).

### Actions

#### Play

A layer must be selected in order to play elements

#### Preview

When previewing an element, adjustments can be made to its properties, please see [Preview](../quick-start/preview.md) for more details on how this works.

#### Sub Menu

Opening the <Keys.PrismKey>Sub Menu</Keys.PrismKey> on individual elements allows access to the following actions:

| Item | Description |
|--------|--------------|
| **Remove** | Deletes the element from the Bank | 
| **Replace** | Replaces the element from the Bank with new media | 
| **Preview** | Preview and adjust properties of the Bank element | 
| **Duplicate**| Add a new copy of the Bank element, including all settings | 
| **Show In Folder** | Open file explorer and navigate to the element's media file |
| **Copy** | Copy the clip controls set within Preview |
| **Paste** | Paste the clip controls from one bank element to another |

## Import/Export

Please see [Import/Export](../quick-start/import-export.md) for reference.

*Note: It is also possible to import Banks by simply dragging and dropping them in the drag and drop area.*