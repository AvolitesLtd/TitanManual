---
id: playlist
title: Playlist
sidebar_label: Playlist
---

import Keys from '@site/src/components/key.ts';

The **Playlist** is used to curate, name and order a list of different media types for playback within the media player and to prepare media files for encoding.

When a piece of media is loaded into the **Playlist**, several details about the file are shown:

![Prism Zero Playlist Details](/prismdocs/images/playlistdetails.png)

- The name / tag name of the file
- The current video codec of the file and whether it has alpha
- The resolution, frame rate, length and size of the file
- The current audio codec in use
- The location of the file, which can be directly accessed by clicking the address

The selection box at the top of the list can be used to select or deselect all of the files in the playlist. It also provides feedback on how many files are currently selected.

The selection box to the left of the file name determines if certain global actions are taken with the specific file, such as sending to the encoder, showing or hiding the file details or removing the selected media from the playlist.

Pressing <Keys.PrismKey>Play</Keys.PrismKey> next to the file name will select that file to be shown in the preview window and will show as red when currently playing.

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual files allows access to the following actions:

- **Hide** or **Show** to minimise the files view / details.
- **Rename** to set the file's tag name, to be used when sending to the encoder.
- **Remove** to delete the file from the **Playlist**.

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> button at the top of the **Playlist** will affect all selected files.

The order of the files in the playlist can be changed by draging the entry up or down the list.

![Send to Encoder](/prismdocs/images/sendtoencoder.png)

After any adjustments, when the media is ready to export, pressing the **Send To Encoder** button will send all selected files into the **Encoder** Area. All details from the media files will be preserved and setup automatically to encode into the **AIM** codec. If the media file has been renamed this will also be used to set the output file name when encoding.

### Import & Export

Playlists are able to be imported and exported from the application by clicking `Edit > Import / Export` from the header menu. The dialog defaults its location to the Windows Documents Folder under `Avolites > Prism > Player`.
