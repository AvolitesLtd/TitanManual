---
id: preview
title: Preview
sidebar_label: Preview
---

import Keys from '@site/src/components/key.ts';

The **Preview** window allows for adjustments to be made to the properties of individual bank elements, setting values on the following areas to the right side of the window:

- [Playback](#playback)
- [Player Controls](#player-controls)
- [Crop Controls](#crop)
- [Colour Correction](#colour-correction)
- [Transformation](#transformation)

**Preview** can be accessed by the [Bank](../../prism/play/banks.md) view or the [Main Menu](./navigation.md/#view).

Any adjustment made will directly change the bank element properties and then can be played with those settings either via playing the same element on the bank again or selecting <Keys.PrismKey>Send to Layers</Keys.PrismKey>. 

![Prism Preview Window](/prism-images/preview/preview_window.png)

### Bank / Element

Media stored in a bank can be previewed.

|   Item    |  Description  |
|---------------|------------|
| **Bank**      | Select a Bank. |
| **Element**   | Select a Bank Element to Preview. |

### Reset to Default

**Reset To Default** is a quick way to reset all of the user adjusted parameters, just as a locate or home button would do on a console.

### Send to Layers

Adjustments made here will be applied to all **Layers**, which play this **Bank Element**

## Playback

The **Playback** controls the intensity / volume of a Bank Element playing on a layer.

![Preview Playback Area](/prism-images/preview/preview-playback.png)

|   Item     |  Description      |
|---------------|------------|
| **Intensity (%)** | Intensity sets the opacity of the Bank Element. |
| **Volume (%) / Mute** | Volume of the Bank Element. Whether Bank Element is muted. |

## Player Controls

This area controls the **Player Controls** options, which are set on the Bank Element.

![Preview Player Controls Area](/prism-images/preview/preview-player-controls.png)

The **Player Controls** have check boxes against their properties, so that users can define whether to use the Bank Element value or the one that is currently on the layer that it will play on.

|   Item                   |  Description     |
|--------------------------|----------|
| **Cross Fade Duration**  | Cross Fade Duration of the Bank Element. |
|  **Play Modes** | <Keys.PrismKey>Play List</Keys.PrismKey> - Play through all the media in the bank that the current element belongs to. <br/> <Keys.PrismKey>Loop</Keys.PrismKey> - Continuously play the same media element<br/><Keys.PrismKey>Shuffle</Keys.PrismKey> - Randomly select and play media from the bank that the element belongs to.<br/><Keys.PrismKey>Play Once</Keys.PrismKey> - Play the media once and then display the last frame.<br/><Keys.PrismKey>Pause</Keys.PrismKey> - Stay on the current frame.<br/> <Keys.PrismKey>In Frame</Keys.PrismKey> - Display the first frame.<br/> <Keys.PrismKey>Out Frame</Keys.PrismKey> - Display the last frame.|
| **Aspect Mode** | Aspect Mode of the bank element, ready to override the layer, if checked. <br/><br/> - **Fit** - Adjust the media to fit within the surface while maintaining its original aspect ratio <br/> - **Box** - Display the media in a box format, adding black bars to maintain the original aspect ratio - <br/> - **Center** - Center the media on the surface without scaling it, showing it at its original size . <br/> - **Window** - Adjust the video to fit the entire screen, potentially altering the aspect ratio |
| **Trim In (%)**   | Trim In of the Bank Element.     |
| **Trim Out (%)**  | Trim Out of the Bank Element.    |
| **Speed (%)**     | Speed of the Bank Element.       | 

## Crop

This area controls the **Crop** of the Bank Element.

![Layer Controls Crop Area](/prism-images/play/layer-controls/crop-controls.png)

|  Item  |  Description |
|------------|--------------|
| **Left (%)**   | Crop on the left side of the Bank Element. |
| **Right (%)**  | Crop on the right side of the Bank Element. |
| **Top (%)**    | Crop on the top side of the Bank Element.  |
| **Bottom (%)** | Crop on the bottom side of the Bank Element. |

## NDI Input

![Preview NDI Input](/prism-images/preview/preview-ndi-settings.png)

|   Item      |  Description   |
|----------------|---------|
| **NDI Source** | List of all active NDI sources on your network. |
| **Refresh**    | Click to check for newly available NDI sources. |
| **Status**     | Shows the connection status to the NDI source, stream will only display frames when active. |

## Live Input

![Preview Live Input](/prism-images/preview/preview-live-settings.png)

|   Item  |  Description   |
|------------|---------|
| **Source** | List of valid capture devices for video streaming, if they are compatible with DirectShow. |
| **Status** | Shows the connection status to the capture device, will only display frames when active. |

## Virtual Return

![Preview Virtual Return](/prism-images/preview/preview-virtual-return-settings.png)

|   Item      |  Description   |
|----------------|---------|
| **Source** | List of all Surfaces and Layers on  **Prism**.|

## Colour Correction

This area controls the **Colour Correction** options, which are set on the Bank Element

![Preview Playback Area](/prism-images/preview/preview-colour-correction.png)

The below table describes what each of the options do:

|   Item      |  Description      |
|----------------|------------|
| **Red (%)**        | Red Channel of the Bank Element. |
| **Green (%)**      | Green Channel of the Bank Element.|
| **Blue (%)**       | Blue Channel of the Bank Element. |
| **Hue Offset (&deg;)** | Hue Offset of the Bank Element. |
| **Saturation (%)** | Saturation of the Bank Element. |
| **Contrast (%)**   | Contrast of the Bank Element. |
| **Gamma (%)**      | Gamma of the Bank Element. |

## Transformation

This area controls the **Transformation** options, which are set on the Bank Element

![Preview Playback Area](/prism-images/preview/preview-transformation.png)

| <p style={{width: '100px', margin: '0'}}>Item</p> |  Description |
|-----------------|------------|
| **Scale X (%)**     | Scale X (horizontal scale) of the Bank Element, in relation to the surface size. <br/> <Keys.PrismKey>Lock</Keys.PrismKey> will set either X or Y to the current aspect ratio. <br/> <Keys.PrismKey>Unlock</Keys.PrismKey> will set *Scale X* independently from *Scale Y* |
| **Scale Y (%)**     | Scale Y (vertical scale) of the Bank Element, in relation to the surface size. <br/> <Keys.PrismKey>Lock</Keys.PrismKey> will set either X or Y to the current aspect ratio. <br/> <Keys.PrismKey>Unlock</Keys.PrismKey> will set *Scale X* independently from *Scale Y*|
| **Translate X (%)** | Translate X (horizontal position) of the Bank Element, in relation to the surface size |
| **Translate Y (%)** | Translate Y (vertical position) of the Bank Element, in relation to the surface size |
| **Rotate X (&deg;)**    | Rotate X (x axis) of the Bank Element, in relation to the Surface. |
| **Rotate Y (&deg;)**    | Rotate Y (y axis) of the Bank Element, in relation to the Surface. |
| **Rotate Z (&deg;)**    | Rotate Z (z axis) of the Bank Element, in relation to the Surface. |
