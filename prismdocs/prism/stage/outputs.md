---
id: outputs
title: Outputs
sidebar_label: Outputs
---

import Keys from '@site/src/components/key.ts';

The **Outputs** page is used to create, configure, and manage all output destinations of the software. **Outputs** define where the final video signal is sent, such as local displays, network streams, or other supported output types.

Each output operates independently and reflects the current program output, including video sources, transitions, overlays, and effects.

**Prism** supports multiple output types, including:

- [Physical Outputs](#physical-output): Send the video output to a connected monitor, projector, or video wall.
- [NDI® Outputs](#ndi-output): Send the video output over the network.
- [RTSP Outputs](#rtsp-output): Send the video output as a live RTSP stream to other devices or applications on the network.
- [DMX Outputs](#dmx-output): Send DMX over sACN, Art-Net, or USB Expert, or use a Synergy Pixel Map.

Use the [Regions](./regions) page to map a **Surface** or **Layer** to an **Output**.

> **Note:** Any changes on this page may cause the outputs to pause whilst changes are being applied.

## Physical Output

A Physical Output is used to send video to a physical display device, including projectors, monitors, and LED walls. It defines the connection between the software and an external output device.

![Prism](/prism-images/stage/outputs/physical.png)

### Physical Output Controls

A list of all connected video output devices, will appear in the *Output Device* drop-down.  
Selecting an output device will show its properties, automatically populated:

- Width
- Height
- Refresh rate
- HDR support
- Colour space

Colour space can be set in the output display settings so that the physical output matches the connected display.

### Edge Blend

**Edge Blend** is applied on a physical output. Use it when multiple projectors or displays overlap, so that the overlapping edges fade together.

Edge blend properties can be copied and pasted between physical outputs.

### Keystone

**Keystone** is applied on a physical output. Use it to correct geometry when the display is not square-on to the surface, by adjusting the output corners.

Keystone properties can be copied and pasted between physical outputs.

## NDI® Output

The NDI® Output allows the software to send its video output over the network.

### NDI® Output Controls

The following output properties can be set:

- Name
- Width
- Height
- Frame rate

To confirm any change to these properties click on the <Keys.PrismKey>Confirm</Keys.PrismKey> button.

Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.

> **Note:** Width will always adjust to nearest 64 pixels multiple.

[NDI®](https://ndi.video/) is a registered trademark of Vizrt NDI AB.

## RTSP Output

The RTSP Output allows the software to send its video output as a live network stream using the RTSP (Real-Time Streaming Protocol). This makes the output available to other devices or applications on the network, such as media players, hardware decoders, streaming servers, or monitoring systems.

The RTSP Output acts as a live source, continuously sending video in real time.

### RTSP Output Controls

| **Item** | **Description** |
|----------|-----------------|
| **Width / Height** | Sets the output resolution of the RTSP stream in pixels. This determines the size and detail of the transmitted video. |
| **Frame Rate** | Defines the number of frames per second (FPS) sent in the stream. Higher values produce smoother motion but require more processing power and bandwidth. |
| **Encoder** | Selects the video encoder used to compress the stream. Available options may include CPU-based encoders and hardware-accelerated GPU encoders, depending on system capabilities. |
|**GOP**| The GOP (Group of Pictures) sets the interval between keyframes. Lower values reduce latency and improve stream recovery, while higher values improve compression efficiency.|
| **Bit Rate** | Specifies the target data rate of the stream. Higher bit rates improve image quality but increase network usage. |
| **IP Address** | The network address on which the RTSP stream is hosted. Clients must use this address to connect to the stream. |
| **Port**| RTSP typically uses port 554 by default, but any available TCP port can be configured.|
| **Stream Name** | Identifies the stream path used in the RTSP URL. This name is appended to the address to form the complete stream URL. |

> **Note:** The RTSP output URL (for example, `rtsp://address:port/path`) must be unique. Multiple RTSP outputs cannot share the same URL; otherwise, starting the output will fail.

## DMX Output

A **DMX Output** sends pixel or control data from Prism as DMX. Use it with LED fixtures, nodes, or other DMX-controlled devices.

Supported output types:

- **sACN** (streaming ACN / E1.31)
- **Art-Net**
- **USB Expert**
- **Synergy Pixel Map** - Created from Titan only. When a Pixel Map is set up in Titan over a [Synergy](../settings/settings-synergy.md) connection, the output appears in Prism as a DMX output.

sACN, Art-Net, and USB Expert outputs are created in Prism. Configure the protocol, network interface or USB Expert device, and universe addressing for each of these DMX outputs. Map content onto the DMX output using [DMX Regions](./regions.md#dmx-regions) on the Regions page.

Each DMX output has [Pixel Map Adjustment](#pixel-map-adjustment) controls.

### Pixel Map Adjustment

**Pixel Map Adjustment** is available on each DMX output (sACN, Art-Net, USB Expert, and Synergy Pixel Map). The controls affect the pixel-mapped frames for that output and are set on the DMX output, not on the [Surface](../play/surfaces.md).

| <p style={{width: '100px', margin: '0'}}>Item</p> |  Description |
|------------------|------------|
| **Saturation**   | Sets the Saturation of the Pixel Map output |
| **Contrast**     | Sets the Contrast of the Pixel Map output |
| **Gamma**        | Sets the Gamma of the Pixel Map output  |
| **Luma Keying**  | A filter that removes parts of an image based on brightness (luminance) rather than colour. |
| **Blur**         | Blurs pixels for smoother pixel map effects |
| **Frame Blend**  | Smoothly interpolates frames over time for smoother pixel map transitions |
| **Show Preview** | Preview the effect via the Preview window / make clip adjustments. <br/> <br/> *Note: You can preview effects in the Prism UI canvas, but this will not affect your output.* |

### Live DMX Channel Data

When a DMX output is active, Prism can display **live DMX channel data** for the output. Use this to confirm that the expected values are being sent while pixel mapping or testing fixtures.
