---
id: programming-cues-and-chases
title: Programming cues and chases
sidebar_label: Programming cues and chases
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Cues

Set up the look to be recorded.

Press <Keys.HardKey>Record</Keys.HardKey>.

Set <Keys.SoftKey>Record Mode</Keys.SoftKey> to <Keys.SoftKey>Channel</Keys.SoftKey> (saves only modified attributes), <Keys.SoftKey>Fixture</Keys.SoftKey> (saves all attributes of fixtures which have been modified
or are selected), <Keys.SoftKey>Stage</Keys.SoftKey> (saves all attributes of all fixtures with
non-zero dimmer), or <Keys.SoftKey>Quick Build</Keys.SoftKey> (merges palettes and playbacks into
the cue when you select them).

To store, press a fader <strong>Select</strong> button, a macro/executor button or a touch
button in Playbacks window. (See [Creating a Cue](../cues/creating-a-cue.md)).

## Chases

Press <Keys.HardKey>Record</Keys.HardKey> twice (or <Keys.HardKey>Record</Keys.HardKey> then <Keys.SoftKey>Create Chase</Keys.SoftKey>).

Press <strong>Select</strong> button, a macro/executor button or a touch
button in Playbacks window.

Set up the look for the first step, press playback select button to
store. Repeat until all steps stored. Quick Build mode can be used to
merge palettes and cues into chase steps.

Press <Keys.HardKey>Exit</Keys.HardKey> to finish storing chase steps. (See [Programming Chases](../chases/creating-a-chase.md#programming-a-chase)).

## Timings

All times (cue times and fixture attribute times) are stored in the
programmer and are saved when you store a cue.

To edit times in the programmer before saving, press the <Keys.HardKey>Times</Keys.HardKey>
button (previously labelled <Keys.HardKey>Set</Keys.HardKey> on Quartz/Titan Mobile/Sapphire
Touch/Tiger Touch and <Keys.HardKey>Next Time</Keys.HardKey> on Pearl Expert/Tiger Touch 1).

For chases, speed and fade can be set with wheels A and B when the chase
is running.

To edit times in a saved cue, at top level menu press <Keys.SoftKey>Edit Times</Keys.SoftKey>
then the select button for the playback. Timing options are set from
softkeys.

[<Keys.SoftKey>Fixture Overlap</Keys.SoftKey>](../cues/cue-timing.md#fade-times-and-fixture-overlap)
sets each fixture to fade in sequence (100%=all
together, 0%=fixture waits for previous one to complete).

<Keys.SoftKey>Attribute times</Keys.SoftKey> sets individual fade times for different attributes.

&nbsp;<Keys.SoftKey>Fixture order</Keys.SoftKey> changes sequence for shapes and
[Fixture Overlap](../cues/cue-timing.md#fade-times-and-fixture-overlap).

See [Cue Timing](../cues/cue-timing.md)

## Cue Lists

Cues may be stored in a [Cue List](../cue-lists/creating-a-cue-list.md) which allows a full show to be run from
a Go button. Chases can be included using [Autoload](../cue-lists/creating-a-cue-list.md#autoloading-a-playback-within-a-cue-list). Cue lists can run in
tracking or non-tracking mode, set from <Keys.SoftKey>Options</Keys.SoftKey>.
