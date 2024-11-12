---
id: encoder
title: Encoder
sidebar_label: Encoder
---

import Keys from '@site/src/components/key.ts';

The **Encoder** section allows for files to be converted from common video codecs into the **AiM** codec in preparation for use on a live production.

![Encoder](/prismdocs/images/player-encoder.png)

### Encode Element

When a piece of media is loaded into the **Encoder**, several details about the file can be viewed:

![Encodelist Details](/prismdocs/images/encoder-details.png)

- The length of of the encoded media.
- The video codec, sub-codec, resolution and frame rate of the encoded media.
- The audio codec, bit depth, sample rate and channels of the encoded media.
- The destination folder of the encoded media.
- The current status of the job - _Ready_, _In Progress_ or _Done_.

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual **Encode List** elements allows access to the following actions:

- **Collapse/Expand** to collapse or expand the element details.
- **Hide Source/Show Source** to hide or show the details of the source media file and help compare changes made in the **Encode Options**.
- **Rename** to set the file's tag name, to be used as the destination file name.
- **Remove** to delete the file from the **Encode List**.
- **Settings** to open [Encode Options](./encode-options.md) relative to this element.
- **Duplicate** to create a copy of the element, ready for encoding.
- **Show In Folder** to open the location of the encoded media that has been set in the **Output Folder** setting.

The order in which the elements are arranged will be the order of the encoding queue this can be changed by dragging and dropping the element to another position in the queue.

At the bottom of the **Encoder** queue a readout shows the completion percentage of the total jobs.  
Next to this are the <Keys.PrismKey>Play</Keys.PrismKey> / <Keys.PrismKey>Pause</Keys.PrismKey> and <Keys.PrismKey>Stop</Keys.PrismKey> buttons which control the encoding process.

### Import/Export Encode Lists

Please see [Import/Export](../quick-start/import-export.md) section for reference.