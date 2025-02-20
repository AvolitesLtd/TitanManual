---
id: layer-controls
title: Layer Controls
sidebar_label: Layer Controls
---

import Keys from '@site/src/components/key.ts';

**Layer Controls** allows adjustments to be made to the layer properties and can be controlled either directly from the UI or remotely by connecting with **Synergy**.

![Prism Layer Controls](/prism-images/play/layer-controls/layer-controls.png)

Similar to the [Preview](../quick-start/preview.md#adjustments) adjustments, the layer controls have the same four sections: 

- [Playback](#playback)
- [Player Controls](#player-controls)
- [Crop](#crop)
- [Colour Correction](#colour-correction)
- [Transformation](#transformation)
- [Rendering](#rendering)

Any adjustment made will directly change the layer properties, triggering a bank element may override this, if any changes were made in the [Preview](../quick-start/preview.md).

### Component
By selecting the *Surface* or *Layer* as a **Component**, you can view the corresponding controls. Each **Surface** and **Layer** has its own set of controls. [Surfaces](./surfaces.md) can be found here.

### Bank / Element

Media stored in a bank can be played on a layer.

|   Item    |  Description  |
|---------------|------------|
| **Bank**      | Select a bank to then select a bank element to play elements on a layer |
| **Element**   | Selecting a bank element will play that element on the layer |

### Reset to Default

**Reset To Default** is a quick way to reset all of the user adjusted parameters, just as a locate or home button would do on a console.

### Sync to DMX

When **Prism** is being controlled from a lighting console using **Synergy**, there might be an occasion where a quick adjustment of the parameters in the **Prism**'s user interface can be preferable. This can result in a mismatch between the values on the console and within the interface.

The **Sync to DMX** is used to allow the Prism UI controls to immediately adjust to the most recently received values from the console. This can be used anytime the UI needs to be kept in line with the external device values.

*Note: Instructions for setting up a **Synergy** Connection can be found on the [settings](../settings/settings-synergy.md)*

## Playback

The **Playback** controls, which are set on the bank element.

![Layer Controls Playback Area](/prism-images/play/layer-controls/playback.png)

|   Item    |  Description  |
|---------------|------------|
| **Intensity** | Adjusting this will set the opacity of the layer |
| **Volume/Mute** | Adjusting this will set the volume of the layer  |

## Player Controls

This area controls the **Player Controls** of the selected layer.

The **Player Controls** has check boxes against its properties so that users can define whether to use the bank element value or the one that is currently on the layer that it will play on.

![Layer Controls Player Controls Area](/prism-images/play/layer-controls/player-controls.png)

|   Item                   |  Description  |
|--------------------------|---------- |
| **Cross Fade Duration**  | Sets the Cross Fade Duration of the layer  |
| **Play Mode**            | Sets the Play Mode of the layer, they are: <br/><br/> - **Play List** - Play through all the media in the bank that the current element belongs to. <br/> - **Loop** - Continuously play the same media element <br/> - **Shuffle** - Randomly select and play media from the bank that the element belongs to. <br/> - **Play Once** - Play the media once and then display the last frame. <br/> - **Pause** - Stay on the current frame <br/> - **In Frame** - Display the first frame <br/> - **Out Frame** - Display the last frame |
| **Aspect Mode**          | Sets the Aspect Mode of the layer, they are: <br/><br/> - **Fit** - Adjust the media to fit within the surface while maintaining its original aspect ratio <br/> - **Box** - Display the media in a box format, adding black bars to maintain the original aspect ratio -  <br/> - **Center** - Center the media on the surface without scaling it, showing it at its original size . <br/> - **Window** - Adjust the video to fit the entire screen, potentially altering the aspect ratio |
| **Trim In**              | Sets the Trim In of the layer |
| **Trim Out**             | Sets the Trim Out of the layer |
| **Speed**                | Sets the Speed of the layer |

## Crop

This area controls the **Crop** of the selected layer

![Layer Controls Crop Area](/prism-images/play/layer-controls/crop-controls.png)

|  Item  |  Description |
|------------|--------------|
| **Left**   | Sets the percentage of cropping on the left side of the layer |
| **Right**  | Sets the percentage of cropping on the right side of the layer |
| **Top**    | Sets the percentage of cropping on the top side of the layer  |
| **Bottom** | Sets the percentage of cropping on the bottom side of the layer |

## Colour Correction

This area controls the **Colour Correction** of the selected layer.

![Layer Controls Playback Area](/prism-images/play/layer-controls/colour-correction.png)

|   Item      |  Description        |
|----------------|------------|
| **Red**        | Sets the Red Channel of the layer |
| **Green**      | Sets the Green Channel of the layer|
| **Blue**       | Sets the Blue Channel of the layer |
| **Hue Offset** | Sets the Hue Offset of the layer |
| **Saturation** | Sets the Saturation of the layer |
| **Contrast**   | Sets the Contrast of the layer |
| **Gamma**      | Sets the Gamma of the layer |

## Transformation

This area controls the **Transformation** of the selected layer.

![Layer Controls Playback Area](/prism-images/play/layer-controls/transformation.png)

| <p style={{width: '100px', margin: '0'}}>Item</p> |  Description |
|-----------------|------------|
| **Scale X**     | Sets the Scale X (horizontal scale) of the layer, in relation to the surface size. <br/> <Keys.PrismKey>Lock</Keys.PrismKey> will set either X or Y to the current aspect ratio. <br/> <Keys.PrismKey>Unlock</Keys.PrismKey> will set *Scale X* independently from *Scale Y* |
| **Scale Y**     | Sets the Scale Y (vertical scale) of the layer, in relation to the surface size. <br/> <Keys.PrismKey>Lock</Keys.PrismKey> will set either X or Y to the current aspect ratio. <br/> <Keys.PrismKey>Unlock</Keys.PrismKey> will set *Scale X* independently from *Scale Y*|
| **Translate X** | Sets the Translate X (horizontal position) of the layer, in relation to the surface size |
| **Translate Y** | Sets the Translate Y (vertical position) of the layer, in relation to the surface size |
| **Rotate X**    | Sets the Rotate X (x axis) of the layer, in relation to the surface |
| **Rotate Y**    | Sets the Rotate Y (y axis) of the layer, in relation to the surface |
| **Rotate Z**    | Sets the Rotate Z (z axis) of the layer, in relation to the surface |

## Rendering

This area controls the **Rendering** of Synergy Pixel Map texture.

![Layer Controls Crop Area](/prism-images/play/layer-controls/rendering-controls.png)

| <p style={{width: '120px', margin: '0'}}>Item</p> |  Description |
|-----------------|------------|
| **Render Layer** | Toggle the visibility of the layer. |
| **Blend Modes**  | Blend mode is used to determine how multiple layers are combined to create a final visual result on a Surface. It controls how the pixel colours of one layer interact with the pixels of layers beneath it.<br/><br/><ul><li>**Additive** - Combines the values of the pixels, creating a blended image.</li><li>**Alpha (Default)** - Allows the use of transparent areas which need to be specified when created.</li><li>**Darken** - Keeps the darkest colour from the blended Layers</li><li>**Difference** - Subtracts one colour value from the other and uses the result as the pixel colour to display.</li><li>**Exclude** - Similar to Difference mode but with lower contrast.</li><li>**Intensity Mix** - Blends Layers based on their intensity.</li><li>**Inverse Luma** - Excludes areas of the image based on the luminosity of the pixels and the specified threshold.</li><li>**Inverse Mask** - Uses the layer as a mask for the layer below showing the image in the dark areas.</li><li>**Lighten** - Shows the highest of each colour component used across layers.</li><li>**Luma** – Excludes areas of the image based on the luminosity of the pixels and the specified threshold.</li><li>**Mask** – Uses the layer as a mask for the layer below showing the image in the light areas.</li><li>**Multiply** – Takes the values of the images, multiplys them together and returns the resulting value.</li><li>**Not Additive Mixing** - Non Additive Mixing shows the brightest pixel of the layers.</li><li>**Opaque** – Fully solid with no transparency.</li><li>**Screen** –  takes the values of the pixels in the two layers inverts, multiplys, and then inverts them again.</li><li>**Subtract** – The value of one layer is taken from the other layer. The resulting number is then used for the colour value.</li><li>**Tom Mask** –  When fully applied, it completely masks the layer below, functioning similarly to Multiply. Can fix issues when multiplying by 0.</li></ul><br/>*Note: Final result will depend on the [render order](../settings/settings-playback#renderer)*|
| **Blend Amount** | The blend amount controls the transition between the source (blended layer) and the destination (background layer) when applying a blend mode. It determines how much influence the blended source has over the final output, effectively interpolating between the two. When the blend amount is set to zero, the operation acts as a pass-through, meaning the destination remains unchanged, as no blending is applied.  |

### Virtual Return Properties

Will only affect [Virtual Return](./banks#virtual-return) bank elements.

| Item | Description |
|-----------------|------------|
| **Send Only**  | When enabled, the layer will be ignored in the final Surface mix but will remain accessible for Virtual Return. This can improve performance when a layer is only needed for Virtual Return access and does not need to be included in the final Surface composition.  |
| **Use Pre Adjustments**  | Specify whether Virtual Return should access the layer before or after layer adjustments are applied.  |