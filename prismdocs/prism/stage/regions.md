---
id: regions
title: Regions
sidebar_label: Regions
---

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

- **Zoom** control to set the canvas zoom level.
- **Crosshair** to align regions.
- **Magnifiers** for close-up placement.
- **Create-region** tools to add regions on the canvas.
- **Sequential copy/paste** to duplicate region properties along a series of regions.

### Canvas Area

The Source/Output dropdowns in the centre of the application allow to preview both the selected input surface and the corresponding output composition.

### Canvas Controls

The same mouse controls work on the source canvas and the destination canvas. The [DMX Regions](#dmx-regions) source canvas uses the same controls.

#### Move

| Control | Action |
|---------|--------|
| Click and drag a region | Move it on the source or destination canvas |
| Click and drag a selected group | Move all selected regions together |
| Drag the resize handle | Resize the selected region |
| `Shift`+drag the resize handle | Resize and keep the aspect ratio |
| `Alt`+drag | Draw a new region |

While a region is moved or resized, it snaps to the content bounds and to the edges and centres of other regions. Dashed blue guide lines show the snap alignment.

#### Selection

| Control | Action |
|---------|--------|
| Click a region | Select that region |
| `Ctrl`+click a region | Add or remove the region from the selection |
| Click and drag on empty canvas | Draw a selection box around regions |
| Click on empty canvas | Clear the selection |
| `Ctrl+A` | Select all regions |

#### Pan and zoom

| Control | Action |
|---------|--------|
| Scroll wheel | Zoom towards the pointer |
| `Space`+drag | Pan the canvas |
| Zoom control | Set the zoom level |

Hold `Space` and drag to pan. The pointer shows a grab cursor, then a grabbing cursor while dragging.

### Region Controls

Selecting a **Region** to show its controls to the right. Here is where a *Source* can be selected to sample from, and an *Output* can be selected to display the **Region** onto.

### DMX Regions

**DMX Regions** map a sampled area of a surface or layer onto fixtures through a [DMX Output](./outputs.md#dmx-output). Each DMX region defines the source area, the target DMX output, and how pixels in that area are translated into DMX channels.

Use DMX regions together with sACN, Art-Net, or USB Expert. A [Synergy Pixel Map](./outputs.md#dmx-output) DMX output is created from Titan only.

The DMX Regions source canvas uses the same [canvas controls](#canvas-controls) as the Regions page.

DMX region properties can be copied and pasted between regions.