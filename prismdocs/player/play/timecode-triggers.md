---
id: timecode-triggers
title: Timecode Triggers
sidebar_label: Timecode Triggers
---

import Keys from '@site/src/components/key.ts';

The **Timecode Triggers** panel is used to create and manage **Timecode Triggers**, which automatically launch bank elements on specific layers when the incoming timecode reaches a defined value.

Each **Timecode Trigger** is defined by:
- A timecode value
- A target layer
- A bank
- A bank element

### Trigger Behavior

- When the incoming timecode reaches the trigger’s time, the assigned bank element is automatically launched on the specified layer.
- When triggered, the event overrides any media currently playing on the target layer.
- Triggered timecode events are visually highlighted in the panel.
- Layers associated with timecode triggers display a **Timecode Trigger** badge for easy identification.

### Managing Triggers

The Timecode Triggers panel allows to:
- Add new timecode triggers
- Remove existing triggers
- Duplicate triggers for faster setup

All **Timecode Triggers** are stored as part of the current project and are restored when the project is reopened.

### Ordering and Visibility

**Timecode Triggers** are automatically ordered by timecode.

This ordering reflects the sequence in which triggers will be activated during playback.

> **Note:**  Timecode-based features require that **Timecode** is enabled in the [Timecode Settings](../settings/settings-timecode.md).
