---
id: playback-options
title: Playback Options
sidebar_label: Playback Options
original_id: playback-options
---

import Keys from '@site/src/components/key.ts';

[](https://youtu.be/Dz_lWDHukxo?t=20 "Playback Options")

To set options for a cue, chase or cue list, press <Keys.SoftKey>Playback Options</Keys.SoftKey>
on the root menu, then press the <strong>select</strong> button of the playback to be
edited. A list of option categories will open on the softkeys; a window
will also open giving a touch-friendly version of the playback options.

![Playback Options window for cue showing playback tab](/docs/images/Playback-Options-Playback-Tab.png)

Click on the <Keys.SoftKey>i</Keys.SoftKey> button for a help window on each setting.

> You can select multiple playbacks if you want to set the options the
same on all of them. The current option settings will be shown if they
are the same on all playbacks.

## Playback Tab


### Blind
Sets this individual playback to <strong>Blind</strong> mode. The playback
will then output only to Visualiser, not to the stage. *This can be very
useful if you need to program and test a cue during a live show.*

### Priority
Allows you to configure how playbacks will behave if you
turn on two playbacks controlling the same fixture. The priority can be
set to <strong>Low</strong>, <strong>Normal</strong>, <strong>High</strong>, <strong>Programmer</strong> or <strong>Very High</strong> *(Programmer gives the
same level as manually set attributes in the programmer)*. If a fixture
is being controlled by a playback and you turn on a playback of the same
or higher priority, then the new playback will take over. However, if
the new playback is set to lower priority than the first playback, the
fixture will not change.

This is useful if, for example, you've programmed looks using all your
fixtures, then you decide you want a couple of them to spotlight a
singer. If you set the spotlight playback to be high priority, then
while it is active no other playback will affect the spotlight fixtures.

> Priority is useful when using <strong>Swop</strong> buttons for strobe-type effects
where you want to black out everything else. If you have a position
shape running on other fixtures, you don't want that to stop during the
Swop, or it will look messy when you release the Swop button. So set the
shape playback to have a higher priority than the strobe playback, and
it will keep going during the strobe and continue smoothly when you
release the Swop button.

Attributes set by manually applying a palette to a fixture will
override all playback priorities except Very High.

### Shape Behaviour
Controls the behaviour of Key Frame Shapes in this playback:

Setting | Action
------: | ------
Global | Use global setting from [User Settings](../system-settings/user-settings.md#shape-behaviour)
Overlay | Shape continues to run over changes to attributes
LTP | If attributes are changed, the shape will stop running on those attributes

### Fader Mode
This is the same option as set in the [<Keys.SoftKey>Edit Times</Keys.SoftKey>
menu](cue-timing.md).

Setting | Action
------: | ------
Mode 0 | Channels fade in as set by the fade time. The Fade Out time is ignored. If times are set to zero, the HTP channels fade in with the 0-100% position of the playback fader and the LTP channels will snap.
Mode 1 | HTP channels fade in and out as set by the fade out times (LTP channels fade in but then remain as set in the cue). If times are set to zero, the HTP levels will fade in and out with the fader and the LTP channels will snap when the cue is fired.
Mode 2 | Both HTP and LTP channels follow the fader position. *Useful when used with a pan/tilt cue for manually tracking a spot across a stage or down a catwalk using the fader position or for mixing colours on RGB fixtures.*
Mode 3 | Crossfade cue. All channels, including intensity channels, will fade to the settings in the new cue. All other cues fade out and all other active playbacks become inactive; if you need to re-fire a playback, take the fader to zero and put it up again. *Useful for setting a video playback state.*

[](https://youtu.be/2fwM5S8nX3k?t=20 "Playback Modes")

### Run On Startup
Sets this playback to run when the console powers
on. This can be disabled by the
[Auto Run Startup Playbacks](../system-settings/user-settings.md#run-startup-playbacks) option in
[User Settings](../system-settings/user-settings.md) *(turned on by default)*.

This can be very useful for <strong>unattended applications</strong> to set up an
<strong>initial lighting state</strong>, or to run <strong>lamp on macros</strong>.

Power on playbacks show a Power symbol watermark in the playback
information area above the fader. If you open the
[Show Library window](../titan-basics/show-library.md)
there is a filter tab to Show Startup
Playbacks which allows you to list all the playbacks which are set to
run on startup.

![Power On Playback](/docs/images/Power-On-Playback.png)

### Speed
Default speed for this playback in BPM. This can be
overridden by a [Rate or BPM master](../running-the-show/playback-controls.md#speed-and-size-masters),
or if the playback is a [chase](../chases.md), can be modified using the wheels.

### XFade
Default crossfade for this playback. If the playback is a
[chase](../chases.md), this can be modified using the wheels and the changes will be
saved here.

### Speed Multiplier
Allows you to modify the speed, useful when
running multiple playbacks together

### Flash Fade In / Flash Fade Out
Sets the fade in/fade out time for
this playback when it is fired using the flash button. By default these
are set to *"As In"* and *"As Out"* which will use the fade time set for the
playback in the [Times menu](cue-timing.md). This option allows you to set a different
flash action for the playback. *Note that the [Key Profile](../system-settings/key-profiles.md) for the flash
button must be set to <strong>Timed Flash</strong> for this to work.*

### Cross Fade HTP
If on, makes the HTP (dimmer) channels in this cue
override other HTP channels, obeying the [priority](#priority) settings. Normally if
a dimmer channel was up in another cue, the highest dimmer setting would
continue to be output, but this option lets you create a playback that
will override this behaviour, so if you specifically need some fixtures
to be at 50%, this option will let you do that.

## Handle Tab

### Handle Paging
Allows you to lock the playback on a handle so that
it always appears on that handle no matter what page is selected. This
is useful if you have some general playbacks you want on every page,
without having to copy the playback onto each page.

Setting | Action
------: | ------
Unlocked | This playback will change with the pages as normal
Transparent Lock | This playback will appear on all pages when the handle is unprogrammed
Locked | This playback will appear on all pages. Playbacks programmed on this handle on other pages will not be accessible.

### Key Profile
Sets the [key profile](../system-settings/key-profiles.md) individually for this playback.
Global sets the [key profile](../system-settings/key-profiles.md) back to the global setting for playbacks.

## Fader Tab

### Fader Mode
Same as in Playback tab, [see above](#fader-mode)

### Shape Size
Sets whether the fader position affects the size of shapes in this
playback

Setting | Action
------: | ------
Fixed | No effect
Fader | Size of all types of shape set by fader position
HTP Fader | Only dimmer shapes are controlled by fader position

### Shape & Effect Speed
Sets whether the fader position affects the speed of shapes in this playback

### Curve
Allows you to set a different curve shape for this playback - curves
are listed on the softkeys. The various curves are illustrated
in the [Curves](../system-settings/curves.md) section.

---

> You can also allocate a
[Speed Master](../running-the-show/playback-controls.md#speed-and-size-masters)
to the cue which will allow you to
modify the shape during playback.

## Effects Tab

### Shape Behaviour
Same as in playback tab, [see above](#shape-behaviour)

### Speed Source
Allows you to allocate a
[Speed Master](../running-the-show/playback-controls.md#speed-and-size-masters)
to this playback.

### Size Source
Allows you to allocate a
[Size Master](../running-the-show/playback-controls.md#speed-and-size-masters)
to this playback

### Shape Size
Same as in fader tab, [see above](#shape-size)

### Shape & Effect Speed
Same as in fader tab, [see above](#shape-effect-speed)

> If you have a cue which contains only shapes to overlay on other cues, set the cue to <Keys.SoftKey>Size on Fader</Keys.SoftKey> and allocate a [Speed Master](../running-the-show/playback-controls.md#speed-and-size-masters). You can then create lots of different looks out of the shape by varying the size and speed at show time using the playback fader and the speed master.

## Release Tab

### Release Mask
Lets you specify which attributes will be released to
the state they were in from a previously fired playback when this
playback is killed (you lower the fader to zero). You can also use the
Attribute Bank buttons to set the mask.

The mask can be set to Global or Local. Local means you can make
individual mask settings for this playback. Global uses the global
release mask which is set in the <strong>Release menu</strong> (press Release).

> Release mask is useful when creating a temporary strobe
effect on a playback. Press <Keys.SoftKey>Release Mask</Keys.SoftKey> then the
Intensity/Shutter attribute button. Now when you turn off
the playback the shutter will release to its previous state
and the strobe will stop.

> When using with chases you need to press <Keys.SoftKey>Mask</Keys.SoftKey> before
pressing the Intensity/Shutter button.

You can use [Key Profiles](../system-settings/key-profiles.md) to
allocate one of the handle buttons to release the playback.

### Release Time
Sets a release fade time for this playback. Enter
blank time to return to global *([Global release time](../system-settings/user-settings.md#master-release-time) is set in the [User Settings](../system-settings/user-settings.md))*.
