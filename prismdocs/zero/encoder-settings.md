---
id: encoder-settings
title: Encoder Settings
sidebar_label: Encoder Settings
---

import Keys from '@site/src/components/prism_key.ts';

The **Encoder Settings** section let users specify the settings to be applied on an encodelist item.
It is accesible by left clicking the <Keys.ContextKey>sub menu</Keys.ContextKey> icon next to the encodelist item name and then clicking on **Settings**.
The results of these settings will be applied to the file once you press **Back** to the **Encoder** area and then [transcode](encoder.md#transcoding) the item.

## File settings

### File name
Is the name assigned to the encoded item after transcoding. It can be modified either by double-clicking in the name box or by clicking the <Keys.ContextKey>edit</Keys.ContextKey> icon.

### File output folder
Is the destination folder of the transcoded file. It can be modified by clicking the <Keys.ContextKey>folder</Keys.ContextKey> icon. The default value of the destination folder is the one selected in the general [settings](settings.md#encoder) encoder tab.

## Video settings 

### Match Source

![Match Source Button](/prismdocs/images/match_source.png "Match Source Button") 

This button will set both video and audio settings to match those of the original file. Any change to audio and video settings will be reverted when pressing the button.

### AiM SubCodec
Selection of the AiM SubCodec:
* Super Stream - Highest quality image and best playback performance
* Performance – Produces the smallest files but can suffer on complex imagery
* Quality - Medium quality image, variable file size depending on content

### Resolution Preset
It is possible to choose the video resolution from standard formats. Selecting a preset will override custom video width and height values.

### Output Width
Custom video width. 

### Output Height
Custom video height. 

**Width** and **Height** values can be linked / unlinked by clicking on the <Keys.ContextKey>lock</Keys.ContextKey> / <Keys.ContextKey>unlock</Keys.ContextKey> icon.

* When <Keys.ContextKey>lock</Keys.ContextKey> icon is shown **Width** and **Height** will always maintain relative size according to the aspect ratio of the **Width** and **Height** set as the lock is pressed - if one value is adjusted, the other will change accordingly.
* When <Keys.ContextKey>unlock</Keys.ContextKey> icon is shown **Width** and **Height** can be individually set regardless of the resulting aspect ratio of the cropped area.

### Frame Rate
Custom frame rate.

### Preserve Alpha
Ticking the box will include an Alpha Channel in the 
render. Adding an alpha channel will increase the file size by approximately 33%.

## Audio settings

### Encode Audio
Ticking the box will include audio in the transcoding process.

### Sample Rate
Sample rate can be set between:

* 44.1 kHz
* 44.8 kHz

### Channels
Channel configuration can be set between:

* Mono
* Stereo
* 5.1 
* 7.1

### Bit Depth
Bit depth can be set between:

* 8
* 16
* 24
* 32

*Note: The higher the bit rate, the greater the detail and dynamic range of the audio.*

## Trim Media

To adjust trim points press the **Trim Media** button at the bottom of the section.

![Trim Button](/prismdocs/images/trim.png "Trim Button")

Trim values can be manually entered into both the Trim IN Point and Trim OUT Point boxes either by typing the value or using the arrow keys in the current fields.

The total duration of the exported clip will be calculated as the difference between Trim OUT Point and Trim IN Point.

*Note: The new duration may not exceed the duration of the source media and the Out Point will always have an higher milliseconds value than the In Point.

## Crop Video

To set a crop area press the the **Crop Video** button at the bottom.

![Crop Button](/prismdocs/images/crop.png "Crop Button") 

* **X** and **Y** specifies the starting pixel for the top left corner of the cropping area to be drawn from.
* **Width** and **Height** sets the size of the area to be cropped based on the source resolution of the media, starting from the specified **X** and **Y** values. This is automatically calculated as the **X** and **Y** positions are increased.

*Note: It is not possible to exceed the source resolution width and height.*

**Width** and **Height** values can be linked / unlinked by clicking on the <Keys.ContextKey>lock</Keys.ContextKey> / <Keys.ContextKey>unlock</Keys.ContextKey> icon.

* When <Keys.ContextKey>lock</Keys.ContextKey> icon is shown **Width** and **Height** will always maintain relative size according to the aspect ratio of the **Width** and **Height** set as the lock is pressed - if one value is adjusted, the other will change accordingly.
* When <Keys.ContextKey>unlock</Keys.ContextKey> icon is shown **Width** and **Height** can be individually set regardless of the resulting aspect ratio of the cropped area.