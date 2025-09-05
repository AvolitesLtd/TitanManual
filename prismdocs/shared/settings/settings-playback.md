---
id: settings-playback
title: Playback Settings
sidebar_label: Playback
---

This page shows the settings for the playback of media files.

![Settings Playback](/prism-images/settings/{{PRISM-APP-LOWER}}-settings-playback.png)

There are three sections:
- **[Playback](#playback)** - These options will give control over the media player.
- **[Hardware Accelerated Decoding (H.264/H.265)](#hardware-accelerated-decoding-h264h265)** - These options will give control over the media files decoding using H.264 and H.265 codecs.
- **[Renderer](#renderer)** - These options will give control over the renderer engine.

### Playback

|  Item  |  Description  |
|---------|-------------|
| **Step Amount** | This value will set the step forward or backward on the player timeline, expressed in seconds. To step forwards it is possible to use the right arrow key shortcut. To step backwards it is possible to use the the left arrow key shortcut. |
| **Resume Playback At Start** | Enable resuming playback. When enabled, if the app has been previously closed with playing media, once re-opened the media will resume playing. |
{{PRISM-START-COMMENT}}
| **Cross Fade Duration** (Prism Only)| This value will set the default duration in seconds of the cross fade. When loading a media on a Layer or in Preview Window, this duration indicates the time that it will take to fade out the current playing media and to fade in the newly selected media. |
{{PRISM-END-COMMENT}}

### Hardware Accelerated Decoding (H.264/H.265)

|  Item  |  Description  |
|---------|-------------|
| **Hardware Accelerated Decoding** | Enable hardware accelerated decoding for media using H.264 and H/265 codecs. When value is changed, media needs to be re-loaded in order for the update to take place. |
| **Hardware Adapter** | List of available GPUs on the system. GPUs which are not supporting H.264/H.265 hardware accelerated decoding are greyed-out. |

{{PRISM-START-COMMENT}}

### Renderer
|  Item  |  Description  |
|---------|-------------|
| **Use VSync** | Enable VSync. When enabled the renderer frame rate will be synced to the screen frame rate. |
| **Render Layers Bottom to Top** | Set the order of layers rendering inside a surface. When enabled the rendering will start from the bottom layer, when disabled it will start from the top layer. |
| **Use Pre Adjustments Previews** | Set if layer adjustments are used on Layer Previews. When enabled layer adjustment will not be applied on Layer Previews, when disabled layer adjusments will be applied on Layer Previews. This setting will be applied on the NDI® previews on **Synergy** too.|

{{PRISM-END-COMMENT}}