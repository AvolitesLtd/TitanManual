---
id: mediaplayer
title: Media Player
sidebar_label: Media Player
---

import Keys from '@site/src/components/key.ts';

## Playback

**Prism Player** allows you to playback **H264**, **ProRes**, **NotchLC**, **HAP** & **AiM** files outside of **Avolites AI** as well as check any parameters of the files before sending them to the Encoder.

Both *SDR* and *HDR* colour spaces are supported for playback, with *HDR* requiring support from the codec in use, such as **NotchLC**. 

**Prism Player** uses the **FFMPEG** library for video decoding, which provides broad support for many different codecs. **AiM** decoding is hardware accelerated so it is advisable to make sure the most suitable GPU is selected in the **General Section** on the **Settings** page.

![Prism Player Media Player](/prismdocs/images/player-mediaplayer.png)

## Play Bar
This area allows control of te meida currently being played, it consists for the following components:

- Play Mode: Determines how files are played—either once, in a loop (as a bank), or shuffled.
- Playhead: Displays the current position within the file. You can manually scrub through the media by dragging the playhead along the timeline.
- Clear: Unloads the media from the player, clearing the canvas.
- Volume Control: Adjusts the application’s volume.
- FullScreen: Toggle on and off fullscreen mode.

## Header Menu
Further controls can be found in the main header:

![Prism Player Header Menu](/prismdocs/images/player-mediaplayer-header-menu.png)

- Aspect Mode can change the way the media is viewed on the canvas
- Under the **Video** menu a reference grid can be activated and overlays on top of the media.
- If the video has alpha, then transparency Preview can be enabled to show a checkerboard in the transparent areas.
- The application can be taken in and out of fullscreen mode by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the _Esc_ button on your keyboard.

## Adding Media

Media can be added and played using several different methods:

- Selecting file(s) in your file explorer and dragging them onto the _"Drag drop or select"_ icon in the **Bank** area or at the bottom of the UI.
- Pressing the _"Select Files"_ button in the **Bank** or **Encoder** area.
- Dragging a file onto the **Media Player** will automatically add the video to the Bank and begin playing.

**Prism Player** will save all files to a standard default location `Documents > Avolites > Prism > Player` unless individually specified within the settings of any **Encoder Element**. The path of this folder can be changed in the **Encoder section** of the **Settings Page**.

## Shortcuts

| **Functionality**   | **Shortcut**              |
| ------------------- | ------------------------- |
| Play / Pause        | `spacebar`                |
| Seek Forward / Back | `left & right arrows`     |
| Volume Controls     | `standard volume buttons` |
