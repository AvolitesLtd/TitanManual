---
id: settings-inputs
title: Inputs Settings
sidebar_label: Inputs
---
import Keys from '@site/src/components/key.ts';

This page shows the list of physical inputs and virtual inputs available on the system. It also shows the settings for each **Source**, which are kept across all instances used within the app (either when loading the input in [Preview](../quick-start/preview.md) window or on a [Layer](../play/layers.md)).

![Settings Inputs](/prism-images/settings/settings-inputs.png)

Physical and virtual inputs list and their settings are shown on two separate sections respectively called **Live Inputs** and **NDI® Inputs**.

## Source Selection
In order to change settings for a given input, first select an input from the dropdown on the left side.

The **Live Inputs** list will automatically update when plugging/unplugging a physical camera to/from a USB port. If the selected Source is unplugged, the list will show the **Select a Live Input source** placeholder.

![Source Selection](/prism-images/settings/source-selection-live.png)

If a new NDI® source is added or removed in the local network the **NDI® Inputs** list is updated.

![Source Selection](/prism-images/settings/source-selection-NDI.png)

[NDI®](https://ndi.video/) is a registered trademark of Vizrt NDI AB.

## Source Settings
On the right side it is then possible to change the following settings:

![Source Settings](/prism-images/settings/source-settings.png)

|  Item  |  Description  |
|----------------------|------------|
| **Video Format** | List of available video formats. Each format is composed of resolution, color space and frame rate (physical inputs only).|
| **Audio Source** | List of available audio sources. The selected source will act as the audio input (physical inputs only).|
| **Enable Audio** | Enable audio input.|
| **Run In Background** | Create an instance of the specified source which will run in the background. <br/> <br/> This allows to speed-up loading times of when the input is launched on a Layer, as the input will be immediately ready.|
| **Status** | Indicates the connection status of the capture device. *The device will fail to connect if either the video or audio source is invalid*. |
