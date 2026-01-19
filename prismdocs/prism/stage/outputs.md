---
id: outputs
title: Outputs
sidebar_label: Outputs
---

import Keys from '@site/src/components/key.ts';

The **Outputs** page is used to create, configure, and manage all output destinations of the software. **Outputs** define where the final video signal is sent, such as local displays, network streams, or other supported output types.

Each output operates independently and reflects the current program output, including video sources, transitions, overlays, and effects.

**Prism** supports multiple output types, including:

- [Physical Outputs](#physical-output): Send the video signal to a connected monitor, projector, or video wall.
- [RTSP Outputs](#rtsp-output): Broadcast the video output as a live RTSP stream to other devices or applications on the network.

*Note: any changes on this page may cause the outputs to pause whilst changes are being applied.*

## Physical Output

A Physical Output is used to send video to a physical display device, including projectors, monitors, and LED walls. It defines the connection between the software and an external output device.

Use the [Regions](./regions) page to map and configure how content is displayed on the physical surface.

![Prism](/prism-images/stage/outputs/physical.png)

### Physical Output Controls

A list of all connected video output devices, will appear in the *Output Device* drop-down.  
Selecting an output device will show its properties, automatically populated:

- Width
- Height
- Refresh rate
- HDR support

After enabling the output, and playing a bank element on a layer, the surface will display on the output device.

## RTSP Output

The RTSP Output allows the software to broadcast its video output as a live network stream using the RTSP (Real-Time Streaming Protocol). This makes the output available to other devices or applications on the network, such as media players, hardware decoders, streaming servers, or monitoring systems.

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
