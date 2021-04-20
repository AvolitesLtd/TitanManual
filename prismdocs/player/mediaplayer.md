---
id: mediaplayer
title: Media Player
sibebar-label: Media Player
---

### Playback

**Prism Player** allows you to playback **H264**, **Prores** & **AiM** files outside of **Avolites AI** as well as check any parameters of the files before sending them to the Encoder.

**Prism Player** uses the **FFMPEG** library for video decoding, which provides broad support for many different codecs. **AiM** decoding is hardware accelerated so it is advisable to make sure the most suitable GPU is selected in the **General Section** on the **Settings** page.

The right side of the interface is the **Preview Area** of the application.

At the bottom of the **Preview Area** there are options to control the playback of the preview: 

![Play Bar](/prismdocs/images/playhead.png "Play Bar")

* Whether files should play once, loop as a playlist or shuffle
* A playhead to show the current position within the file. This can be scrubbed manually by dragging the playhead along the timeline. The playhead can be controlled from the bottom of the screen when in fullscreen mode.
* Pressing <i className="icon icon-scissors-2"></i> will give you the ability to set the currently playing media's playback trim in and out points.
* Application volume control.
* Two red dots denote the trim in and out points.

Further controls can be found in the main header:
* Under the **Video** menu a reference grid can be activted to be overlayed on top of the media.
* If the video has alpha then this can also be activated to sure a checkerboard in the transparent areas.
   
* The application can be taken in and out of fullscreen mode by pressing <i className="icon icon-scale-up"></i>. Fullscreen mode can be exited either by pressing <i className="icon icon-scale-up"></i> at the top right of the screen or by using the *Esc* button on your keyboard.

### Adding Media

Media can be added and played using several different methods: 

- Selecting file(s) in your file explorer and dragging them onto the *"Drag drop or select"* icon in the **Playlist** or **Encoder** area or at the bottom of the UI
- Pressing the *"Select Files"* button in the **Playlist** or **Encoder** area
- Dragging a file into the **Preview Area** area will automatically add the video to the playlist and begin playing
  
**Prism Player** will save all files to a standard default location `Documents > Avolites > Prism > Player` unless individually specified within the settings of any **Encoder Element**. The path of this folder can be changed in the **Encoder section** of the **Settings Page**.

## Shortcuts

| **Functionality** | **Shortcut** |
|-|-|
| Play / Pause | `spacebar` | 
| Seek Forward / Back (5 seconds) | `left & right arrows` |
| Volume Controls | `standard volume buttons` |