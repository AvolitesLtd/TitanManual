---
id: regions
title: Regions
sidebar_label: Regions
---

import Keys from '@site/src/components/key.ts';

The **Regions**  page is used to map a surface or layer to an output. It defines how content from a selected source is sampled, positioned, and displayed on the chosen **Output**.

**Regions** allow to select a source (surface or layer) and map it to an **Output**, controlling how the content appears on the target display or stream.

*Note: any changes on this page may cause the output to pause whilst changes are being applied.*

The Regions page can be resized to give more space to the canvas or the region list.

![Prism](/prism-images/stage/regions/regions-page.png)

### Region Types

**Regions** can be created in different types, depending on the mapping requirements:

- **Rectangular Regions**  
  Rectangular regions define a simple, rectangular sampling area from a surface or layer. They are ideal for standard displays, projectors, and basic output mappings.

- **3D Model Regions**  
  3D Model regions use a **3DS** model to define more complex mapping configurations. This allows content to be mapped onto irregular or non-rectangular surfaces, such as LED sculptures or architectural installations.

- **DMX Regions**  
  DMX regions sample content from a surface or layer and send it as pixel-mapped DMX on a [DMX Output](./outputs.md#dmx-output). See [DMX Regions](#dmx-regions).

### Region Tools

The Regions canvas includes tools for placing and inspecting regions:

- **Zoom** and **pan** the canvas.
- **Crosshair** to align regions.
- **Magnifiers** for close-up placement.
- **Create-region** tools to add regions on the canvas.
- **Sequential copy/paste** to duplicate region properties along a series of regions.

### Canvas Area

The Source/Output dropdowns in the center of the application allow to preview both the selected input surface and the corresponding output composition.

### Region Controls

Selecting a **Region** to show its controls to the right. Here is where a *Source* can be selected to sample from, and an *Output* can be selected to display the **Region** onto.

### DMX Regions

**DMX Regions** map a sampled area of a surface or layer onto fixtures through a [DMX Output](./outputs.md#dmx-output). Each DMX region defines the source area, the target DMX output, and how pixels in that area are translated into DMX channels.

Use DMX regions together with sACN, Art-Net, or USB Expert. A [Synergy Pixel Map](./outputs.md#dmx-output) DMX output is created from Titan only.

DMX region properties can be copied and pasted between regions.