---
id: media-management
title: Media Management
sidebar_label: Media Management
---

import Keys from '@site/src/components/key.ts';

## Adding Media

Media can be added and played using several different methods:

- Selecting file(s) in your file explorer and dragging them onto the *"Drag drop or select"* icon in the **Bank** area or at the bottom of the UI.
- Pressing the <Keys.PrismKey>+</Keys.PrismKey> button in the **Banks** or **Encoder** area.

## Prism Media Cache

**Prism Zero** optimize its loading performance by using a cache to store data about the media being used by the project. When adding a media file to a **Bank** or to **Encoder**, the media will be analyzed, and its thumbnails and information will be stored in a file on the system.

*Note: If media are renamed or relocated within the system, the media cache may become misaligned and will need to be regenerated. To regenerate the media cache, navigate to the [Settings > General](../settings/settings-general#cache) and click <Keys.PrismKey>Clear Cache</Keys.PrismKey>.