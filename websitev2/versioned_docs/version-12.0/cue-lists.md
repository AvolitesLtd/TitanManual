---
id: cue-lists
title: Cue Lists
sidebar_label: Cue Lists
original_id: cue-lists
---

import Keys from '@site/src/components/key.ts';

Cue Lists (sometimes known as stacks or cue stacks) allow you to record
a sequence of [cues](cues.md), each of which can have its own [timings](cue-lists/cue-list-timing.md) and can be
triggered by the [Go button or run automatically to the next cue](cue-lists/cue-list-playback.md). This
allows you to build a complete show in a single list and is ideal for
[theatrical shows](cue-lists/theatre-programming.md) where the show must be exactly the same each time. Cue
lists can also be useful in busked shows, especially on consoles with a
small number of playback faders, to offer a number of different looks on
one fader.

Cue lists differ from [chases](chases.md) in the way the console handles changes
between cues. Cue lists track fixture state from previous cues and will
only change the fixture state if you have modified that fixture in the
cue; if there are no changes stored for the fixture, it will remain in
the same state. [Chases](chases.md) on the other hand would crossfade between cues,
fading out all fixtures which have no stored information in the new cue.

You can change the tracking behaviour of cue lists using the [tracking
option](cue-lists/cue-list-playback.md#tracking) for each cue: Block, This Cue Only and Solo - see Tracking
in the [Cue List Playback](cue-lists/cue-list-playback.md) section).

To view the contents of a cue list, touch the playback screen relating
to the fader or press <Keys.HardKey>Open/View</Keys.HardKey> then the **swop button** of the
playback.

![Playback View of Cue List](/docs/images/Cue-List-Window-with-Autoload-playback.png)