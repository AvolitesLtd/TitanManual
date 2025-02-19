---
id: surfaces
title: Surfaces
sidebar_label: Surfaces
---

A surface is the virtual canvas where visual content is displayed, such as screens, LED walls, or projections. It defines spatial parameters and resolution, allowing media to be mapped, scaled, and adjusted for precise display.

![Prism Layers](/prism-images/play/layers/{{PRISM-APP-LOWER}}-surface.png)

The surface information card includes:

- Surface mix preview
- Surface resolution
- Number of layers

The card can be minimised or maximised to hide or show layers.

## Synergy Enabled Surface

A `Synergy` label will appear on the surface once a Synergy connection has been successfully established. 

![Synergy Enabled Surface](/prism-images/play/layers/synergy-connected-surface.png)

All management of **Surfaces** or **Layers** will be locked on the Stage page. Adding or removing **Layers** from the Prism UI will be restricted, as Titan will now have primary control of Prism. **Surfaces** & **Layers** can only be added or removed through the Titan interface. 

More information on setting up Synergy can be found [here](/docs/synergy).
## Synergy Pixel Map Adjustments

When a **Surface** is connected to **Synergy**, and a [Pixel Map](docs/synergy/operating-synergy#lightmap-pixel-mapping-media-content) has been setup, a `Pixel Map` label will also be shown on the **Surface**. This indicates that the Pixel Map is working correctly and Pixel Map Adjustments can be controled on the [Surfaces](./surfaces.md).

![Synergy Enabled Surface](/prism-images/play/layers/pixel-map-surface.png)

Clicking on the **Surface** should open the **Controls** panel to the right. The properties will now be enabled but will only affect the frames being sent over to Titan and used for Pixel Mapping.

![Synergy Enabled Surface](/prism-images/play/layers/surface-pixel-map-adjustments.png)

| <p style={{width: '100px', margin: '0'}}>Properties</p> |  Description |
|------------------|------------|
| **Saturation**   | Sets the Saturation of the Pixel Map frame sent to Titan |
| **Contrast**     | Sets the Contrast of the Pixel Map frame sent to Titan |
| **Gamma**        | Sets the Gamma of the Pixel Map frame sent to Titan  |
| **Luma Keying**  | A filter that removes parts of an image based on brightness (luminance) rather than colour. |
| **Blur**         | Blurs pixels for smoother pixel map effects |
| **Frame Blend**  | Smoothly interpolates frames over time for smoother pixel map transitions |
| **Show Preview** | Preview the effect via the Preview window / make clip adjustments. <br/> <br/> *Note: You can preview effects in the Prism UI canvas, but this will not affect your output.* |