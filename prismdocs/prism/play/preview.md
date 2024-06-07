---
id: preview
title: Preview
sidebar_label: Preview
---

import Keys from '@site/src/components/key.ts';

After opening the **Preview**, as described in the [Bank](../prism/play/bank) page of this manual. A new window will popup with a preview of the media you have selected along with player controls, such as seeking, setting the play mode, muting and trimming the media.

Previewing media also allows for adjustments to be made to the properties of individual bank elements, setting values on the following areas to the right side of the window:

- [Playback](./preview#playback)
- [Player Controls](./preview#player-controls)
- [Colour Correction](./preview#colour-correction)
- [Transformation](./preview#Transformation)

![Prism Zero Preview Window](/prismdocs/images/prism-preview.png)

## Adjustments

Any adjustment made will directly change the bank element properties and then can be played with those settings either via playing the same element on the bank again or selecting <Keys.PrismKey>Send to Player</Keys.PrismKey>. 

*Note: A layer must be selected in order to play an elements.*

### Playback

This area control the **Playback** options, which are set on the bank element.

![Preview Playback Area](/prismdocs/images/preview-playback.png)

The below table describes what each of the options do:

|   Feature     |  Note      |
|---------------|------------|
| **Bank**      | Select a bank to then select a bank element     |
| **Element**   | Selecting a bank element will preview that bank element |
| **Intensity** | Adjusting this will set the opacity of the bank element |
| **Volume/Mute** | Adjusting this will set the volume of the bank element  |

### Player Controls

This area controls the **Player Controls** options, which are set on the bank element.

The **Player Controls** has check boxes against its properties so that users can define whether to use the bank element value or the one that is currently on the layer that it will play on.

![Preview Player Controls Area](/prismdocs/images/preview-player-controls.png)

The below table describes what each of the options do:

|   Feature                    |  Note     |
|------------------------------|---------- |
| **Cross Fade Duration**      | Sets the Cross Fade Duration of the bank element  |
| **Play Mode**                | Sets the Play mode of the bank element   |
| **Aspect Mode**              | Sets the Aspect Mode of the bank element |
| **Trim In**                  | Sets the Trim In of the bank element     |
| **Trim Out**                 | Sets the Trim Out of the bank element    |
| **Speed**                    | Sets the Speed of the bank element       | 


### NDI Input Settings (Prism Only)

![Preview NDI Input Settings](/prismdocs/images/preview-ndi-settings.png)

|   Feature      |  Note   |
|----------------|---------|
| **NDI Source** | A drop down list of all active NDI sources on your network|
| **Refresh**    | Click to check for newly available ndi sources |
| **Status**     | Shows the connection status to the ndi source, stream will only display if active |

### Live Input Settings (Prism Only)

![Preview Live Input Settings](/prismdocs/images/preview-live-settings.png)

|   Feature  |  Note   |
|------------|---------|
| **Source** | A drop down list of valid usb devices to use for video streaming, if it supports DirectShow |
| **Status** | Shows the connection status to the usb device, will only display if active |

### Virtual Return Settings (Prism Only)

![Preview Virtual Return Settings](/prismdocs/images/preview-virtual-return-settings.png)

|   Feature      |  Note   |
|----------------|---------|
| **Surface** | A drop down list of all surfaces add to **Prism**. |
| **Layer**    | Which layer to use as a source. This can help link layers and have different layer properties. |



### Colour Correction

This area controls the **Colour Correction** options, which are set on the bank element

![Preview Playback Area](/prismdocs/images/preview-colour-correction.png)

The below table describes what each of the options do:

|   Feature      |  Note      |
|----------------|------------|
| **Red**        | Sets the Red Channel of the bank element |
| **Green**      | Sets the Green Channel of the bank element|
| **Blue**       | Sets the Blue Channel of the bank element |
| **Hue Offset** | Sets the Hue Offset of the bank element |
| **Saturation** | Sets the Saturation of the bank element |
| **Contrast**   | Sets the Contrast of the bank element |
| **Gamma**      | Sets the Gamma of the bank element |

### Transformation

This area controls the **Transformation** options, which are set on the bank element

![Preview Playback Area](/prismdocs/images/preview-transformation.png)

The below table describes what each of the options do:

| <p style={{width: '100px', margin: '0'}}>Feature</p> |  Note |
|-----------------|------------|
| **Scale X**     | Sets the Scale X (horizontal scale) of the bank element, in relation to the surface size. This can be aspect ratio locked with *Scale Y* |
| **Scale Y**     | Sets the Scale Y (vertical scale) of the bank element, in relation to the surface size. This can be aspect ratio locked with *Scale X* |
| **Translate X** | Sets the Translate X (horizontal position) of the bank element, in relation to the surface size |
| **Translate Y** | Sets the Translate Y (vertical position) of the bank element, in relation to the surface size |
| **Rotate X**    | Sets the Rotate X (x axis) of the bank element, in relation to the surface |
| **Rotate Y**    | Sets the Rotate Y (y axis) of the bank element, in relation to the surface |
| **Rotate Z**    | Sets the Rotate Z (z axis) of the bank element, in relation to the surface |
