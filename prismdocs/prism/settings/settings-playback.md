---
id: settings-playback
title: Playback Settings
sidebar_label: Playback
---

This page shows the settings for the playback of media files.

![Settings Playback](/prismdocs/images/prism-settings-playback.png)


There are three sections:
- **[Playback](#playback)** - These options will give control over the media player.
- **[Hardware Accelerated Decoding (H.264/H.265)](#hardware-accelerated-decoding-h264h265)** - These options will give control over the media files decoding using H.264 and H.265 codecs.
- **[Renderer](#renderer)** - These options will give control over the DX12 renderer engine.


### Playback

<table>
    <thead>
        <tr>
            <th width="300">Feature</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Step Amount</b></td>
            <td>This value will set the step forward or backward on the player timeline, expressed in seconds. To step forwards it is possible to use the right arrow key shortcut. To step backwards it is possible to use the the left arrow key shortcut.
            </td>
        </tr>
        <tr>
            <td><b>Resume Playback At Start</b></td>
            <td>This toggle will enable/disable resuming playback. When enabled, if the app has been previously closed with playing media, once re-opened the media will resume playing.
            </td>
        </tr>
        <tr style={{display: (`prism` === 'prism' || `prism` === 'zero') ? '' : 'none'}}>
            <td><b>Cross Fade Duration</b></td>
            <td>This value will set the default duration in seconds of the cross fade. When loading a media on a Layer or in Preview Window, this duration indicates the time that it will take to fade out the current playing media and to fade in the newly selected media.
            </td>
        </tr>
    </tbody>
</table>

### Hardware Accelerated Decoding (H.264/H.265)

<table>
    <thead>
        <tr>
            <th width="300">Feature</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Hardware Accelerated Decoding</b></td>
            <td>This toggle will enable/disable hardware accelerated decoding for media using H.264 and H/265 codecs. When value is changed, media needs to be re-loaded in order for the update to take place.
            </td>
        </tr>
        <tr>
            <td><b>Hardware Adapter</b></td>
            <td>List of available GPUs on the system. GPUs which are not supporting H.264/H.265 hardware accelerated decoding are greyed-out.
            </td>
        </tr>
    </tbody>
</table>

<div style={{display: (`prism` === 'prism' || `prism` === 'zero') ? 'inline-block' : 'none'}}>

### Renderer

<table>
    <thead>
        <tr>
            <th width="300">Feature</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Use VSync</b></td>
            <td>This toggle will enable/disable VSync. When enabled the renderer frame rate will be synced to the screen frame rate.
            </td>
        </tr>
        <tr style={{display: (`prism` === 'prism') ? '' : 'none'}}>
            <td><b>Render Layers Bottom to Top</b></td>
            <td>This toggle will set the order of layers rendering inside a surface. When enabled the rendering will start from the bottom layer, when disabled it will start from the top layer.
            </td>
        </tr>
        <tr>
            <td><b>Use Pre Adjustments Previews</b></td>
            <td>This toggle will set if layer adjustments are used on Layer Previews. When enabled layer adjustment will not be applied on Layer Previews, when disabled layer adjusments will be applied on Layer Previews.
            </td>
        </tr>
    </tbody>
</table>


</div>