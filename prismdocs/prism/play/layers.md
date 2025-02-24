---
id: layers
title: Layers
sidebar_label: Layers
---

import Keys from '@site/src/components/key.ts';

A **Layer** is a canvas that contains visual content, such as videos or images. 

Multiple **Layers** can be stacked and manipulated independently to make compositions. Media can be played on one or multiple layers, blended using blend modes, intensity sliders, and can create simple mixes adjusting their volumes.

*Note: When using multiple layers, performance may vary on different systems*

![Prism Layers](/prism-images/play/layers/prism-layers.png)

**Surfaces** and their **Layers**, can all be managed in the [Stage](../stage) view where layers can be added, removed, reordered and renamed.

The layer preview comprises of an overlay showing:

![Prism Layers](/prism-images/play/layers/prism-layer.png)

- Bank name
- Bank element name
- Duration of the clip
- Remaining time of the clip.

It is possible to minimise and maximise the information card in order to have a more compact view of all the layers.  
*Note: When minimised the speed slider and the play modes will be hidden.*

#### Controlling the Layer

The layer has some controls, which can adjust the layers in real-time.

| Item | Description |
|---------|-------------|
|  **Visibility** | Hide / show the layer |
|  **Intensity** | Opacity of the layer |
|  **Mute** | Mute / unmute the audio from the layer |
|  **Volume** | Volume adjustment of the layer |
|  **Speed** | Speed adjustment of the layer |
|  **Play Modes** | <Keys.PrismKey>Play List</Keys.PrismKey> - Play through all the media in the bank that the current element belongs to. <br/> <Keys.PrismKey>Loop</Keys.PrismKey> - Continuously play the same media element<br/><Keys.PrismKey>Shuffle</Keys.PrismKey> - Randomly select and play media from the bank that the element belongs to.<br/><Keys.PrismKey>Play Once</Keys.PrismKey> - Play the media once and then display the last frame.<br/><Keys.PrismKey>Pause</Keys.PrismKey> - Stay on the current frame.<br/> <Keys.PrismKey>In Frame</Keys.PrismKey> - Display the first frame.<br/> <Keys.PrismKey>Out Frame</Keys.PrismKey> - Display the last frame.|
|  **Clear Layer** | <Keys.PrismKey>Clear Layer</Keys.PrismKey> Reset the layer |
|  **Solo** | Click on the <Keys.PrismKey>Solo</Keys.PrismKey> button to solo this layer. This will be the only layer present in the surface mix |

Users can also control each [Layer Controls](./layer-controls.md) via the UI or [Synergy](../settings/settings-synergy.md) control.

Both methods affect the layer properties directly, but also can be overridden by the bank element, depending on your preferred result, as discussed on the [Preview](../quick-start/preview.md) page.

## Playback

### Surface Mix

This area will show the surface mix of all the layers together. 

![Prism Layer controls](/prism-images/play/prism-surface-mix.png)

### Play Bar

![Prism Play Bar](/prism-images/play/prism-playbar.png)

Similar to **Prism Player**'s media player [play bar](../../player/play/mediaplayer.md#play-bar), the standard play controls are available.   
In Prism the playbar will activate once a layer is selected, as this serve a purpose of controlling the layer playback.

Hover the mouse over the bar and a seeking indicator will appear for you to drag.

Toggling the <Keys.PrismKey>Trim</Keys.PrismKey> icon reveals the trim feature.

### Trim Bar

![Prism Trim Bar](/prism-images/play/prism-trimbar.png)

The trim is set on the layer properties, but can also be override by the bank element via the [Preview](../quick-start/preview.md) Window.  
Moving the sliders will set the Trim In and Trim Out points.  
Clicking on the <Keys.PrismKey>Trim</Keys.PrismKey> icon will confirm the newly set trim points.  
Clicking on the <Keys.PrismKey>Cancel</Keys.PrismKey> icon will cancel the changes to reset back to the previously set trim points.

*Note: Double clicking on the IN and OUT timecodes allows for editing of trim points, for more accuracy.*