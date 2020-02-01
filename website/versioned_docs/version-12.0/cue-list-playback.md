---
id: version-12.0-cue-list-playback
title: Cue List playback
sidebar_label: Cue List playback
original_id: cue-list-playback
---

Running a cue list
------------------

Raise the fader of the cue list and press the Go button to run the first
cue. The bottom section of the display shows the cue list; the current
cue is highlighted in grey and the next cue has a box round it.

![](/docs/images/image254.png)

Also the display relating to the playback fader shows information about
the cue list, including the current and next cue, fade progress of the
current cue, and fade in/out times.

![](/docs/images/image255.png)

You can also open the Playback View window to show more details of the
cue list by clicking the Cue List legend area or press \<View/Open\>
then the swop button of the playback. This shows all the timings, links
and tracking status and is very useful when running a theatre show on a
cuelist.

The option "Auto View On Connect" (in the User Settings/Wheels menu) if
enabled will automatically open the relevant Playback View window when
you fire a cue list.

![](/docs/images/image256.png)

When times are in progress on a cue, green progress bars are shown in
the Playback View window.

The Playback View will autoscroll to keep the active cue onscreen. You
can change the way the autoscroll works using the view options (click
the options/cog icon at the top of the window).

-   The HTP levels of cues in the cue list are mastered by the fader
    level.

-   You can pause a fade by pressing the \<Stop\> button above \<Go\>.
    Press \<Go\> again to resume the fade.

-   You can skip to any cue in the cue list by selecting a "next" cue
    using Wheel A, or using the left/right arrow keys. When you press
    \<Go\>, the cue list will run that cue next.

-   You can snap back to the previous cue by pressing the \<Snap Back\>
    button (not on all consoles)

-   On consoles with a \<Snap\> button (Arena and Tiger Touch 2), when
    you turn on the \<Snap\> button the \<Prev\>/\<Next\> buttons will
    snap immediately to the cue rather than going to the previous/next
    cue using the programmed times. There is also a User Setting \[Chase
    Snap\] which enables this mode on consoles which don't have the
    button.

-   You can jump directly to a cue by pressing \<Connect\>, then typing
    in the desired cue number, then pressing \<Enter\> or softkey A.
    Alternatively at the top level menu you can type the cue number then
    press \<Connect\>.

-   You can use Key Profiles to set the blue and grey buttons of the
    playback to have various functions including Go, Stop, Connect, Next
    Cue, Prev Cue, Cut Next Cue To Live, and Snap Back, see section
    10.2.5 below.

-   When you lower the fader for a cue list, the HTP channels will fade
    out, but the cue list will remain active. The section below details
    how to kill the cue list.

-   You can use timecode to play back a cue list automatically. See
    section 10.5.5 on page 250.

-   You can change the time for the next cue by entering the time on the
    keypad then pressing \<Go\>. You can jump to another cue and set a
    different time by typing the cue number then press \<Connect\>, then
    type the time and press \<Go\>.

Killing a cue list
------------------

Once a cue list is fired, it remains active until you kill it. You do
this by holding down the \<Avo\> button and pressing the blue Select
button of the cue list's handle.

You can change this in the Playback Options to make the cue list
automatically clear when the fader reaches zero (press \[Playback
Options\] at the program menu, then press the Select button of the cue
list, then select \[Fader\] \[Fader Mode Intensity Kill At 0\].

You can also use Key Profiles to configure one of the handle buttons to
release the cue list.

  --------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![info](/docs/images/image6.png){width="0.7361111111111112in" height="0.6527777777777778in"}   While the cue list remains active, any shapes/effects stored in the current cue will run even if the fader is at zero. If you are working with a cue list and have unexplained shapes occurring, check all cue lists have been killed.
  --------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Tracking
--------

By default, cue lists run in tracking mode. Only changes in attributes
are stored, everything else just continues at the level it was
previously set to. Tracking mode is usually used for theatrical
performances because it makes editing much easier; if you need to adjust
a dimmer level at the start of a scene, you don't have to go through and
change the level on every cue for that scene, the change just tracks
through the other cues until a new level is stored.

You can enable or disable Tracking mode globally for the whole cue list,
or each cue can have Tracking mode set individually from the Playback
View window (or Playback Options, \[Cue Options\]).

Settings are:

-   \[Global\] (default): obeys the global setting for the cue list.

-   \[Track\]: the cue will track

-   \[Block\]: the cue will not take tracking states from previous cues.
    All subsequent cues will track from the Block cue.

-   \[Solo Excluding Shapes\]: No states are tracked into or out of the
    cue, but shapes will track into the cue, except for dimmer shapes
    which will not track. This lets you have a cue that solos all levels
    but allows non-dimmer shapes to continue.

-   \[Cue Only\]: changes in this cue will not track to subsequent cues.
    Unchanged states from previous cues will be restored in subsequent
    cues.

-   \[Solo\]: No states are tracked into or out of a solo cue. States
    from previous cues will track to subsequent cues but will not appear
    in the solo cue.

-   \[Block Shapes\]: Any tracked shapes will stop from this cue. Other
    attributes will continue to be tracked. This lets you create a point
    where you can guarantee all shapes will stop.

Move In Dark (MID) functions
----------------------------

When using moving lights in theatre, often you would like them to be
positioned ready for the next cue so that you do not see them moving.
The Move In Dark function does this by automatically positioning the
fixture for the next cue when it is not lit.

Move In Dark options can be set either for the whole cue list or for
individual cues.

Options for the whole cue list are set by pressing \[Playback Options\]
then the select button for the cue list, then \[Playback\].

-   \[Disabled\] prevents Move In Dark functions for all cues in the cue
    list regardless of the individual cue settings.

-   \[Early\] will attempt to position a fixture as soon as possible
    unless overridden in an individual cue.

-   \[Late\] will position the fixture as late as possible.

-   \[Off\] turns off Move In Dark unless enabled in individual cues
    (default).

    For individual cues the options are set using the Playback Window.

-   \[Global\] uses the cue list's global setting (default)

-   \[Cue Number\] specifies a cue where you would like the move to
    occur

-   \[Cue Offset\] specifies a preferred number of cues in advance

-   \[Disabled\] prevents Move In Dark for this cue

-   \[Early\] will move as early as possible

-   \[Late\] will move as late as possible.

    Move In Dark delay and Move In Dark fade times can be set for the
    whole cue list or for each cue using the Set Times menu. Each cue
    also has a Move In Dark Inhibit option which prevents any movements
    during that cue (useful if you need to prevent fixture noise at a
    particular point).

    If the fixture has its intensity above zero or Move In Dark is
    inhibited when the Move In Dark is supposed to occur, the console
    will attempt the movement in the nearest suitable cue instead.

Key profile options for Cue Lists
---------------------------------

Using Key Profiles, you can assign different functions to the blue and
grey buttons of the playback handle. (The Sapphire Touch also has a
black button). If the cue list is stored on a touch button you can
assign a function to that. Settings are:

-   Disabled -- the button will do nothing

-   Flash -- all dimmer levels in the cue will flash to programmed
    level, when released the levels will return to previous level

-   Flash and Go -- as Flash, but when button released the cue list will
    advance to the next cue

-   Timed Flash -- as Flash, but fade in and out times will follow the
    cue times set

-   Timed Flash and Go -- as Flash and Go, but cue list will advance on
    release

-   Swop -- as Flash, but all other fixtures will black out

-   Latch -- as Flash, but dimmers will remain active until button
    pressed again

-   Go -- cue list will advance to next cue using times

-   Stop -- stops all fades in the cue list at their current point

-   Preload -- LTP channels of non-illuminated fixtures will move to
    positions in next cue

-   Connect -- connects this cue list to controls (same as pressing
    \<Connect\> then select button of cue list)

-   Tap Tempo -- set speed parameter by tapping the button

-   Next Cue -- - press repeatedly to select the next cue to be output.,
    going back

-   Next Cue + - press repeatedly to select next cue to output, going
    forwards

-   Review Live Cue -- replays the current cue using fade times

-   Cut Next Cue to Live -- output the cue as selected using above

-   Snap Back -- cue list will snap back to previous cue without times

-   Go Back -- cue list will go back to previous cue using fade times

-   Release -- release the playback using programmed release time

-   Select If -- press to select all fixtures used in the current cue


