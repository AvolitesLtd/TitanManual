---
id: settings-timecode
title: Timecode Settings
sidebar_label: Timecode
---
import Keys from '@site/src/components/key.ts';

The Timecode Settings page allows to configure how timecode is processed and displayed within the software. Timecode is used to track playback, synchronize sources, and provide a reference for precise timing.

There are two sections:
- **[Timecode](#Timecode)** - Enable this option to process timecode and display the Timecode Widget on the [Play](../play) page. The widget provides a visual reference of the current playback time.
- **[Timecode Source](#Timecode-Source)** - Select the source used to generate the timecode.

### Timecode Source

Select the source used to generate the timecode:

|   Item    |  Description  |
|---------------|------------|
| **Internal**      | Uses the system clock as the timecode reference. |
| **LTC**   | Uses an external LTC (Linear Timecode) module for timecode input. This is useful for synchronizing with external devices or live events. Requires Usb Expert to be enabled.|
