---
id: best-practices
title: Best Practices
sidebar_label: Best Practices
---

This page lists recommended media and playback setup for reliable output in **Prism**.

## Media

### GPU Accelerated Video Codecs

Certain specialised video codecs can use the GPU to improve system performance, allowing high quality, high resolution files to be played back smoothly with low latency.

> Files using these codecs can be larger in size due to the techniques used to achieve these optimisations.

The **AiM** codec provides high quality colour reproduction which can include an Alpha channel along with support for up to 8 embedded audio channels. This is the primary codec recommended for **Prism**.

**Hap** and **NotchLC** are also natively supported in **Prism**, allowing GPU playback for both codecs and up to 10 bit colour with **NotchLC**. Further codec support may be provided natively by the GPU in use.

> To allow native GPU support, and to see which codecs are included, the GPU must be selected and Hardware Accelerated Decoding must be enabled in [Playback Settings](../settings/settings-playback.md).

### Image files with transparency

PNG files can be a good option when using still images and can be exported from image software such as Photoshop with support for Alpha transparency.

Commonly these export with a "Premultiplied" Alpha channel. Improved image quality and performance can be given to these files by setting the Alpha to "Straight" via the Media section in Prism's [Preview](./preview.md#media) window.

### Store Media Locally

Media should be stored and played back on a dedicated high speed drive on the playback machine. Prism does not automatically import externally stored media onto internal drives.

## Playback

### Graphics settings - Enable VSync

Prism can control the vertical sync settings of the playback system, but in order to do so, the GPU must first be set according to the GPU type in use:

| GPU | Control panel setting | Value |
| --- | --- | --- |
| **NVIDIA** | NVIDIA Control Panel > Manage 3D Settings > **Vertical Sync** | Use the 3D application setting |
| **AMD** | AMD Software > Graphics > **Wait for Vertical Refresh** | Off, unless application specifies otherwise |

Once the correct GPU settings have been applied, vertical sync can be enabled inside of Prism via Settings > Playback > [Renderer](../settings/settings-playback.md#renderer) > Use VSync.

> Enabling VSync is the preferred option in most cases as this prioritises consistent frame delivery to the outputs.

### Multichannel Audio

Prism's audio controls affect the initial stereo pair of audio channels within a media file. Some playback codecs supported in Prism provide support for more than 2 audio channels when they are embedded within the file.

When discrete control of more than 2 audio channels is required it is recommended to output the audio channels via a dedicated multichannel audio interface to allow for external mixing.

### Nvidia GPU settings

When using a laptop which has both a shared and dedicated GPU, it is important to assign Prism to run from the dedicated GPU within the NVIDIA software.

Open NVIDIA Control Panel and select Manage 3D Settings.

1. In the Program Settings tab, press the Add button and then press Browse to locate **Prism.exe** which is found in *`C:\Program Files\Avolites\Prism\Prism`*.
2. Select the *High-performance NVIDIA* processor from the drop down.
3. Find the *Vertical sync* setting in the options list and set it to Use the 3D application setting
4. Press *Apply* to save the changes.

![NVIDIA Control Panel](/prism-images/quick-start/nvidia-control-panel.png)
