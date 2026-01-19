---
id: timecode
title: Timecode
sidebar_label: Timecode
---

import Keys from '@site/src/components/key.ts';

## Timecode Panel

The **Timecode** panel displays the current timecode value. The timecode can either be **internally generated** or received from an **external source**.  

To use the Timecode panel, ensure that **Timecode** is enabled in the [Timecode Settings](../settings/settings-timecode.md), and select the desired timecode source.

### Using Internal Timecode

When using the **Internal** timecode:

- It is generated within the application.  
- It can be **started, paused, and stopped** from the [Play](../play) page.  

### Using Timecode with Layers and Triggers

- To synchronize a layer with the timecode, set the layer playmode to timecode on the [Layer Controls](../play/layer-controls.md).  
- To launch a specific bank element on a layer at a precise time, use [Timecode Triggers](../play/timecode-triggers.md).  

Both **internal** and **external** timecodes can be adjusted using an **offset** to fine-tune synchronization.