---
id: mediaplayer
title: Media Player
sidebar_label: Media Player
---

import Keys from '@site/src/components/key.ts';

### Playback

**Prism Player** allows you to playback **H264**, **ProRes**, **NotchLC**, **HAP** & **AiM** files outside of **Avolites AI** as well as check any parameters of the files before sending them to the Encoder.

Both SDR and HDR colour spaces are supported for playback, with HDR requiring support from the codec in use, such as NotchLC. 

**Prism Player** uses the **FFMPEG** library for video decoding, which provides broad support for many different codecs. **AiM** decoding is hardware accelerated so it is advisable to make sure the most suitable GPU is selected in the **General Section** on the **Settings** page.

The right side of the interface is the **Preview Area** of the application.

At the bottom of the **Preview Area** are options to control the playback:

![Play Bar](/prismdocs/images/playerplayhead.png)

- Whether files should play once, loop as a Bank or shuffle
- A playhead to show the current position within the file. This can be scrubbed manually by dragging the playhead along the timeline.
- Pressing <Keys.PrismKey>Trim</Keys.PrismKey> will give you the ability to set the currently playing media's playback trim in and out points.
- Application volume control.

These controls can also be accessed via the bank elements settings view which can be opened from the settings button next to the element. 

![Bank Element Settings](/prismdocs/images/bank_element_settings.png)

Further controls can be found in the main header:

- Under the **Video** menu a reference grid can be activted to be overlayed on top of the media.
- If the video has alpha then this can also be activated to sure a checkerboard in the transparent areas.
- The application can be taken in and out of fullscreen mode by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the _Esc_ button on your keyboard.

The bottom left of the interface is used to monitor machine performance by providing the current frames per second as well as CPU, RAM and VRAM of the computer.

![Performance Bar](/prismdocs/images/performance_bar.png)

### Adding Media

Media can be added and played using several different methods:

- Selecting file(s) in your file explorer and dragging them onto the _"Drag drop or select"_ icon in the **Bank** or **Encoder** area or at the bottom of the UI
- Pressing the _"Select Files"_ button in the **Bank** or **Encoder** area
- Dragging a file into the **Preview Area** area will automatically add the video to the Bank and begin playing

**Prism Player** will save all files to a standard default location `Documents > Avolites > Prism > Player` unless individually specified within the settings of any **Encoder Element**. The path of this folder can be changed in the **Encoder section** of the **Settings Page**.

## Shortcuts

| **Functionality**   | **Shortcut**              |
| ------------------- | ------------------------- |
| Play / Pause        | `spacebar`                |
| Seek Forward / Back | `left & right arrows`     |
| Volume Controls     | `standard volume buttons` |
