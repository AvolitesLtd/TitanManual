---
id: settings-playback
title: Playback Settings
sidebar_label: Playback
---

This page shows the settings for the playback of media files.

{{PRISM-START-COMMENT}}
There are three sections:
- **[Playback](#playback)** - These options will give control over the media player.
- **[Hardware Accelerated Decoding (H.264/H.265)](#hardware-accelerated-decoding-h264h265)** - These options will give control over the media files decoding using H.264 and H.265 codecs.
- **[Renderer](#renderer)** - These options will give control over the renderer engine.
{{PRISM-END-COMMENT}}
{{PLAYER-START-COMMENT}}
There are two sections:
- **[Playback](#playback)** - These options will give control over the media player.
- **[Hardware Accelerated Decoding (H.264/H.265)](#hardware-accelerated-decoding-h264h265)** - These options will give control over the media files decoding using H.264 and H.265 codecs.
{{PLAYER-END-COMMENT}}

### Playback

{{PRISM-START-COMMENT}}
|  Item  |  Description  |
|---------|-------------|
| **Step Amount** | This value will set the step forward or backward on the player timeline, expressed in seconds. To step forwards it is possible to use the right arrow key shortcut. To step backwards it is possible to use the the left arrow key shortcut. |
| **Resume Playback At Start** | Enable resuming playback. When enabled, if the app has been previously closed with playing media, once re-opened the media will resume playing. |
| **Cross Fade Duration** | The default duration, in seconds, of the cross fade when loading media onto a [Layer](../play/layers.md) or in the [Preview](../quick-start/preview.md) window. This is the time taken to fade out the current media and fade in the newly selected media. Individual layers can override this value in [Layer Controls](../play/layer-controls.md). |
{{PRISM-END-COMMENT}}
{{PLAYER-START-COMMENT}}
|  Item  |  Description  |
|---------|-------------|
| **Step Amount** | This value will set the step forward or backward on the player timeline, expressed in seconds. To step forwards it is possible to use the right arrow key shortcut. To step backwards it is possible to use the the left arrow key shortcut. |
| **Resume Playback At Start** | Enable resuming playback. When enabled, if the app has been previously closed with playing media, once re-opened the media will resume playing. |
{{PLAYER-END-COMMENT}}

### Hardware Accelerated Decoding (H.264/H.265)

|  Item  |  Description  |
|---------|-------------|
| **Hardware Accelerated Decoding** | Enable hardware accelerated decoding for media using H.264 and H/265 codecs. When value is changed, media needs to be re-loaded in order for the update to take place. |
| **Hardware Adapter** | List of available GPUs on the system. GPUs which are not supporting H.264/H.265 hardware accelerated decoding are greyed-out. |

{{PRISM-START-COMMENT}}

### Renderer
|  Item  |  Description  |
|---------|-------------|
| **Use VSync** | Enable VSync. When enabled the renderer frame rate will be synced to the screen frame rate. This can make playback look smoother and prevent visual issues like screen tearing. |
| **Render Layers Bottom to Top** | Controls the order in which layers are drawn within a surface. When enabled the rendering starts with the bottom layer and works upward, when disabled rendering starts with the top layer and works downward. |
| **Render UI Previews** | Enable rendering of UI and preview buffers, including the [Preview](../quick-start/preview.md) window and layer previews. Disable to improve performance by skipping that rendering. |
| **UI Rendering Quality** | Sets the resolution of UI canvases to High, Mid, or Low. Lower quality reduces UI canvas resolution to improve performance. This option is available when **Render UI Previews** is enabled. |
| **Use Pre Adjustments Previews** | Controls whether layer adjustments are shown in layer previews. When enabled layer previews are shown without adjustments applied, when disabled layer previews are shown with adjustments applied. This setting also affects the previews shown in **Synergy**.|

{{PRISM-END-COMMENT}}