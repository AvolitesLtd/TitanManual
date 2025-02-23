---
id: preview
title: Preview
sidebar_label: Preview
---

import Keys from '@site/src/components/key.ts';

The **Preview** window allows for adjustments to be made to the properties of individual bank elements, setting values on the following areas to the right side of the window:

- [Playback](#playback)
- [Player Controls](#player-controls)
- [Colour Correction](#colour-correction)
- [Transformation](#transformation)

**Preview** can be accessed by the [Bank](../../zero/play/banks.md) view or the [Main Menu](./navigation.md/#view).

![Prism Zero Preview Window](/prismdocs/images/zero-preview.png)

The resolution of the Preview Window can be adjusted to easily preview media playback at a specific target resolution.

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

![Preview Player Controls Area](/prismdocs/images/preview-player-controls.png)

The **Player Controls** have check boxes against their properties, so that users can define whether to use the bank element value or the one that is currently on the layer that it will play on.

The below table describes what each of the options do:

|   Feature                    |  Note     |
|------------------------------|---------- |
| **Cross Fade Duration**      | Sets the Cross Fade Duration of the bank element  |
| **Play Mode**                | Sets the Play Mode of the bank element, ready to override the layer, if checked. <br/><br/> - **Play List** - Play through all the media in the bank that the current element belongs to. <br/> - **Loop** - Continuously play the same media element <br/> - **Shuffle** - Randomly select and play media from the bank that the element belongs to. <br/> - **Play Once** - Play the media once and then display the last frame. <br/> - **Pause** - Stay on the current frame <br/> - **In Frame** - Display the first frame <br/> - **Out Frame** - Display the last frame |
| **Aspect Mode** | Sets the Aspect Mode of the bank element, ready to override the layer, if checked. <br/><br/> - **Fit** - Adjust the media to fit within the surface while maintaining its original aspect ratio <br/> - **Box** - Display the media in a box format, adding black bars to maintain the original aspect ratio - <br/> - **Center** - Center the media on the surface without scaling it, showing it at its original size . <br/> - **Window** - Adjust the video to fit the entire screen, potentially altering the aspect ratio |
| **Trim In**                  | Sets the Trim In of the bank element     |
| **Trim Out**                 | Sets the Trim Out of the bank element    |
| **Speed**                    | Sets the Speed of the bank element       | 
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
