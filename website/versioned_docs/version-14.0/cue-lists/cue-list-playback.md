---
id: cue-list-playback
title: Cue List Playback
sidebar_label: Cue List Playback
original_id: cue-list-playback
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Running a Cue List

Raise the fader of the cue list and press the <strong>Go button</strong> to run the first
cue. The bottom section of the display shows the cue list; the current
cue is highlighted in grey and the next cue has a box round it.

![Connected Cue List view](/docs/images/Connected-Cue-List-view.png)

Also the playback legend above the fader shows information about
the cue list. The current cue is shown at the top in light blue, with the next cue below in dark blue.
Fade progress of the cue is shown in a bar graph in the light blue bar. Below
this the times for the next cue are shown - in time with up arrow and out time with down arrow,
d for delay and f for fade. If the cue list is set to manual crossfade a red 'M' is shown.

![Playback handle of running cue list](/docs/images/Playback-handle-of-running-cue-list.png)

You can also open the Playback View window to show more details of the
cue list by clicking the Cue List legend area or press <Keys.HardKey>View/Open</Keys.HardKey>
then the <strong>swop button</strong> of the playback. This shows all the timings, links
and tracking status and is very useful when running a [theatre show](theatre-programming.md) on a
cue list.

The option <strong>"Auto View On Connect"</strong> *(in the [User Settings/Wheels menu](../system-settings/user-settings.md#auto-view-on-connect))* if
enabled will automatically open the relevant Playback View window when
you fire a cue list.

![Playback View of Cue List with cue fade in progress](/docs/images/Playback-View-of-Cue-List-with-cue-fade-in-progress.png)

When times are in progress on a cue, green progress bars are shown in
the Playback View window - the left hand column shows overall progress,
and each timing section shows its own progress.

The Playback View will autoscroll to keep the active cue on-screen. You
can change the way the autoscroll works using the view options (click
the <Keys.ContextKey>Cog</Keys.ContextKey> button at the top of the window).

---

-   The HTP levels of cues in the cue list are mastered by the fader level.

-   You can <strong>pause</strong> a fade by pressing the <Keys.HardKey>Stop</Keys.HardKey> button above <Keys.HardKey>Go</Keys.HardKey>.
    Press <Keys.HardKey>Go</Keys.HardKey> again to resume the fade.

-   You can <strong>skip</strong> to any cue in the cue list by selecting a "next" cue
    using Wheel A, or using the left/right arrow keys. When you press
    <Keys.HardKey>Go</Keys.HardKey>, the cue list will run that cue next. If you decide you don't want
	to skip, you can reset the cue list (so the next cue will be the cue after the current cue)
	by pressing the <Keys.HardKey>Prev Cue</Keys.HardKey> and <Keys.HardKey>Next Cue</Keys.HardKey> buttons together.
	
-	You can go back to the previous cue following fade times by pressing <Keys.HardKey>Stop</Keys.HardKey>
	while the cue list is paused.

-   You can snap back to the previous cue by pressing the <Keys.HardKey>Snap Back</Keys.HardKey>
    button *(not on all consoles)*

-   On consoles with a <Keys.HardKey>Snap</Keys.HardKey> button *(Arena and Tiger Touch II)*, when
    you turn on the <Keys.HardKey>Snap</Keys.HardKey> button the <Keys.HardKey>Prev</Keys.HardKey>/<Keys.HardKey>Next</Keys.HardKey> buttons will
    snap immediately to the cue rather than going to the previous/next
    cue using the programmed times. There is also a 
    [User Setting <Keys.SoftKey>Chase Snap</Keys.SoftKey>](../system-settings/user-settings.md#chase-snap)
    which enables this mode on consoles which don't have the
    button.

-   You can jump directly to a cue by pressing <Keys.HardKey>Connect/Cue</Keys.HardKey>, then typing
    in the desired cue number, then pressing <Keys.HardKey>Enter</Keys.HardKey> or softkey A.
    Alternatively at the top level menu you can type the cue number then
    press <Keys.HardKey>Connect/Cue</Keys.HardKey>. (This button may be labelled <Keys.HardKey>Connect</Keys.HardKey> or
	<Keys.HardKey>Cue</Keys.HardKey> depending on the console).

-   You can use [Key Profiles](../system-settings/key-profiles.md) to set the blue and grey buttons of the
    playback to have various functions including <strong>Go</strong>, <strong>Stop</strong>, <strong>Connect</strong>, **Next
    Cue<strong>, </strong>Prev Cue<strong>, </strong>Cut Next Cue To Live<strong>, and </strong>Snap Back**, see [Key Profiles](../system-settings/key-profiles.md#cue-lists).

-   When you lower the fader for a cue list, the HTP channels will fade
    out, but the cue list will remain active. The section below details
    how to [kill the cue list](#killing-a-cue-list).

-   You can use <strong>timecode</strong> to play back a cue list automatically. See
    section [Cue List Timing](cue-list-timing.md#running-a-cue-list-to-timecode).

-   You can change the time for the next cue by entering the time on the
    keypad then pressing <Keys.HardKey>Go</Keys.HardKey>. You can jump to another cue and set a
    different time by typing the cue number then press <Keys.HardKey>Connect/Cue</Keys.HardKey>, then
    type the time and press <Keys.HardKey>Go</Keys.HardKey>.

## Killing a Cue List

Once a cue list is fired, it remains active until you kill it. You do
this by holding down the <Keys.HardKey>Avo</Keys.HardKey> button and pressing the blue Select
button of the cue list's handle.

You can change this in the playback [Options](../cues/playback-options.md) to make the cue list
automatically clear when the fader reaches zero (press <Keys.HardKey>Options</Keys.HardKey> or the menu button <Keys.SoftKey>Options</Keys.SoftKey> at the program menu, then press the Select button of the cue
list, then select <Keys.SoftKey>Fader</Keys.SoftKey> <Keys.SoftKey>Fader Mode Intensity Kill At 0</Keys.SoftKey>.

You can also use [Key Profiles](../system-settings/key-profiles.md#cue-lists) to configure one of the handle buttons to
release the cue list.

> While the cue list remains active, any shapes/effects stored in the current cue will run even if the fader is at zero. If you are working with a cue list and have unexplained shapes occurring, check all cue lists have been killed.

## Tracking

<Video videoId="B2fTri0G2-A" title="Tracking in Cuelists" />

By default, cue lists run in tracking mode. Only changes in attributes
are stored, everything else just continues at the level it was
previously set to. Tracking mode is usually used for [theatrical
performances](theatre-programming.md) because it makes editing much easier; if you need to adjust
a dimmer level at the start of a scene, you don't have to go through and
change the level on every cue for that scene, the change just tracks
through the other cues until a new level is stored.

You can enable or disable Tracking mode globally for the whole cue list,
or each cue can have Tracking mode set individually from the Playback
View window (or Options, <Keys.SoftKey>Cue Options</Keys.SoftKey>).

Settings are:

Setting | Action
--- | ---
<Keys.SoftKey>Global</Keys.SoftKey> *(default)* | Obeys the global setting for the cue list.
<Keys.SoftKey>Track</Keys.SoftKey> | The cue will track
<Keys.SoftKey>Block</Keys.SoftKey> | The cue will not take tracking states from previous cues. All subsequent cues will track from the Block cue.
<Keys.SoftKey>Solo Excluding Shapes</Keys.SoftKey> | No states are tracked into or out of the cue, but shapes will track into the cue, except for dimmer shapes which will not track. This lets you have a cue that solos all levels but allows non-dimmer shapes to continue.
<Keys.SoftKey>Cue Only</Keys.SoftKey> | Changes in this cue will not track to subsequent cues. Unchanged states from previous cues will be restored in subsequent cues.
<Keys.SoftKey>Solo</Keys.SoftKey> | No states are tracked into or out of a solo cue. States from previous cues will track to subsequent cues but will not appear in the solo cue.
<Keys.SoftKey>Block Shapes</Keys.SoftKey> | Any tracked shapes will stop from this cue. Other attributes will continue to be tracked. This lets you create a point where you can guarantee all shapes will stop.

## Move In Dark (MID) Functions

When using moving lights in theatre, often you would like them to be
positioned ready for the next cue so that you do not see them moving.
The Move In Dark function does this by automatically positioning the
fixture for the next cue when it is not lit.

Move In Dark options can be set either for the whole cue list or for
individual cues.

Options for the whole cue list are set by pressing <Keys.HardKey>Options</Keys.HardKey> (or the <Keys.SoftKey>Options</Keys.SoftKey> softkey on the top level menu)
then the select button for the cue list, then <Keys.SoftKey>Playback</Keys.SoftKey>.

Setting | Action
---|---
<Keys.SoftKey>Disabled</Keys.SoftKey> | Prevents Move In Dark functions for all cues in the cue list regardless of the individual cue settings
<Keys.SoftKey>Early</Keys.SoftKey> | Will attempt to position a fixture as soon as possible unless overridden in an individual cue
<Keys.SoftKey>Late</Keys.SoftKey> | Will position the fixture as late as possible
<Keys.SoftKey>Off</Keys.SoftKey> *(default)* | Turns off Move In Dark unless enabled in individual cues

For individual cues the options are set using the Playback Window.

Setting | Action
---|---
<Keys.SoftKey>Global</Keys.SoftKey> *(default)* | Uses the cue list's global setting
<Keys.SoftKey>Cue Number</Keys.SoftKey> | Specifies a cue where you would like the move to occur
<Keys.SoftKey>Cue Offset</Keys.SoftKey> | Specifies a preferred number of cues in advance
<Keys.SoftKey>Disabled</Keys.SoftKey> | Prevents Move In Dark for this cue
<Keys.SoftKey>Early</Keys.SoftKey> | Will move as early as possible
<Keys.SoftKey>Late</Keys.SoftKey> | Will move as late as possible

Move In Dark delay and Move In Dark fade times can be set for the
whole cue list or for each cue using the Set Times menu. Each cue
also has a Move In Dark Inhibit option which prevents any movements
during that cue (useful if you need to prevent fixture noise at a
particular point).

If the fixture has its intensity above zero or Move In Dark is
inhibited when the Move In Dark is supposed to occur, the console
will attempt the movement in the nearest suitable cue instead.

## Key Profile Options for Cue Lists

Using [Key Profiles](../system-settings/key-profiles.md), you can assign different functions to the blue and
grey buttons of the playback handle. (*The Sapphire Touch also has a
black button)*. If the cue list is stored on a touch button you can
assign a function to that. See [Key Profiles](../system-settings/key-profiles.md#cue-lists) for a full list of functions.
