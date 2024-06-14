---
id: mediaplayer
title: Media Player
sidebar_label: Media Player
---

import Keys from '@site/src/components/key.ts';

## Playback

**Prism Player** allows you to playback **H264**, **ProRes**, **NotchLC**, **HAP** & **AiM** files outside of **Avolites Ai** as well as check any parameters of the files before sending them to the Encoder.

Both *SDR* and *HDR* colour spaces are supported for playback, with *HDR* requiring support from the codec in use, such as **NotchLC**. 

**AiM** decoding is hardware accelerated so it is advisable to make sure the most suitable GPU is selected in the **General Section** on the **Settings** page.

![Prism Player Media Player](/prismdocs/images/player-mediaplayer.png)

## Play Bar
This area allows control of te meida currently being played, it consists for the following components:

- Play Mode: Determines how files are played—either once, in a loop (as a bank), or shuffled.
- Playhead: Displays the current position within the file. You can manually scrub through the media by dragging the playhead along the timeline.
- Clear: Unloads the media from the player, clearing the canvas.
- Volume Control: Adjusts the application’s volume.
- FullScreen: Toggle on and off fullscreen mode.

## Shortcuts

| **Functionality**   | **Shortcut**              |
| ------------------- | ------------------------- |
| Play / Pause        | `spacebar`                |
| Seek Forward / Back | `left & right arrows`     |
| Volume Controls     | `standard volume buttons` |
