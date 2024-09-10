---
id: settings-inputs
title: Inputs Settings
sidebar_label: Inputs
---
import Keys from '@site/src/components/key.ts';

This page shows the list of physical inputs and virtual inputs available on the system. It also shows the settings for each **Source**, which are kept across all instances used within the app (either when loading the input in [Preview](../quick-start/preview) window or on a [Layer](../play/layers)).

![Settings Inputs](/prismdocs/images/settings-inputs.png)

Physical and virtual inputs list and their settings are shown on two separate sections respectively called **Live Inputs** and **NDI Inputs**.

## Source Selection
In order to change settings for a given input, first select an input from the dropdown on the left side.

The **Live Inputs** list will automatically update when plugging/unplugging a physical camera to/from a USB port. If the selected Source is unplugged, the list will show the **Select a Live Input source** placeholder.

![Source Selection](/prismdocs/images/source-selection-live.png)

The **NDI Inputs** list is updated when the <Keys.PrismKey>Refresh</Keys.PrismKey> button is pressed.  
If a new NDI source is present in the local network it will be added to the list.
If a new NDI source is removed from the network it will be removed from the list, but only after the button is pressed.

![Source Selection](/prismdocs/images/source-selection-ndi.png)

## Source Settings
On the right side it is then possible to change the following settings:

![Source Settings](/prismdocs/images/source-settings.png)

|   Feature            |  Description        |
|----------------------|------------|
| **Video Format** | List of available video formats. Each format is composed of resolution, color space and frame rate (physical inputs only).|
| **Audio Source** | List of available audio sources. The selected source will act as the audio input (physical inputs only).|
| **Enable Audio** | This toggle will enable/disable audio input.|
| **Run In Background** | This toggle will create an instance of the specified source which will run in the background. <br/> <br/> This allows to speed-up loading times of when the input is loaded in Preview Window or on a Layer, as the input will be immediately ready.|