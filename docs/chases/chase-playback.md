---
id: chase-playback
title: Chase Playback
sidebar_label: Chase Playback
---

import Keys from '@site/src/components/key.ts';

Playing Back a Chase
--------------------

To fire a chase, raise the fader of the playback. *(You can also use the pushbuttons
to <strong>Flash</strong> or <strong>Swop</strong> the chase)*. The chase will start to run. The bottom line of the
screen relating to the playback fader shows the current cue number and
speed of the chase.

![Chase playing on a playback](/docs/images/Chase-playing-on-a-playback.png)

> The HTP (intensity) channels in the chase will be controlled by the
    fader; if [fade times](chase-timing.md) are programmed, the fade will stop at the fader
    level. The other channels (LTP) will be set as soon as the fader
    moves above zero according to the fade times programmed in the
    chase. 

While the chase is running, the area of the screen above the wheels
shows details of the chase steps:

![Connected chase with speed and crossfade controls](/docs/images/Connected-chase-with-speed-and-crossfade-controls.png)

You can temporarily pause the chase by pressing the <Keys.HardKey>Stop</Keys.HardKey> button near
the wheels. Press <Keys.HardKey>Go</Keys.HardKey> to resume playback.

There are [many options](chase-options.md) you can set to determine the way the chase runs
and these are described in the rest of this chapter.

Connecting a Playback for Control
------------------------------

When you fire a chase or a cue list, the wheels and <Keys.HardKey>Stop</Keys.HardKey>/<Keys.HardKey>Go</Keys.HardKey> buttons are automatically
allocated to control the playback - this is
called <strong>connecting</strong> the playback. For a chase, the wheels control Speed and Crossfade. If you have more than one playback running,
you can choose which one is connected to the controls using the
<Keys.HardKey>Connect/Cue</Keys.HardKey> button (this button may also be labelled <Keys.HardKey>Connect</Keys.HardKey> or <Keys.HardKey>Cue</Keys.HardKey> depending on the console).

-   Connect a different playback to the controls by pressing <Keys.HardKey>Connect/Cue</Keys.HardKey>
    then the Select button of the playback you want to control.

-   Disconnect a playback from the controls by double pressing <Keys.HardKey>Connect/Cue</Keys.HardKey>.

-   You can turn off the <strong>"Auto Connect"</strong> option in the
    [User Settings > Wheels menu](../system-settings/user-settings.md#auto-connect)
    if you don't want to connect to a playback when
    you fire it. You will have to use the <Keys.HardKey>Connect/Cue</Keys.HardKey> button to manually
    connect the playback for control if you do this.

-   There is a further option "Auto View on Connect" in the
    [User Settings > Wheels menu](../system-settings/user-settings.md#auto-view-on-connect)
    which will automatically open the
    [view window](editing-a-chase.md#opening-a-chase-for-editing)
    for a playback when you fire it. *This is useful to keep the
    correct view open as you swap between chases.*

> Normally if you change the speed or crossfade of a chase on the wheels, the new
    setting is saved. However you can set this change to be temporary,
    so that when the show is reloaded the speed and fade will go back to
    the previously saved settings. Go to [User Settings](../system-settings/user-settings.md)
    (<Keys.HardKey>Avo</Keys.HardKey> + \[User
    Settings\], in the Times tab set the option <strong>[Connected View Sets](../system-settings/user-settings.md#connected-view-sets)</strong> to
    <strong>Temporary Speed</strong>. You can still save a temporary speed by pressing
    <Keys.SoftKey>Save Temporary Speed</Keys.SoftKey> in the Set Times menu.

Setting Speed and Crossfade for a Chase
---------------------------------------

The left wheel is assigned to control the speed of the chase it is
connected to. The speed is shown in Beats Per Minute (BPM) on the
display. You can also enter a speed from the keypad as described below.
The last speed you set on the wheel is always remembered, you do not
have to tell Titan to save it.

<strong>Crossfade</strong> is the "slope" between cues; with a crossfade of 0, the
fixtures snap instantly to the next cue, but with a crossfade of 100,
the fixtures spend the whole cue time fading to the next cue. With a
crossfade of 50, the fixtures delay for half the cue time and fade for
the other half of the time.

![Chases crossfade diagram](/docs/images/Chases-crossfade-diagram.png)

You set the crossfade and speed as follows:

1. Press <Keys.SoftKey>Edit Times</Keys.SoftKey> from the top level menu then the <strong>Select</strong> button of
the chase.

2. To set the <strong>crossfade</strong>, press <Keys.SoftKey>XFade</Keys.SoftKey> and type the fade from <strong>0 - 100</strong>.

*0 = no fade (the chase will "snap"), 100 = max fade (the chase will
move continuously from step to step).*

3. To set the <strong>speed</strong>, press <Keys.SoftKey>Speed</Keys.SoftKey>, type the new speed, then press
<Keys.HardKey>Enter</Keys.HardKey>.

*The speed can be set in Beats Per Minute (BPM) or seconds
depending in the [User Settings](../system-settings/user-settings.md).*

There are other options you can set for the chase from this menu
including [Fixture Overlap](../cues/cue-timing.md#fade-times-and-fixture-overlap),
which are described in the [Chase Timing](chase-timing.md).

You can set individual times for each cue in a chase and unlink cues
from each other so they wait for you to press the Go button. This is
done using the [Playback View](editing-a-chase.md#opening-a-chase-for-editing),
or the [<Keys.HardKey>Unfold</Keys.HardKey> function](editing-a-chase.md#editing-a-chase-using-unfold) which is
described in [Editing a Chase](editing-a-chase.md).

You can select whether the chase speed is displayed in seconds or in
Beats Per Minute (BPM). Press <Keys.HardKey>Avo</Keys.HardKey> and <Keys.SoftKey>User Settings</Keys.SoftKey>, then press
<Keys.SoftKey>Tempo Units</Keys.SoftKey> to set the option to <Keys.SoftKey>Tempo Units Seconds</Keys.SoftKey> or \[Tempo
Units Beats Per Minute (BPM)\].

You can also allocate a [Speed Master](../running-the-show/playback-controls.md#speed-and-size-masters)
to the chase which will allow you
to modify the chase speed during playback, see
[Speed and Size Masters](../running-the-show/playback-controls.md#speed-and-size-masters).

Manually Controlling the Steps of a Chase
-----------------------------------------

You can pause a chase, if the chase is connected to the wheels, by
pressing the <Keys.HardKey>Stop</Keys.HardKey> button next to the wheels. Press the red <Keys.HardKey>Go</Keys.HardKey> button
to resume playback of the chase.

While the chase is stopped you can use the <Keys.HardKey>Prev Step</Keys.HardKey>/<Keys.HardKey>Next Step</Keys.HardKey>
buttons <em>(← and → on some consoles)</em> next to the <Keys.HardKey>Connect/Cue</Keys.HardKey> button to
move to the next or previous step. The programmed fade time will be used
when moving between steps, unless you enable the [user setting \[Chase
Snap\]](../system-settings/user-settings.md#chase-snap), or press <Keys.HardKey>Snap</Keys.HardKey> button if the console has one.

You can also configure the blue and grey buttons of the playback handle
to be Stop and Go. This uses the [Key Profiles function](../system-settings/key-profiles.md).

1. Hold <Keys.HardKey>Avo</Keys.HardKey> and press <Keys.SoftKey>Edit Current Key Profile</Keys.SoftKey>.

2. If you are using the default [Key Profile] which is not editable, you
will be prompted to add a new profile.

3. Press <Keys.SoftKey>Chases</Keys.SoftKey> then choose either the Blue key or the Grey key.

4. Select <Keys.SoftKey>Go</Keys.SoftKey> or <Keys.SoftKey>Stop</Keys.SoftKey> from the list of functions. Then press <Keys.HardKey>Exit</Keys.HardKey>
and set the function for the other key if required.

5. Press <Keys.HardKey>Exit</Keys.HardKey> to continue using the console.

Changing Chase Direction
------------------------

The <Keys.HardKey>Prev Step</Keys.HardKey>/<Keys.HardKey>Next Step</Keys.HardKey> (← and → on some consoles) buttons next
to <Keys.HardKey>Connect/Cue</Keys.HardKey> set the direction of the connected chase. <em>If fitted</em>, the
↔ double-ended arrow button sets <strong>bounce</strong> mode where the chase will run to
the end then reverse. The <Keys.HardKey>Review</Keys.HardKey> key sets the chase to <strong>random</strong>.

Jumping to a Step
-----------------

You can jump directly to a step in a chase by pressing <Keys.HardKey>Connect/Cue</Keys.HardKey>, then
typing in the desired step number, then pressing <Keys.HardKey>Enter</Keys.HardKey> or softkey A.
Alternatively at the top level menu you can type the step number then
press <Keys.HardKey>Connect/Cue</Keys.HardKey>.
