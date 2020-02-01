---
id: playback-options 
title: Playback options
sidebar_label: Playback options
---
================

To set options for a cue, chase or cue list, press \[Playback Options\]
on the root menu, then press the select button of the playback to be
edited. A list of option categories will open on the softkeys; a window
will also open giving a touch-friendly version of the playback options.

![](/docs/images/image244.png)

Click on the ![](/docs/images/image245.png) button for a help window on each setting.

You can select multiple playbacks if you want to set the options the
same on all of them. The current option settings will be shown if they
are the same on all playbacks.

Playback options -- Playback tab
--------------------------------

**Blind:** Sets this individual playback to Blind mode. The playback
will then output only to Visualiser, not to the stage. This can be very
useful if you need to program and test a cue during a live show.

**Priority:** allows you to configure how playbacks will behave if you
turn on two playbacks controlling the same fixture. The priority can be
set to Low, Normal, High, Programmer or Very High. (Programmer gives the
same level as manually set attributes in the programmer). If a fixture
is being controlled by a playback and you turn on a playback of the same
or higher priority, then the new playback will take over. However, if
the new playback is set to lower priority than the first playback, the
fixture will not change.

This is useful if, for example, you've programmed looks using all your
fixtures, then you decide you want a couple of them to spotlight a
singer. If you set the Spotlight playback to be high priority, then
while it is active no other playback will affect the spotlight fixtures.

  -------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![tip](/docs/images/image7.png){width="0.7361111111111112in" height="0.6527777777777778in"}   Priority is useful when using Swop buttons for strobe-type effects where you want to black out everything else. If you have a position shape running on other fixtures, you don't want that to stop during the Swop, or it will look messy when you release the Swop button. So set the shape playback to have a higher priority than the strobe playback, and it will keep going during the strobe and continue smoothly when you release the Swop button.
  -------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   Attributes set by manually applying a palette to a fixture will
    override all playback priorities except Very High.

**Shape behaviour:** Controls the behaviour of Key Frame Shapes in this
playback.\
Global -- Use global setting from User Settings.\
Overlay - Shape continues to run over changes to attributes\
LTP -- If attributes are changed, the shape will stop running on those
attributes

**Fader mode:** This is the same option as set in the \[Edit Times\]
menu.\
Mode 0 -- Channels fade in as set by the fade time. The Fade Out time is
ignored. If times are set to zero, the HTP channels fade in with the
0-100% position of the playback fader and the LTP channels will snap.\
Mode 1 - HTP channels fade in and out as set by the fade out times (LTP
channels fade in but then remain as set in the cue). If times are set to
zero, the HTP levels will fade in and out with the fader and the LTP
channels will snap when the cue is fired.\
Mode 2 -- Both HTP and LTP channels follow the fader position. Useful
when used with a pan/tilt cue for manually tracking a spot across a
stage or down a catwalk using the fader position or for mixing colours
on RGB fixtures.\
Mode 3 - Crossfade cue. All channels, including intensity channels, will
fade to the settings in the new cue. All other cues fade out and all
other active playbacks become inactive; if you need to re-fire a
playback, take the fader to zero and put it up again. Useful for setting
a video playback state.

**Run on startup:** Sets this playback to run when the console powers
on. This can be disabled by the Auto Run Startup Playbacks option in
User Settings (turned on by default).

**Speed:** Default speed for this playback in BPM. This can be
overridden by a Rate or BPM master, or if the playback is a chase, can
be modified using the wheels.

**Xfade:** Default crossfade for this playback. If the playback is a
chase, this can be modified using the wheels and the changes will be
saved here.

**Speed multiplier:** Allows you to modify the speed, useful when
running multiple playbacks together

**Flash Fade In / Flash Fade Out:** Sets the fade in/fade out time for
this playback when it is fired using the flash button. By default these
are set to "AsIn" and "AsOut" which will use the fade time set for the
playback in the Times menu. This option allows you to set a different
flash action for the playback. Note that the Key Profile for the flash
button must be set to Timed Flash for this to work.

**Cross Fade HTP:** If on, makes the HTP (dimmer) channels in this cue
override other HTP channels, obeying the priority settings. Normally if
a dimmer channel was up in another cue, the highest dimmer setting would
continue to be output, but this option lets you create a playback that
will override this behaviour, so if you specifically need some fixtures
to be at 50%, this option will let you do that.

Playback options -- Handle TAB
------------------------------

**Handle paging:** allows you to lock the playback on a handle so that
it always appears on that handle no matter what page is selected. This
is useful if you have some general playbacks you want on every page,
without having to copy the playback onto each page.\
Unlocked -- playback will change with the pages as normal\
Transparent lock - playback will appear on all pages when the handle is
unprogrammed\
Locked -- this playback will appear on all pages. Playbacks programmed
on this handle on other pages will not be accessible.

**Key profile:** Sets the key profile individually for this playback.
Global sets the key profile back to the global setting for playbacks.

Playback options -- Fader tab
-----------------------------

**Fader mode:** same as in Playback tab, see above

**Shape size:** sets whether the fader position affects the size of
shapes in this playback\
Fixed -- no effect\
Fader --size of all types of shape set by fader position\
HTP fader -- only dimmer shapes are controlled by fader position

**Shape & effect speed:** sets whether the fader position affects the
speed of shapes in this playback

**Curve:** Allows you to set a different curve shape for this playback
-- curves are listed on the softkeys. The various curves are illustrated
in section 16.6 on page 328.

You can also allocate a Speed Master to the cue which will allow you to
modify the shape during playback, see section 8.2.4 on page 202.

Playback options -- Effects tab
-------------------------------

**Shape behaviour:** same as in playback tab, see above

**Speed source:** Allows you to allocate a Speed Master to this
playback. See section 8.2.4 on page 202.

**Size source:** Allows you to allocate a Size Master to this playback

**Shape size**: same as in fader tab, see above

**Shape & effect speed:** same as in fader tab, see above

  -------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![tip](/docs/images/image7.png){width="0.7361111111111112in" height="0.6527777777777778in"}   If you have a cue which contains only shapes to overlay on other cues, set the cue to \[Size on Fader\] and allocate a Speed Master. You can then create lots of different looks out of the shape by varying the size and speed at show time using the playback fader and the speed master.
  -------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Playback options -- Release tab
-------------------------------

**Release Mask:** lets you specify which attributes will be released to
the state they were in from a previously fired playback when this
playback is killed (you lower the fader to zero). You can also use the
Attribute Bank buttons to set the mask.

The mask can be set to Global or Local. Local means you can make
individual mask settings for this playback. Global uses the global
release mask which is set in the Release menu (press Release).

+----------------------------------+----------------------------------+
| ![tip](/docs/images/image7.p      | Release mask is useful when      |
| ng){width="0.7361111111111112in" | creating a temporary strobe      |
| height="0.6527777777777778in"}   | effect on a playback. Press      |
|                                  | \[Release Mask\] then the        |
|                                  | Intensity/Shutter attribute      |
|                                  | button. Now when you turn off    |
|                                  | the playback the shutter will    |
|                                  | release to its previous state    |
|                                  | and the strobe will stop.        |
|                                  |                                  |
|                                  | When using with chases you need  |
|                                  | to press \[Mask\] before         |
|                                  | pressing the Intensity/Shutter   |
|                                  | button.                          |
+----------------------------------+----------------------------------+

You can use Key Profiles to allocate one of the handle buttons to
release the playback.

**Release Time:** Sets a release fade time for this playback. Enter
blank time to return to global (Global release time is set in the User
Settings).


