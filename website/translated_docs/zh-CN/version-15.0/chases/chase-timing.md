---
id: version-15.0-chase-timing
title: Chase Timing
sidebar_label: Chase Timing
original_id: chase-timing
---

Global Timings for Chases
-------------------------

When a chase is first programmed, each cue in the chase has identical
timing. This is called the global timing for the chase. If you want you
can then set each cue to have its own timings using the [Playback View
window](editing-a-chase.md#opening-a-chase-for-editing) or 
[Unfold](editing-a-chase.md#editing-a-chase-using-unfold). This is 
described below in [Individual Cue Times in Chases](#individual-cue-times-in-chases).

1. Press \[Edit Times\] from the top level menu then the **Select** button of
the chase

2. Set the **Crossfade**, **Speed**, **Fixture Overlap** and **Attribute Overlap**
settings, as described below

3. Press \<Exit\> to finish

---

-   To set **speed**, press \[Speed\] then type the new speed, then press
    \<Enter\>. The speed can be set in Beats Per Minute (BPM) or seconds
    depending on the user settings.

-   To set **crossfade**, press \[XFade\] then type the fade from **0 - 100**
    and press \<Enter\>.\
    *0=no fade (the chase will "snap"), 100=max fade (the chase will move
    continuously from cue to cue).*

-   You can assign either of the handle buttons to be a **tap tempo**
    button using the [Key Profiles](../system-settings/key-profiles.md) option.

### Fixture Overlap

Fixture overlap creates an effect where the fixtures in the cue are changed in
sequence rather than all at the same time. This is described in more detail in
[Cue Timing](../cues/cue-timing.md#fade-times-and-fixture-overlap).

Individual Cue Times in Chases
------------------------------

You can configure each cue in a chase to have its own timing
information. You can use the Playback View window, or the Unfold
function to set individual times for cues in chases.

> It is easier to use a Cue List rather than a chase if you need a 
lot of different timings or link/unlinks. See [Cue Lists](../cue-lists.md).

### Using the Playback View Window

1. Touch the playback display relating to the fader, or press
\<Open/View\> then the **select** button of the playback. The Playback View
window will open.
![Playback View for chase](/docs/images/Playback-View-for-chase.png)

2. In the grid, touch the times you want to edit

3. Use the softkey options to change the times or settings

4. Repeat steps 2 - 3 to change other times or settings.

> You can change a range of cues all at once by dragging across the
    grid to select multiple cells, or you can use **wheel B** to select
    multiple cells for editing.

### Using Unfold

1. Press \<Unfold\> then the **Select** button of the chase to be edited.

2. Press \[Edit Times\] then the **Select** button of the unfolded cue you
want to edit.

3. Set up the timing options as required. The options are described
below.

4. Press \<Unfold\> to get out of unfold mode.

### Timing Options

Initially all the timing options are set to Global. You can cancel any
individual timings and set the time back to global timings by pressing
the softkey for the option then pressing \[Use Global\].

The timing options for the cue are:

-   Delay

-   Fade (in)

-   Fade Out

-   Fixture Overlap

-   Link with previous step

-   Attribute times (see [next section](#setting-attribute-fade-times-for-a-cue-in-a-chase))

Linking can be set to \[Link After Previous\] (the chase will run
automatically) or \[Link Wait For Go\] which will stop the chase until
you press \<Go\>.

## Setting Attribute Fade Times for a Cue in a Chase

For each cue in a chase, you can set individual fade times for each
attribute group (such as position). If you set a time, it overrides the
normal times. You can use the Cue View window, or the Unfold function to
set attribute times.

To set an attribute group fade time:

1. Press \<Open/View\> or \<Unfold\>, then the **Select** button of the chase
to be edited.

2. Press \[Edit Times\] then touch the cue you want to edit in the
Playback View, or if using Unfold, press the **Select** button of the unfolded
cue you want to edit.

3. Press the **Attribute Options** button (right hand side) for the
attribute you want to change.

4. Press \[Delay\] to set delay time or \[Set fade\] to set fade time.

5. Type the new time using the numeric keypad and press \<Enter\> to
save it, or press \[Use Global\] to delete the attribute times and go
back to the normal times.

6. Press \<Enter\> to save the changes.

## Rate and BPM Masters

Rate or BPM masters can be allocated to chases, allowing you to control
the speed from a separate master fader. You set this by pressing
\[Effects\] then \[Speed Source\] in the [Options](../cues/playback-options.md) for the chase.
See [Speed and Size Masters](../running-the-show/playback-controls.md#speed-and-size-masters).

## Speed Multipliers

Speed multipliers allow you to modify the chase speed, either faster
(for example "x4") or slower (for example "/4"). This is useful when
running multiple chases together.

Press \[Speed Multiplier\] In the Edit Times menu for the chase, or use
the \[Speed Multiplier\] option in the Times category of the 
[Options](../cues/playback-options.md) for the chase. Use the \[Multiply or Divide\] softkey to swap
the value between multiply and divide.
