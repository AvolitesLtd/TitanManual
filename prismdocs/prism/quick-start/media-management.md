---
id: media-management
title: Media Management
sidebar_label: Media Management
---

import Keys from '@site/src/components/key.ts';

## Adding Media

Media can be added and played using several different methods:

<!--
- Selecting file(s) in your file explorer and dragging them onto the *"Drag drop or select"* icon in the **Bank** area or at the bottom of the UI.
- Pressing the *"Select Files"* button in the **Banks** or **Encoder** area.
- Dragging a file onto the **Media Player** will automatically add the video to the Bank.
-->

<!--
- Selecting file(s) in your file explorer and dragging them onto the *"Drag drop or select"* icon in the **Banks** area or at the bottom of the UI.
- Pressing the *"Select Files"* button in the **Banks** or **Encoder** area.
- Dragging a file onto the [**Surface Mix**](../play/layers#surface-mix) area will automatically add the video to the selected **Bank**.
-->


- Selecting file(s) in your file explorer and dragging them onto the *"Drag drop or select"* icon in the **Banks** area or at the bottom of the UI.
- Pressing the *"Select Files"* button in the **Banks** or **Encoder** area.
- Dragging a file onto the [**Surface Mix**](../play/layers#surface-mix) area will automatically add the video to the selected **Bank**.


## Prism Media Cache

**Prism** tries to optimize its loading performance by using a cache to store data about the media being used by the project. When adding a media file to a **Bank** or to **Encoder**, the media will be analyzed, thumbnails, generated as `.png`, and its information, stored to a file on your system. 

You can access this via `C:\Users\*{username}*\AppData\Local\Temp\Avolites\Prism Media Cache`

*Note: Editing this file can create issue in prism, if in doubt deleting and regenerating the JSON or is a better solution, this is what <Keys.PrismKey>Clear Cache</Keys.PrismKey> does in the [Settings > General](../settings/settings-general#cache) tab.