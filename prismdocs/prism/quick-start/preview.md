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
| **Bank**      | Select a bank to then select a bank element to play elements on the preview |
| **Element**   | Selecting a bank element will play that element on the the preview |

### Reset to Default

**Reset To Default** is a quick way to reset all of the user adjusted parameters, just as a locate or home button would do on a console.

### Send to Layers

Adjustments made here will be applied to all **Layers**, which play this **Bank Element**

## Playback

The **Playback** controls the intensity / volume of a bank element playing on a layer.

![Preview Playback Area](/prism-images/preview/preview-playback.png)

|   Item     |  Description      |
|---------------|------------|
| **Intensity** | Adjusting this will set the opacity of the bank element |
| **Volume/Mute** | Adjusting this will set the volume of the bank element  |

## Player Controls

This area controls the **Player Controls** options, which are set on the bank element.

![Preview Player Controls Area](/prism-images/preview/preview-player-controls.png)

The **Player Controls** have check boxes against their properties, so that users can define whether to use the bank element value or the one that is currently on the layer that it will play on.

|   Item                   |  Description     |
|--------------------------|----------|
| **Cross Fade Duration**  | Sets the Cross Fade Duration of the bank element  |
| **Play Mode**            | Sets the Play Mode of the bank element, they are: <br/><br/> - **Play List** - Play through all the media in the bank that the current element belongs to. <br/> - **Loop** - Continuously play the same media element <br/> - **Shuffle** - Randomly select and play media from the bank that the element belongs to. <br/> - **Play Once** - Play the media once and then display the last frame. <br/> - **Pause** - Stay on the current frame <br/> - **In Frame** - Display the first frame <br/> - **Out Frame** - Display the last frame |
| **Aspect Mode** | Sets the Aspect Mode of the bank element, ready to override the layer, if checked. <br/><br/> - **Fit** - Adjust the media to fit within the surface while maintaining its original aspect ratio <br/> - **Box** - Display the media in a box format, adding black bars to maintain the original aspect ratio - <br/> - **Center** - Center the media on the surface without scaling it, showing it at its original size . <br/> - **Window** - Adjust the video to fit the entire screen, potentially altering the aspect ratio |
| **Trim In**   | Sets the Trim In of the bank element     |
| **Trim Out**  | Sets the Trim Out of the bank element    |
| **Speed**     | Sets the Speed of the bank element       | 

## Crop

This area controls the **Crop** of the bank element.

![Layer Controls Crop Area](/prism-images/play/layer-controls/crop-controls.png)

|  Item  |  Description |
|------------|--------------|
| **Left**   | Sets the percentage of cropping on the left side of the preview |
| **Right**  | Sets the percentage of cropping on the right side of the preview |
| **Top**    | Sets the percentage of cropping on the top side of the preview  |
| **Bottom** | Sets the percentage of cropping on the bottom side of the preview |

## NDI Input

![Preview NDI Input](/prism-images/preview/preview-ndi-settings.png)

|   Item      |  Description   |
|----------------|---------|
| **NDI Source** | A drop-down list of all active NDI sources on your network |
| **Refresh**    | Click to check for newly available NDI sources |
| **Status**     | Shows the connection status to the NDI source, stream will only display frames when active |

## Live Input

![Preview Live Input](/prism-images/preview/preview-live-settings.png)

|   Item  |  Description   |
|------------|---------|
| **Source** | A drop-down list of valid capture devices for video streaming, if they are compatible with DirectShow |
| **Status** | Shows the connection status to the capture device, will only display frames when active|

## Virtual Return

![Preview Virtual Return](/prism-images/preview/preview-virtual-return-settings.png)

|   Item      |  Description   |
|----------------|---------|
| **Source** | A drop-down list of all Surfaces and Layers on  **Prism**|

## Colour Correction

This area controls the **Colour Correction** options, which are set on the bank element

![Preview Playback Area](/prism-images/preview/preview-colour-correction.png)

The below table describes what each of the options do:

|   Item      |  Description      |
|----------------|------------|
| **Red**        | Sets the Red Channel of the bank element |
| **Green**      | Sets the Green Channel of the bank element|
| **Blue**       | Sets the Blue Channel of the bank element |
| **Hue Offset** | Sets the Hue Offset of the bank element |
| **Saturation** | Sets the Saturation of the bank element |
| **Contrast**   | Sets the Contrast of the bank element |
| **Gamma**      | Sets the Gamma of the bank element |

## Transformation

This area controls the **Transformation** options, which are set on the bank element

![Preview Playback Area](/prism-images/preview/preview-transformation.png)

| <p style={{width: '100px', margin: '0'}}>Item</p> |  Description |
|-----------------|------------|
| **Scale X**     | Sets the Scale X (horizontal scale) of the bank element, in relation to the surface size. <br/> <Keys.PrismKey>Lock</Keys.PrismKey> will set either X or Y to the current aspect ratio. <br/> <Keys.PrismKey>Unlock</Keys.PrismKey> will set *Scale X* independently from *Scale Y* |
| **Scale Y**     | Sets the Scale Y (vertical scale) of the bank element, in relation to the surface size. <br/> <Keys.PrismKey>Lock</Keys.PrismKey> will set either X or Y to the current aspect ratio. <br/> <Keys.PrismKey>Unlock</Keys.PrismKey> will set *Scale X* independently from *Scale Y*|
| **Translate X** | Sets the Translate X (horizontal position) of the bank element, in relation to the surface size |
| **Translate Y** | Sets the Translate Y (vertical position) of the bank element, in relation to the surface size |
| **Rotate X**    | Sets the Rotate X (x axis) of the bank element, in relation to the surface |
| **Rotate Y**    | Sets the Rotate Y (y axis) of the bank element, in relation to the surface |
| **Rotate Z**    | Sets the Rotate Z (z axis) of the bank element, in relation to the surface |
