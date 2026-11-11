---
id: timecode
title: Timecode
sidebar_label: Timecode
---

import Keys from '@site/src/components/key.ts';

## Timecode Panel

The **Timecode** panel displays the current timecode value. The timecode can be **internally generated**, taken from **system time**, or received from an **external source** (**LTC** or **MTC**).  

To use the Timecode panel, ensure that **Timecode** is enabled in the [Timecode Settings](../settings/settings-timecode.md), and select the desired timecode source.

### Using Internal Timecode

When using the **Internal** timecode:

- It is generated within the application.  
- It can be **started, paused, and stopped** from the [Play](../play) page.

### Using System Time

When using **System Time**:

- The timecode follows the computer's system clock.  
- Playback and [Timecode Triggers](../play/timecode-triggers.md) can be aligned to wall-clock time.

### Using External Timecode

When using an external source:

- **LTC** receives Linear Timecode through a USB Expert interface.
- **MTC** receives MIDI Timecode from a connected MIDI source.  

### Using Timecode with Layers and Triggers

- To synchronize a layer with the timecode, set the layer playmode to timecode on the [Layer Controls](../play/layer-controls.md).  
- To launch a specific bank element on a layer at a precise time, use [Timecode Triggers](../play/timecode-triggers.md).  

**Internal**, **System Time**, and **external** timecodes can be adjusted using an **offset** to fine-tune synchronization.