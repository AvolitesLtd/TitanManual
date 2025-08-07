---
id: layer-controls
title: Layer Controls
sidebar_label: Layer Controls
---

import Keys from '@site/src/components/key.ts';

**Layer Controls** allows adjustments to be made to the layer properties and can be controlled either directly from the UI or remotely by connecting with **Synergy**.

![{{PRISM-APP}} Layer Controls](/prism-images/play/layer-controls/layer-controls.png)

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
| **Bank**      | Select a bank. |
| **Element**   | Select a Bank Element and launch it. |

### Reset to Default

**Reset To Default** is a quick way to reset all of the user adjusted parameters, just as a locate or home button would do on a console.

### Sync to DMX

When **{{PRISM-APP}}** is being controlled from a lighting console using **Synergy**, there might be an occasion where a quick adjustment of the parameters in the **{{PRISM-APP}}**'s user interface can be preferable. This can result in a mismatch between the values on the console and within the interface.

The **Sync to DMX** is used to allow the Prism UI controls to immediately adjust to the most recently received values from the console. This can be used anytime the UI needs to be kept in line with the external device values.

*Note: Instructions for setting up a **Synergy** Connection can be found on the [settings](../settings/settings-synergy.md)*

## Playback

The **Playback** controls the intensity / volume of a bank element playing on a layer.

![Layer Controls Playback Area](/prism-images/play/layer-controls/playback.png)


|   Item    |  Description  |
|---------------|------------|
| **Intensity (%)** | Opacity of the layer. |
| **Volume (%) / Mute** | Volume of the layer. Whether layer is muted. |

## Player Controls

This area controls the **Player Controls** of the selected layer.

The **Player Controls** has check boxes against its properties so that users can define whether to use the bank element value or the one that is currently on the layer that it will play on.

![Layer Controls Player Controls Area](/prism-images/play/layer-controls/player-controls.png)

|   Item                   |  Description  |
|------------------------------|---------- |
| **Cross Fade Duration**      | Cross Fade Duration of the layer.  |
|  **Play Modes** | <Keys.PrismKey>Play List</Keys.PrismKey> - Play through all the media in the bank that the current element belongs to. <br/> <Keys.PrismKey>Loop</Keys.PrismKey> - Continuously play the same media element.<br/><Keys.PrismKey>Shuffle</Keys.PrismKey> - Randomly select and play media from the bank that the element belongs to.<br/><Keys.PrismKey>Play Once</Keys.PrismKey> - Play the media once and then display the last frame.<br/><Keys.PrismKey>Pause</Keys.PrismKey> - Stay on the current frame.<br/> <Keys.PrismKey>In Frame</Keys.PrismKey> - Display the first frame.<br/> <Keys.PrismKey>Out Frame</Keys.PrismKey> - Display the last frame.|
| **Aspect Modes**              | - **Fit**: Adjusts the content to **cover the entire surface, distorting** it if necessary. It does **not preserve the aspect ratio**, but ensures **no cropping** and **no black bars**. <br/> - **Box**: Adjusts the content to **fit entirely within the surface** while **preserving aspect ratio**. This ensures the whole content is visible, without cropping or distortion, but may introduce **black bars** (letterboxing or pillarboxing) to fill unused space.<br/> - **Center**: Adjusts the content to **fill the surface** while **preserving its original aspect ratio**. This may result in **cropping** around the edges. The content remains **centered** and is **not distorted**.<br/> - **Window**: Displays the content at its **original resolution and aspect ratio**, without any scaling. If the content is larger than the surface, parts of it may be **cropped**. There is **no distortion** and **no scaling** applied.|
| **Trim In (%)** | Trim In of the layer. |
| **Trim Out (%)** | Trim Out of the layer. |
| **Speed (%)** | Speed of the layer. | 

## Crop

This area controls the **Crop** of the selected layer

![Layer Controls Crop Area](/prism-images/play/layer-controls/crop-controls.png)


|  Item  |  Description |
|------------|--------------|
| **Left (%)**   | Crop on the left side of the layer. |
| **Right (%)**  | Crop on the right side of the layer. |
| **Top (%)**    | Crop on the top side of the layer.  |
| **Bottom (%)** | Crop on the bottom side of the layer. |

## Colour Correction

This area controls the **Colour Correction** of the selected layer.

![Layer Controls Playback Area](/prism-images/play/layer-controls/colour-correction.png)

|   Item      |  Description        |
|----------------|------------|
| **Red (%)**        | Red Channel of the layer. |
| **Green (%)**      | Green Channel of the layer.|
| **Blue (%)**       | Blue Channel of the layer. |
| **Hue Offset (&deg;)** | Hue Offset of the layer. |
| **Saturation (%)** | Saturation of the layer. |
| **Contrast (%)**   | Contrast of the layer. |
| **Gamma (%)**      | Gamma of the layer. |

## Transformation

This area controls the **Transformation** of the selected layer.

![Layer Controls Playback Area](/prism-images/play/layer-controls/transformation.png)

| <p style={{width: '100px', margin: '0'}}>Item</p> |  Description |
|-----------------|------------|
| **Scale X (%)**     | Scale X (horizontal scale) of the layer, in relation to the surface size. <br/> When pressing the <Keys.PrismKey>Lock</Keys.PrismKey> icon this will be aspect ratio locked with *Scale Y* . <br/> When pressing the <Keys.PrismKey>Unlock</Keys.PrismKey> icon this will be set independently from *Scale Y* |
| **Scale Y  (%)**     | Scale Y (vertical scale) of the layer, in relation to the surface size. <br/> When pressing the <Keys.PrismKey>Lock</Keys.PrismKey> icon this will be aspect ratio locked with *Scale X* . <br/> When pressing the <Keys.PrismKey>Unlock</Keys.PrismKey> icon this will be set independently from *Scale X*|
| **Translate X  (%)** | Translate X (horizontal position) of the layer, in relation to the surface size. |
| **Translate Y  (%)** | Translate Y (vertical position) of the layer, in relation to the surface size. |
| **Rotate X  (&deg;)**    | Rotate X (x axis) of the layer, in relation to the surface. |
| **Rotate Y  (&deg;)**    | Rotate Y (y axis) of the layer, in relation to the surface. |
| **Rotate Z  (&deg;)**    | Rotate Z (z axis) of the layer, in relation to the surface. |

## Rendering

This area controls the **Rendering** of Synergy Pixel Map texture.

![Layer Controls Crop Area](/prism-images/play/layer-controls/rendering-controls.png)

| <p style={{width: '150px', margin: '0'}}>Item</p> |  Description |
|-----------------|------------|
| **Render Layer** | Toggle the visibility of the layer. |
| **Blend Modes**  | Blend mode is used to determine how multiple layers are combined to create a final visual result on a Surface. It controls how the pixel colours of one layer interact with the pixels of layers beneath it.<br/><br/> - **Additive**: Combines the values of the pixels, creating a blended image. <br/> - **Alpha (Default)**: Allows the use of transparent areas which need to be specified when created. <br/> - **Darken**: Keeps the darkest colour from the blended Layers.<br/> -  **Difference**: Subtracts one colour value from the other and uses the result as the pixel colour to display. <br/> - **Exclude**: Similar to Difference mode but with lower contrast.<br/> - **Intensity Mix**: Blends Layers based on their intensity<br/> - **Inverse Luma**: Excludes areas of the image based on the luminosity of the pixels and the specified threshold.<br/> - **Inverse Mask**: Uses the layer as a mask for the layer below showing the image in the dark areas.<br/> - **Lighten**: Shows the highest of each colour component used across layers.<br/> - **Luma**: Excludes areas of the image based on the luminosity of the pixels and the specified threshold.<br/> - **Mask**: Uses the layer as a mask for the layer below showing the image in the light areas.<br/> - **Multiply**: Takes the values of the images, multiplys them together and returns the resulting value.<br/> - **Not Additive Mixing**: Non Additive Mixing shows the brightest pixel of the layers.<br/> - **Opaque**: Fully solid with no transparency.<br/> - **Screen** : Takes the values of the pixels in the two layers inverts, multiplys, and then inverts them again.<br/> - **Subtract**: The value of one layer is taken from the other layer. The resulting number is then used for the colour value.<br/> - **Tom Mask**: When fully applied, it completely masks the layer below, functioning similarly to Multiply. Can fix issues when multiplying by 0.<br/><br/>*Note: Final result will depend on the [render order](../settings/settings-playback#renderer)*|
| **Blend Amount (%)** | The blend amount controls the transition between the source (blended layer) and the destination (background layer) when applying a blend mode. It determines how much influence the blended source has over the final output, effectively interpolating between the two. When the blend amount is set to zero, the operation acts as a pass-through, meaning the destination remains unchanged, as no blending is applied.  |
| **Enable Adjustments** | Enable / disable Layer adjustments e.g crop, colour correction, transformations.|

### Virtual Return Properties

Will only affect [Virtual Return](./banks#virtual-return) bank elements.

| Item | Description |
|-----------------|------------|
| **Send Only**  | When enabled, the layer will be ignored in the final Surface mix but will remain accessible for Virtual Return. This can improve performance when a layer is only needed for Virtual Return access and does not need to be included in the final Surface composition.  |
| **Send Pre Adjustments**  | Specify whether Virtual Return should access the layer before or after layer adjustments are applied.  |