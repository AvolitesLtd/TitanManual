---
id: encode-options
title: Encode Options
sidebar_label: Encode Options
---

import Keys from '@site/src/components/key.ts';

This section let users specify the settings to be applied on an Encode List item.
It is accessible by selecting an element or by left clicking the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon next to the Encode List item name and then clicking on **Settings**.  
The results of these settings will be applied once the item is encoded.

![Encode Options](/prismdocs/images/{{PRISM-APP-LOWER}}-encode-options.png)

| <p style={{width: '150px'}}>Feature</p> | Description |
|-|-|
| **Reset to Default** | This button will reset all settings to default value. |
| **Match Source** | This button will set the following settings to match those of the source media file: <br/><br/> - Resolution Preset <br/> - Output Width <br/> - Output Height <br/> - Frame Rate <br/> - Sample Rate <br/> - Bit Depth <br/><br/> Any user changes to the audio and video settings will be discarded when pressing this button. |
| **File Name** | Is the name assigned to the encoded item after encoding. It can be modified by double-clicking in the name box. |
| **Output Folder**| Is the destination folder of the encoded file. It can be modified by clicking the <Keys.PrismKey>Change Folder</Keys.PrismKey> button. <br/><br/> The default value of the destination folder is the one selected in the [Settings > Encoder](../settings/settings-encoder.md) tab. |
| **Related Bank**  (Prism Only)| This is the destination Bank for the encoded media. If the element is sent to the encoder through the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button in **Banks**, then this value will be defaulted to the bank from which the element has been sent. |
| **AiM SubCodec** | Selection of the AiM SubCodec: <br/><br/> - **Super Stream**: Highest quality image and best playback performance. <br/> - **Performance**: Produces the smallest files but can suffer on complex imagery. <br/> - **Quality**: Medium quality image, variable file size depending on content. |
| **Resolution Preset** | It is possible to choose the video resolution from a selection of standard formats. Selecting a preset will override any user width and height values. |
| **Output Width** | User definable horizontal size in pixels. <br/><br/> Width and Height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon. <br/><br/> When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, Width and Height will always maintain relative size according to the aspect ratio of the Width and Height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  <br/><br/> When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, Width and Height can be individually set regardless of the resulting aspect ratio. |
| **Output Height** | User definable vertical size in pixels. <br/><br/> Width and Height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon. <br/><br/> When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, Width and Height will always maintain relative size according to the aspect ratio of the Width and Height set as the lock is pressed - if one value is adjusted, the other will change accordingly. <br/><br/>  When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, Width and Height can be individually set regardless of the resulting aspect ratio. |
| **Frame Rate** | User definable frame rate in frames per second. |
| **Preserve Alpha** | Ticking the box will include an Alpha Channel in the render. Adding an alpha channel will increase the file size by approximately 33%. An Alpha Channel may only be included in the exported file if the source file contains Alpha data. |
| **Encode Audio** | Ticking the box will include the specified number of audio channels in the exported file. |
| **Sample Rate** | Sample rate can be set to either: <br/><br/> - 44100 Hz <br/> - 48000 Hz |
| **Channels** | The following channel configurations are supported: <br/><br/> - Mono <br/> - Stereo <br/> - 5.1 <br/> - 7.1 <br/><br/> Prism can only convert existing audio channels, it cannot alter the amount of channels in the source file. |
| **Bit Depth** | Bit depth can be set between: <br/><br/> - 8 bits <br/> - 16 bits <br/> - 24 bits <br/> - 32 bits <br/><br/> The higher the bit rate, the greater the detail and dynamic range of the audio. |

### Trim Media

To adjust trim points press the <Keys.PrismKey>Trim</Keys.PrismKey> button at the bottom of the panel.

![Encode Options Trim](/prismdocs/images/encode-options-trim.png)

Trim values can be manually entered into both the Trim IN Point and Trim OUT Point boxes either by typing the value or using the arrow keys in the current fields.

The total duration of the exported clip will be calculated as the difference between Trim OUT Point and Trim IN Point.

\*Note: The new duration may not exceed the duration of the source media and the Out Point will always have a higher millisecond value than the In Point.

### Crop Media

To set a crop area press the the <Keys.PrismKey>Crop</Keys.PrismKey> button at the bottom of the panel.

![Encode Options Crop](/prismdocs/images/encode-options-crop.png)

- **X** and **Y** specifies the starting pixel for the top left corner of the cropping area to be drawn from.
- **Width** and **Height** sets the size of the area to be cropped, starting from the specified **X** and **Y** values.

_Note: It is not possible to crop the exported file beyond the width and height of the source file._

**Width** and **Height** values can be linked / unlinked by clicking on the <Keys.PrismKey>lock</Keys.PrismKey> / <Keys.PrismKey>unlock</Keys.PrismKey> icon.

- When <Keys.PrismKey>lock</Keys.PrismKey> icon is shown **Width** and **Height** will always maintain relative size according to the current aspect ratio of the **Width** and **Height**. If one value is adjusted, the other will change accordingly.
- When <Keys.PrismKey>unlock</Keys.PrismKey> icon is shown **Width** and **Height** can be individually set regardless of the resulting aspect ratio of the cropped area.
