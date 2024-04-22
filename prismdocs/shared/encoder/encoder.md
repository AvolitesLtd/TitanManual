---
id: encoder
title: Encoder
sidebar_label: Encoder
---

import Keys from '@site/src/components/key.ts';

The **Encoder** section allows for files to be converted from common video codecs into the **AIM** codec in preparation for use on a live production.

![Encodelist Details](/prismdocs/images/encoderdetails.png)

When a piece of media is loaded into the **Encoder**, several details about the file can be viewed

- The codec that the media will be exported to and whether it has alpha
- The resolution, frame rate and length of the file to be exported
- The audio codec and format to be exported
- The destination of the rendered clip.
- The current status of the job - _Ready_, _In Progress_ or _Done_

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual files allows access to the following actions:

- **Hide** or **Show** to minimise the files view / details.
- **Expand** to view the source settings and help compare changes made in the encode settings.
- **Rename** to set the file's tag name, to be used when sending to the encoder.
- **Remove** to delete the file from the **Encodelist**.
- **Settings** displays all encoder settings as described [here](encoder-settings).
- **Duplicate** will copy and create a new element, ready for transcoding.

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> button at the top of the **Encodelist** will affect all selected files.

The order in which the elements are arranged will be the order of the encoding queue this can be changed by dragging and dropping the element to another position in the queue.

At the bottom of the **Encoder** queue a readout shows the completion percentage of the total jobs as well as the remaining time until completion. Next to this are the <Keys.PrismKey>Play</Keys.PrismKey> / <Keys.PrismKey>Pause</Keys.PrismKey> and <Keys.PrismKey>Stop</Keys.PrismKey> buttons which activate the encoder list when ready to export.

### Import & Export

Encodelists are able to be imported and exported from the application by clicking `Edit > Import / Export` from the header menu. The dialog defaults its location to the Windows Documents Folder under `Avolites > Prism > {{PRISM-PATH}}`.
