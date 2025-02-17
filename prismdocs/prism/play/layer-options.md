---
id: layer-options
title: Layer Options
sidebar_label: Layer Options
---

import Keys from '@site/src/components/key.ts';

Similar to the [Preview](../quick-start/preview.md#adjustments) adjustments, the layer options have the same four sections: 

- [Playback](#playback)
- [Player Controls](#player-controls)
- [Colour Correction](#colour-correction)
- [Transformation](#transformation)

**Layer Options** allows adjustments to be made to the layer properties and can be controlled either directly from the UI or remotely by connecting with **Synergy**.

![Prism Layer Controls](/prism-images/play/layer-controls/prism-layer-controls.png)

### Reset to Default

**Reset To Default** is a quick way to reset all of the user adjusted parameters, just as a locate or home button would do on a console.

### Sync to DMX

When **Prism** is being controlled from a lighting console using **Synergy**, there might be an occasion where a quick adjustment of the parameters in the **Prism**'s user interface can be preferable. This can result in a mismatch between the values on the console and within the interface.

The **Sync to DMX** feature is used to allow the Prism UI controls to immediately adjust to the most recently received values from the console. This can be used anytime the UI needs to be kept in line with the external device values.

*Note: Instructions for setting up a **Synergy** Connection can be found on the [settings](../settings/settings-synergy.md)*

## Adjustments

Any adjustment made will directly change the layer properties, triggering a bank element may override this, if any changes were made in the [Preview](../quick-start/preview.md).

### Playback

This area control the **Playback** options, which are set on the bank element.

![Layer Options Playback Area](/prism-images/play/layer-controls/playback.png)

The below table describes what each of the options do:

|   Feature     |  Note      |
|---------------|------------|
| **Bank**      | Select a bank to then select a bank element to play elements on a layer |
| **Element**   | Selecting a bank element will play that element on the layer |
| **Intensity** | Adjusting this will set the opacity of the layer |
| **Volume/Mute** | Adjusting this will set the volume of the layer  |

### Player Controls

This area controls the **Player Controls** options, which are set on the layer.

The **Player Controls** has check boxes against its properties so that users can define whether to use the bank element value or the one that is currently on the layer that it will play on.

![Layer Options Player Controls Area](/prism-images/play/layer-controls/player-controls.png)

The below table describes what each of the options do:

|   Feature                    |  Note     |
|------------------------------|---------- |
| **Cross Fade Duration**      | Sets the Cross Fade Duration of the layer  |
| **Play Mode**                | Sets the Play Mode of the layer, they are: <br/><br/> - **Play List** - Play through all the media in the bank that the current element belongs to. <br/> - **Loop** - Continuously play the same media element <br/> - **Shuffle** - Randomly select and play media from the bank that the element belongs to. <br/> - **Play Once** - Play the media once and then display the last frame. <br/> - **Pause** - Stay on the current frame <br/> - **In Frame** - Display the first frame <br/> - **Out Frame** - Display the last frame |
| **Aspect Mode**              | Sets the Aspect Mode of the layer, they are: <br/><br/> - **Fit** - Adjust the media to fit within the surface while maintaining its original aspect ratio <br/> - **Box** - Display the media in a box format, adding black bars to maintain the original aspect ratio -  <br/> - **Center** - Center the media on the surface without scaling it, showing it at its original size . <br/> - **Window** - Adjust the video to fit the entire screen, potentially altering the aspect ratio |
| **Trim In**                  | Sets the Trim In of the layer     |
| **Trim Out**                 | Sets the Trim Out of the layer    |
| **Speed**                    | Sets the Speed of the layer       | 

### Colour Correction

This area controls the **Colour Correction** options, which are set on the layer

![Layer Options Playback Area](/prism-images/play/layer-controls/colour-correction.png)

The below table describes what each of the options do:

|   Feature      |  Note        |
|----------------|------------|
| **Red**        | Sets the Red Channel of the layer |
| **Green**      | Sets the Green Channel of the layer|
| **Blue**       | Sets the Blue Channel of the layer |
| **Hue Offset** | Sets the Hue Offset of the layer |
| **Saturation** | Sets the Saturation of the layer |
| **Contrast**   | Sets the Contrast of the layer |
| **Gamma**      | Sets the Gamma of the layer |

### Transformation

This area controls the **Transformation** options, which are set on the layer

![Layer Options Playback Area](/prism-images/play/layer-controls/transformation.png)

The below table describes what each of the options do:

| <p style={{width: '100px', margin: '0'}}>Feature</p> |  Note |
|-----------------|------------|
| **Scale X**     | Sets the Scale X (horizontal scale) of the layer, in relation to the surface size. <br/> When pressing the <Keys.PrismKey>Lock</Keys.PrismKey> icon this will be aspect ratio locked with *Scale Y* . <br/> When pressing the <Keys.PrismKey>Unlock</Keys.PrismKey> icon this will be set independently from *Scale Y* |
| **Scale Y**     | Sets the Scale Y (vertical scale) of the layer, in relation to the surface size. <br/> When pressing the <Keys.PrismKey>Lock</Keys.PrismKey> icon this will be aspect ratio locked with *Scale X* . <br/> When pressing the <Keys.PrismKey>Unlock</Keys.PrismKey> icon this will be set independently from *Scale X*|
| **Translate X** | Sets the Translate X (horizontal position) of the layer, in relation to the surface size |
| **Translate Y** | Sets the Translate Y (vertical position) of the layer, in relation to the surface size |
| **Rotate X**    | Sets the Rotate X (x axis) of the layer, in relation to the surface |
| **Rotate Y**    | Sets the Rotate Y (y axis) of the layer, in relation to the surface |
| **Rotate Z**    | Sets the Rotate Z (z axis) of the layer, in relation to the surface |