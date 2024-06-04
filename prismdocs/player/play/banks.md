---
id: banks
title: Banks
sidebar_label: Banks
---

import Keys from '@site/src/components/key.ts';

Banks are a place where you can add media to **Prism Player**, it allows for playback of the media, renaming your bank and import / export of banks.

Banks can also show thumbnails of the bank elements added to **Prism Player**

New media can be added (via drag and drop) or pressing the <Keys.PrismKey>+</Keys.PrismKey> button. This will try to cache data for your order to speed up loading files again. Check out the "Clear Cache" on the [settings](../settings/settings-general) page.

-----

### Prism Player Only
Only 1 bank is allowed for this application. More are available on **Prism**.

### Prism Zero Only
Only 1 bank is allowed for this application. More are available on **Prism**

### Prism Only
Multiple banks can be added to **Prism**, as well as the above, they can be ordered.

-----

# Bank
Selecting a **Bank** will show any media added to it. The **Bank** can be displayed in 2 views **Table** or **Grid**.

## Table View

![Prism Player Banks](/prismdocs/images/player-table-banks.png)

This view gives more information about video / audio codecs, resolution, whether hardware acceleration is avaible on the media and much more.


The selection box at the top of the list can be used to select or deselect all of the files in the bank. It also provides feedback on how many files are currently selected.


## Grid View

![Prism Player Banks](/prismdocs/images/player-grid-banks.png)

Pressing <Keys.PrismKey>Play</Keys.PrismKey> next to the file name will select that file to be shown in the preview window and will show as red when currently playing.

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual files allows access to the following actions:

- **Hide** or **Show** to minimise the files view / details.
- **Rename** to set the file's tag name, to be used when sending to the encoder.
- **Remove** to delete the file from the **Bank**.

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> button at the top of the **Bank** will affect all selected files.

The order of the files in the bank can be changed by draging the entry up or down the list.

![Send to Encoder](/prismdocs/images/sendtoencoder.png)

After any adjustments, when the media is ready to export, pressing the **Send To Encoder** button will send all selected files into the **Encoder** Area. All details from the media files will be preserved and setup automatically to encode into the **AIM** codec. If the media file has been renamed this will also be used to set the output file name when encoding.

### Import & Export

Banks are able to be imported and exported from the application by clicking `Edit > Import / Export` from the header menu. The dialog defaults its location to the Windows Documents Folder under `Avolites > Prism > Player`.
