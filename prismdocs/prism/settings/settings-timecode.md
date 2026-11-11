---
id: settings-timecode
title: Timecode Settings
sidebar_label: Timecode
---
import Keys from '@site/src/components/key.ts';

The Timecode Settings page allows to configure how timecode is processed and displayed within the software. Timecode is used to track playback, synchronize sources, and provide a reference for precise timing.

There are two sections:
- **[Timecode](#Timecode)** - Enable this option to process timecode and display the Timecode Widget on the [Play](../play) page. The widget provides a visual reference of the current timecode value.
- **[Timecode Source](#Timecode-Source)** - Select the source used to generate the timecode.

### Timecode Source

Select the source used to generate the timecode:

|   Item    |  Description  |
|---------------|------------|
| **Internal** | Uses an internally generated timecode that can be started, paused, and stopped within the application. Once enabled, the timecode can be controlled from the [Play](../play) page.|
| **System Time** | Uses the computer's system clock as the timecode value. This is useful when playback or [Timecode Triggers](../play/timecode-triggers.md) need to follow wall-clock time.|
| **LTC**   | Uses an external LTC (Linear Timecode) module for timecode input. This is useful for synchronizing with external devices or live events. Requires USB Expert to be enabled.|
| **MTC**   | Uses MIDI Timecode (MTC) from a connected MIDI source. This is useful for synchronizing playback and [Timecode Triggers](../play/timecode-triggers.md) with external MIDI devices or show control systems.|
