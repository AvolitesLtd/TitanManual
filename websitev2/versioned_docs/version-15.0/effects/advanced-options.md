---
id: advanced-options
title: Advanced Options
sidebar_label: Advanced Options
---

import Keys from '@site/src/components/key.ts';

Fading Shape Size and Speed
---------------------------

When a [shape is stored in a cue](shape-generator.md#using-shapes-in-cues),
you can set how the shape fades in
using the Edit Times and the playback [Options](../cues/playback-options.md) settings.

To set the shape size and/or speed from the fader position, press <Keys.HardKey>Options</Keys.HardKey>
(or <Keys.SoftKey>Options</Keys.SoftKey> softkey from the main menu) then press the select button of
the playback.

Using the <Keys.SoftKey>Fader</Keys.SoftKey>, <Keys.SoftKey>Shape Size</Keys.SoftKey> and <Keys.SoftKey>Shape Speed</Keys.SoftKey> buttons you can
set the shape size and speed to be fixed (how you programmed them) or to
grow larger/speed up as the fader is pushed up. You can also allocate a
Speed or Size Master to control the speed or size, see
[Speed and Size Masters](../running-the-show/playback-controls.md#speed-and-size-masters).

To set a fixed fade in time for the shape size, press <Keys.SoftKey>Edit Times</Keys.SoftKey>
from the top menu, then the <strong>playback select</strong> button, then set the
Delay/Fade times you want.

The [Fade Mode](../cues/playback-options.md#fader-mode) allows you to set mode 0 (fade in), mode 1 (fade in and
out) or mode 3 (crossfade). Mode 2 links fade times to the fader
position, however we recommend you use the playback Options listed above
to do this for shapes, and do not use Mode 2.

If a new cue is fired which controls the same attributes (for example, a
second shape controlling the same fixtures as a currently running
shape), the new shape will crossfade from the running shape.