---
id: layers
title: Layers
sidebar_label: Layers
---

import Keys from '@site/src/components/key.ts';

![Prism Layers](/prismdocs/images/prism-layers.png)

On the [Play](../play) view This focuses on the Layers tab, which is made up of:

- The surfaces and their layers, with their layer previews
- The selected layer playback / surface mix

**Prism Zero** is limited to 1 layer, but up to 16 can be added on **Prism**. 


Media can be played on specific / multiple layers, blended together using the intensity sliders and can create simple mixes adjusting their volume. 

*Note: performance may vary on different systems*

## Surfaces & Layers

Surface and their layers, can all be managed in the [Stage](../stage) view where layer can be added, removed, reordered and renamed.

### Surface

A surface refers to the virtual canvas or area where visual content is projected or displayed. It can represent screens, LED walls, projection surfaces, or any other output device.

![Prism Layers](/prismdocs/images/surfaces-layers/prism-surface.png)

The surface is crucial as it defines the spatial parameters and resolution of the visual content. Users can map their media to the surface, adjusting the placement, scaling, and transformation to fit the physical display precisely.

This component shows the number of layers it has and also the resolution that it is set as. Its possible to minimise and maximise the view in order to simply view all the surfaces together. 


### Layer

A layer is a canvas that contains visual content, such as videos or images. Multiple layers can be stacked and manipulated independently, allowing for complex compositions.

![Prism Layers](/prismdocs/images/surfaces-layers/prism-layer.png)

The layer comprises of an overlay, which can show to the user, duration, time left and which element, from which bank is playing. 

#### Controlling the Layer

The layer has some controls, which can adjust the layers in real-time.

| Feature | Description |
|---------|-------------|
|  **Visibility** | Toggle the visibility icon to hide and show the layer |
|  **Intensity** | Click on the % value to open a slider, this set the opacity of the layer |
|  **Mute** | Toggle mute will mute / unmute the audio from the layer |
|  **Volume** | Click on the % value to open a slider, this set the volume of the layer |

Users can also control each [layer's options](../play/layer-options) via the UI or [Synergy](../settings/settings-synergy) control.

Both methods affect the layer properties directly, but also can be overridden by the bank element, depending on your preferred result, as discussed on the [Preview](../preview) page.

## Playback

### Surface Mix

This area will show the surface mix of all the layers together. 

![Prism Layer controls](/prismdocs/images/prism-surface-mix.png)

### Play Bar

![Prism Play Bar](/prismdocs/images/zero-prism-playbar.png)

Similar to **Prism Player**'s media player, the standard play controls are available. One difference here is that the playbar will activate once a layer is selected, as this serve a purpose of controlling the layer playback.

Hover the mouse over the bar and a seeking indicator will appear for you to drag.

Toggling the <Keys.PrismKey>Trim</Keys.PrismKey> icon reveals our trim feature.

### Trim Bar

![Prism Trim Bar](/prismdocs/images/zero-prism-trimbar.png)

The trim is set on the layer properties, but can also be override by the bank element via the [Preview](../preview) Window. Moving the sliders will shorten the playback on the layer. you can cancel your changes to reset back to the previously set trim. 

*Note: Double clicking on the IN and OUT timecodes allows for editing of values, for more accuracy.*