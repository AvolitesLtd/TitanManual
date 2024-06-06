---
id: layers
title: Layers
sidebar_label: Layers
---

import Keys from '@site/src/components/key.ts';

The Layers tab shows two sections:

- Surfaces and their layers 
- Selected layer playback / surface mix

![Prism Layers](/prismdocs/images/prism-layers.png)

Media can be played on specific / multiple layers, blended together using the intensity sliders and mixed in volume. 

**Prism Zero** is limited to 1 layer, but up to 16 can be added on **Prism**. *Note: performance may vary on different systems*

## Surfaces & Layers

Adding, renaming and reordering layers can be edited over on the [Stage](../stage/surfaces) page

### Surfaces

This component shows the number of layers it has and also the resolution that it is set as. Its possible to minimise and maximise the view in order to simply view all the surfaces together. 

### Layers

The layer comprises of an overlay, which can show to the user, duration, time left and which element, from which bank is playing.

The options on the right are interactive and a popup slider allows for adjustment of Intensity, Volume and Speed.

![Prism Layer controls](/prismdocs/images/prism-zero-layer-controls.png)

These all affect the layer properties directly, but also can be overridden by the bank element, depending on your preferred result, as discussed on the [Preview](../preview) page.

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