---
id: chase-timing
title: Chase Timing
sidebar_label: Chase Timing
original_id: chase-timing
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Global Timings for Chases

When a chase is first programmed, each cue in the chase has identical
timing. This is called the global timing for the chase. If you want you
can then set each cue to have its own timings using the [Playback View
window](editing-a-chase.md#opening-a-chase-for-editing) or 
[Unfold](editing-a-chase.md#editing-a-chase-using-unfold). This is 
described below in [Individual Cue Times in Chases](#individual-cue-times-in-chases).

1. Press <Keys.SoftKey>Edit Times</Keys.SoftKey> from the top level menu then the <strong>Swop</strong> button of
the chase

2. Set the <strong>Crossfade</strong>, <strong>Speed</strong>, <strong>Fixture Overlap</strong> and <strong>Attribute Overlap</strong>
settings, as described below

3. Press <Keys.HardKey>Exit</Keys.HardKey> to finish

---

-   To set <strong>speed</strong>, press <Keys.SoftKey>Speed</Keys.SoftKey> then type the new speed, then press
    <Keys.HardKey>Enter</Keys.HardKey>. The speed can be set in Beats Per Minute (BPM) or seconds
    depending on the user settings.

-   To set <strong>crossfade</strong>, press <Keys.SoftKey>XFade</Keys.SoftKey> then type the fade from <strong>0 - 100</strong>
    and press <Keys.HardKey>Enter</Keys.HardKey>.


    *0=no fade (the chase will "snap"), 100=max fade (the chase will move
    continuously from cue to cue).*

-   You can assign the blue or grey handle button to be a <strong>tap tempo</strong>
    button using the [Key Profiles](../system-settings/key-profiles.md) option.

### Overlap

The <strong>Overlap</strong> functions allow you to offset and overlap the timing of
changes in the chase. This can create really amazing visual effects with
hardly any programming. The best way to learn about overlap is to
program a chase with two cues involving several fixtures, then
experiment with the overlap settings to see the various *"roll"* and *"peel
off"* effects which result.

The following diagram shows you the effects of fixture
overlap and attribute overlap in chases.

![Fixture Overlap and Attribute Overlap diagram for a chase](/docs/images/Fixture-Overlap-and-Attribute-Overlap-diagram-for-a-chase.png)

Press <Keys.SoftKey>Fixture Overlap</Keys.SoftKey> then enter <strong>0 - 100</strong> on the keypad to change
how fixtures overlap in the cue.


&nbsp;<strong>100%</strong> *(the normal setting)* means all fixtures fade together.


&nbsp;<strong>0%</strong> means that the first fixture will finish
its fade before the next one starts giving a "rolling" change across
a range of fixtures.


&nbsp;<strong>50%</strong> means that the 2^nd^ fixture will start
fading when the first one is half way through its fade.


The order of the fixtures is set by the order you selected them when the cue was
saved; you can change the order using <Keys.HardKey>Unfold</Keys.HardKey>.

## Individual Cue Times in Chases

You can configure each cue in a chase to have its own timing
information. You can use the Playback View window, or the Unfold
function to set individual times for cues in chases.

> It is easier to use a Cue List rather than a chase if you need a 
lot of different timings or link/unlinks. See [Cue Lists](../cue-lists.md).

### Using the Playback View Window

1. Touch the playback display relating to the fader, or press
<Keys.HardKey>Open/View</Keys.HardKey> then the <strong>swop</strong> button of the playback. The Playback View
window will open.
![Playback View for chase](/docs/images/Playback-View-for-chase.png)

2. In the grid, touch the times you want to edit

3. Use the softkey options to change the times or settings

4. Repeat steps 2 - 3 to change other times or settings.

> You can change a range of cues all at once by dragging across the
    grid to select multiple cells, or you can use <strong>wheel B</strong> to select
    multiple cells for editing.

### Using Unfold

1. Press <Keys.HardKey>Unfold</Keys.HardKey> then the <strong>Swop</strong> button of the chase to be edited.

2. Press <Keys.SoftKey>Edit Times</Keys.SoftKey> then the <strong>Swop</strong> button of the unfolded cue you
want to edit.

3. Set up the timing options as required. The options are described
below.

4. Press <Keys.HardKey>Unfold</Keys.HardKey> to get out of unfold mode.

### Timing Options

Initially all the timing options are set to Global. You can cancel any
individual timings and set the time back to global timings by pressing
the softkey for the option then pressing <Keys.SoftKey>Use Global</Keys.SoftKey>.

The timing options for the cue are:

-   Delay

-   Fade (in)

-   Fade Out

-   Fixture Overlap

-   Link with previous step

-   Attribute times (see [next section](#setting-attribute-fade-times-for-a-cue-in-a-chase))

Linking can be set to <Keys.SoftKey>Link After Previous</Keys.SoftKey> (the chase will run
automatically) or <Keys.SoftKey>Link Wait For Go</Keys.SoftKey> which will stop the chase until
you press <Keys.HardKey>Go</Keys.HardKey>.

## Setting Attribute Fade Times for a Cue in a Chase

For each cue in a chase, you can set individual fade times for each
attribute group (such as position). If you set a time, it overrides the
normal times. You can use the Cue View window, or the Unfold function to
set attribute times.

To set an attribute group fade time:

1. Press <Keys.HardKey>Open/View</Keys.HardKey> or <Keys.HardKey>Unfold</Keys.HardKey>, then the <strong>Swop</strong> button of the chase
to be edited.

2. Press <Keys.SoftKey>Edit Times</Keys.SoftKey> then touch the cue you want to edit in the
Playback View, or if using Unfold, press the <strong>Swop</strong> button of the unfolded
cue you want to edit.

3. Press the <strong>Attribute Options</strong> button (right hand side) for the
attribute you want to change.

4. Press <Keys.SoftKey>Delay</Keys.SoftKey> to set delay time or <Keys.SoftKey>Set fade</Keys.SoftKey> to set fade time.

5. Type the new time using the numeric keypad and press <Keys.HardKey>Enter</Keys.HardKey> to
save it, or press <Keys.SoftKey>Use Global</Keys.SoftKey> to delete the attribute times and go
back to the normal times.

6. Press <Keys.HardKey>Enter</Keys.HardKey> to save the changes.

## Rate and BPM Masters

Rate or BPM masters can be allocated to chases, allowing you to control
the speed from a separate master fader. You set this by pressing
<Keys.SoftKey>Effects</Keys.SoftKey> then <Keys.SoftKey>Speed Source</Keys.SoftKey> in the [Playback Options](../cues/playback-options.md) for the chase.
See [Speed and Size Masters](../running-the-show/playback-controls.md#speed-and-size-masters).

## Speed Multipliers

Speed multipliers allow you to modify the chase speed, either faster
(for example "x4") or slower (for example "/4"). This is useful when
running multiple chases together.

Press <Keys.SoftKey>Speed Multiplier</Keys.SoftKey> In the Edit Times menu for the chase, or use
the <Keys.SoftKey>Speed Multiplier</Keys.SoftKey> option in the Playback category of the 
[Playback Options](../cues/playback-options.md) for the chase. Use the <Keys.SoftKey>Multiply or Divide</Keys.SoftKey> softkey to swap
the value between multiply and divide.