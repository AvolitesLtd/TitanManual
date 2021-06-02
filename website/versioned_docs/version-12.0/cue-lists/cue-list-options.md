---
id: cue-list-options
title: Cue List Options
sidebar_label: Cue List Options
original_id: cue-list-options
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Cue list options are set from the [Playback Options menu](../cues/playback-options.md). You can enter
the playback options menu by doing the following:

1. At the top level menu press <Keys.SoftKey>Playback Options</Keys.SoftKey>

2. Press the <strong>select</strong> button for the cue list you wish to edit

You can show the cue list options in a window by pressing <Keys.HardKey>View/Open</Keys.HardKey>
then the <strong>Select</strong> button of the cue list, then click the <strong>Options</strong> tab.

The Cue List options are mostly the same as for [Cues](../cues/playback-options.md) and [Chases](../chases/chase-options.md), only
the additional Cue List options are described here.

## Playback Tab

Most options are described in [Playback Options](../cues/playback-options.md), but these
are additional options for cue lists:

### Tracking
Enables or disables Tracking mode (where unchanged
settings persist from the previous cues). *Enabled by default.*

### Shape Tracking
Sets how shapes are tracked between cues.
Setting | Action
--- | ---
Off | Shapes will stop when the next cue starts
On | Shapes will track until stopped or changed in a cue
Local | Follows the tracking option above *(default option)*

### Move In Dark
Sets the mode for the whole cue list *(see [Move In Dark (MID) Functions](cue-list-playback.md#move-in-dark-mid-functions))*.

Setting | Action
--- | ---
Off | Obeys settings for individual cues *(default option)*
Disabled | No move in dark even if set in cues
Early | Moves as soon as fixture is off
Late | Moves in the last cue before the fixture is needed

### Loop Action
Sets what will happen at the end of the cue list

Setting | Action
--- | ---
Stop on final cue | Cue list will stop advancing once it reaches the last cue *(default)*
Loop | Cue list will go back to first cue after the last.* If Move in Dark is enabled, this will also loop.*

## Handle Tab

All these options are described in [Playback Options](../cues/playback-options.md#handle-tab).

## Fader Tab

### Fader Mode
Sets how the cue list fader behaves.

Setting | Action
--- | ---
Fader Mode Intensity Kill With Off | The fader masters the overall HTP level and the cue list remains active (connected) even when the fader is lowered to zero.
Fader Mode Intensity Kill At 0 | The fader masters the overall HTP level and the cue list is killed when the fader is lowered to zero.
Manual Crossfader | The fader behaves as a manual crossfade control, and the cue list will automatically step on to the next cue when the fader reaches the top or bottom of travel.

### Fire First Cue
Sets whether the first cue automatically fires when
the fader is raised.

## Effects Tab

All these options are described in [Playback Options](../cues/playback-options.md#effects-tab).

## Release Tab

Release Mask and Release Time are described in the [Playback Options](../cues/playback-options.md#release-tab).

### Cue Release
Allows you to create an overlay cue list with gaps in
it where the fixtures will return to their previous state. For example
you could create a cue list where every alternate cue sets the fixtures
to white, with the in between cues being blank. If this option is on,
the fixtures will bump to white then return to the colour set from a
previous look.

## Renumber all cues

Allows you to renumber the cue list if the numbering has got mixed up
after lots of editing. *This is only available on the softkey options,
not the touch window.*

## Cue Options

This option allows you to change settings for each cue in the cue list.
To select the cue number to edit, use the <strong>Wheel A</strong> or press
<strong>softkey A</strong> then enter the cue number on the numeric keypad.

-   <Keys.SoftKey>Curve</Keys.SoftKey> allows you to set a different fade curve for the cue; this
    affects how the fade progresses from one cue to the other *(for
    example you can select a fade which starts off slow, speeds up in
    the middle and then slows down at the end)*. Press <Keys.SoftKey>Curve</Keys.SoftKey> then
    select a new curve from the softkeys. The effect of the various
    curves is described in [Curves](../system-settings/curves.md).

-   <Keys.SoftKey>Link</Keys.SoftKey> can be set to <strong>Wait for Go</strong>, <strong>With Previous Cue</strong> or **After
    Previous Cue**. See [Cue Linking & Link Offset](cue-list-timing.md#cue-linking--link-offset)

-   <Keys.SoftKey>Move in Dark</Keys.SoftKey> opens the menu for Move In Dark options, see
    [Move in Dark (MID) Functions](cue-list-playback.md#move-in-dark-mid-functions)

-   <Keys.SoftKey>Move In Dark Inhibit</Keys.SoftKey> disables the
    [Move In Dark](cue-list-playback.md#move-in-dark-mid-functions) function for this
    cue

-   <Keys.SoftKey>Tracking</Keys.SoftKey> disables or enables [tracking](cue-list-playback.md#tracking) for this cue

-   <Keys.SoftKey>Legend</Keys.SoftKey> allows you to set a legend for the cue which is displayed
    on the cue list display

-   <Keys.SoftKey>Notes=</Keys.SoftKey> lets you enter a note for the cue *(e.g. "Leaves stage pursued
    by bear" or "wake up spot operator")*

-   <Keys.SoftKey>Autoload</Keys.SoftKey> see [Autoloading a Playback within a Cue List](creating-a-cue-list.md#autoloading-a-playback-within-a-cue-list)

-   <Keys.SoftKey>Cue disabled</Keys.SoftKey> allows you to temporarily disable this cue, see
    [Disabling a Cue](editing-cue-lists.md#disabling-a-cue)