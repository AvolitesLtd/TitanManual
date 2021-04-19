---
id: playlist
title: Playlist
sibebar-label: Playlist
---

The **Playlist** allows you to curate, name and order a list of different media types for playback within the media player and to prepare media files for encoding.

When a piece of media is loaded into the **Playlist**, several details about the file are shown: 

<!-- <img style="max-width:340px" src="./assets/images/docs-images/playlist%20details.png" width="90%"/>  -->

* The name and path of the file
* The current video codec of the file and whether it has alpha
* The resolution, frame rate, length and size of the file
* The current audio codec in use
* The location of the file, which can be directly accessed by clicking the address

The selection box at the top of the list can be used to select or deselect all of the files in the playlist. It also provides feedback on how many files are currently selected.

The selection box to the left of the file name determines if certain global actions are taken with the specific file, such as sending to the encoder, showing or hiding the file details or removing the selected media from the playlist.

Pressing <i className="icon icon-button-play"></i> next to the file name will select that file to be shown in the preview window and will show as red when currently playing. 

Pressing <i className="icon icon-menu-dots"></i> on individual files allows you to **Hide** or **Show**, **Rename** will allow the file to have a tag name or **Remove** it from the **Playlist**. Pressing this button at the top of the **Playlist** will affect all selected files. Hiding files will display the element in one line and may help to view lots of files in the list.

The order of the files in the playlist can be changed by draging the entry up or down the list.  

<!-- <img style="max-width:140px" src="./assets/images/docs-images/sendtoencoder.png" width="90%"/>  -->

After any adjustments, when the media is ready to export, pressing the **Send To Encoder** button will send all selected files into the **Encoder** Section. All details from your media files will be preserved and setup automatically to encode into the **AIM** codec. If you have renamed your media this will also be used to set the output file name when encoding.

### Import & Export

Playlists are able to be imported and exported from the application by clicking `Edit > Import / Export` from the header menu. The dialog defaults its location to the Windows Documents Folder under `Avolites > Prism > Player`. Here you will find other documents such as application logs encodelists and project files.
