---
id: settings-inputs
title: Inputs Settings
sidebar_label: Inputs
---

### Inputs

This page shows the list of physical inputs and virtual inputs available on the system.
It also shows the settings for each **Source** which are kept across all media instances of the selected **Source** used within the app (either when loading the input in Preview Window or on a Layer).

Physical and virtual inputs list and their settings are shown on two separate section respectively called **Live Inputs** and **NDI Inputs**.

In order to change settings for a given input, first select an input from the **Source** dropdown on the left side.

On the right side it is then possible to change the following Source Settings:

- **Video Format** (physical inputs only) - List of available video formats. Each format is composed of resolution, color space and frame rate.
- **Audio Source** (physical inputs only) - List of available audio sources. The selected source will act as the audio input. 
- **Enable Audio** - This toggle will enable/disable audio input.
- **Run In Background** - This toggle will create an instance of the specified source which will run in the background. This allows to speed-up loading times of when the input is loaded in Preview Window or on a Layer, as the input will be immediately ready.
           
The **Live Inputs** **Source Selection** list will automatically update when pluggin/unplugging a physical camera to/from a USB port.
If the selected Source is unplugged, the list will show the **Select a Live Input source** placeholder.


The **NDI Inputs** **Source Selection** list is updated when the **Scan for NDI Sources** button is pressed.
If a new NDI surce is present in the local network it will be added to the list.
If a new NDI surce is removed from the network it will be removed from the list, but only after the button is pressed.