---
id: encoder-settings
title: Encoder Settings
sidebar_label: Encoder Settings
---

import Keys from '@site/src/components/key.ts';

The **Encoder Settings** section let users specify the settings to be applied on an encodelist item.
It is accesible by left clicking the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon next to the encodelist item name and then clicking on **Settings**.
The results of these settings will be applied to the file once you press **Back** to the **Encoder** area and then transcode the item.

## File settings

### File name

Is the name assigned to the encoded item after transcoding. It can be modified either by double-clicking in the name box or by clicking the <Keys.PrismKey>Edit</Keys.PrismKey> icon.

### File output folder

Is the destination folder of the transcoded file. It can be modified by clicking the <Keys.PrismKey>Folder</Keys.PrismKey> icon. The default value of the destination folder is the one selected in the general [settings](settings.md#encoder) encoder tab.

## Video settings

### Match Source

![Match Source Button](/prismdocs/images/match_source.png "Match Source Button")

This button will adjust both the video and audio settings to match those of the original file. Any user changes to the audio and video settings will be discarded when pressing th button.

### AiM SubCodec

Selection of the AiM SubCodec:

- Super Stream - Highest quality image and best playback performance
- Performance – Produces the smallest files but can suffer on complex imagery
- Quality - Medium quality image, variable file size depending on content

### Resolution Preset

It is possible to choose the video resolution from a selection of standard formats. Selecting a preset will override any user width and height values.

### Output Width

User definable horizontal size in pixels.

### Output Height

User definable vertical size in pixels.

**Width** and **Height** values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.

- When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, **Width** and **Height** will always maintain relative size according to the aspect ratio of the **Width** and **Height** set as the lock is pressed - if one value is adjusted, the other will change accordingly.
- When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, **Width** and **Height** can be individually set regardless of the resulting aspect ratio of the cropped area.

### Frame Rate

User definable frame rate in frames per second.

### Preserve Alpha

Ticking the box will include an Alpha Channel in the
render. Adding an alpha channel will increase the file size by approximately 33%. An Alpha Channel may only be included in the exported file if the source file contains Alpha data.

## Audio settings

### Encode Audio

Ticking the box will include the specified number of audio channels in the exported file.

### Sample Rate

Sample rate can be set to either:

- 44.1 kHz
- 44.8 kHz

### Channels

The following channel configurations are supported:

- Mono
- Stereo
- 5.1
- 7.1

_Note: Prism can only convert existing audio channels, it cannot alter the amount of channels in the source file._

### Bit Depth

Bit depth can be set between:

- 8
- 16
- 24
- 32

_Note: The higher the bit rate, the greater the detail and dynamic range of the audio._

## Trim Media

To adjust trim points press the **Trim Media** button at the bottom of the section.

![Trim Button](/prismdocs/images/trim.png "Trim Button")

Trim values can be manually entered into both the Trim IN Point and Trim OUT Point boxes either by typing the value or using the arrow keys in the current fields.

The total duration of the exported clip will be calculated as the difference between Trim OUT Point and Trim IN Point.

\*Note: The new duration may not exceed the duration of the source media and the Out Point will always have a higher millisecond value than the In Point.

## Crop Video

To set a crop area press the the **Crop Video** button at the bottom.

![Crop Button](/prismdocs/images/crop.png "Crop Button")

- **X** and **Y** specifies the starting pixel for the top left corner of the cropping area to be drawn from.
- **Width** and **Height** sets the size of the area to be cropped, starting from the specified **X** and **Y** values.

_Note: It is not possible to crop the exported file beyond the width and height of the source file._

**Width** and **Height** values can be linked / unlinked by clicking on the <Keys.PrismKey>lock</Keys.PrismKey> / <Keys.PrismKey>unlock</Keys.PrismKey> icon.

- When <Keys.PrismKey>lock</Keys.PrismKey> icon is shown **Width** and **Height** will always maintain relative size according to the current aspect ratio of the **Width** and **Height**. If one value is adjusted, the other will change accordingly.
- When <Keys.PrismKey>unlock</Keys.PrismKey> icon is shown **Width** and **Height** can be individually set regardless of the resulting aspect ratio of the cropped area.
