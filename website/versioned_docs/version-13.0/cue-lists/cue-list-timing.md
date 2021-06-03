---
id: cue-list-timing
title: Cue List Timing
sidebar_label: Cue List Timing
original_id: cue-list-timing
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Time and Fade Options for Cue Lists
-----------------------------------

Time settings are independent for each cue in the cue list. The display
shows which cue you are working with. You can select which cue is active
using <strong>Wheel A</strong> or <strong>softkey A</strong> of the <strong>Cue Times menu</strong>.

*See the [diagram below](#cue-linking--link-offset) for more information about overlaps and fade times.*

1. Press <strong>Softkey A</strong> <Keys.SoftKey>Edit Times</Keys.SoftKey> at the root menu then the <strong>Swop</strong> button
of the Cue List.

2. To change which cue you are editing, scroll through the list using
&nbsp;<strong>Wheel A</strong> or press <Keys.SoftKey>Cue Number</Keys.SoftKey> then type the cue number you want to
edit and press <Keys.HardKey>Enter</Keys.HardKey>.

	- The Chase arrow buttons to the right of the
Connect button also step through the cues.

	- You can select a range of cues, enabling you to alter the timings of
    multiple cues all in one go, by using <strong>Wheel B</strong>, or in the
    [Playback View window](editing-cue-lists.md#playback-view-window),
    dragging across the cues you want to select in the grid.

3. <strong>Setting times</strong>

    -   To set the <strong>delay time</strong> between pressing <Keys.HardKey>Go</Keys.HardKey> and the cue starting,
    press <Keys.SoftKey>Delay In</Keys.SoftKey> then type a time in seconds and press <Keys.HardKey>Enter</Keys.HardKey>.

    -   To set the <strong>fade in time</strong> of the cue, press <Keys.SoftKey>Fade In</Keys.SoftKey> then type a
    time in seconds and press <Keys.HardKey>Enter</Keys.HardKey>. *Both HTP and LTP channels are
    affected by the fade.*

    -   The <strong>fade out time</strong> of the cue is set by default to be the same as the
    fade in time. You can change the fade out time by pressing <Keys.SoftKey>Fade
    Out</Keys.SoftKey>, then type the time in seconds and press <Keys.HardKey>Enter</Keys.HardKey>. To set
    equal to Fade In time, delete the time and leave the box blank.


    *The fade out time starts when the next cue fires, so if you set the
    time to 1 second, the outgoing cue would start a 1 second fade out
    as the new cue begins its fade in.*

    -   The <Keys.SoftKey>Delay Out</Keys.SoftKey> setting of the cue would normally be used if the
    cue links automatically to the next cue, and sets a wait time
    before the next cue starts its fade in. So the outgoing cue would
    start to fade out, and the delay out time would run before the new
    cue begins its fade in.

Cue Linking & Link Offset
-------------------------

Cues in cue lists may be linked together, allowing you to build up
complex self-timed sequences. The link options are set using the
softkeys and are:

Link Option | Action
---|---
&nbsp;<strong><Keys.SoftKey>Link Wait For Go</Keys.SoftKey></strong> | The cue waits for the Go button to be pressed then fires immediately. *Link Offset is disabled.*
&nbsp;<strong><Keys.SoftKey>Link After Previous Cue</Keys.SoftKey></strong> | The cue fires when the previous cue has finished its delay in and fade in times. A Link Offset can be set to add a delay between the previous cue finishing and this cue firing. The offset can be given as a time in seconds, or as a percentage of the fade time of the previous cue.
&nbsp;<strong><Keys.SoftKey>Link With Previous Cue</Keys.SoftKey></strong> | The cue fires at the same time as the previous cue fires. A Link Offset can be set to add a delay between the previous cue firing and this cue firing, set either in seconds or as a percentage of the fade time of the previous cue.

![Cue List Linking Diagram](/docs/images/Cue-List-Linking-Diagram.png)

These options allow you to create complex
self timed sequences by building up simple steps. For example if you
wanted the following effect:

-   <Keys.HardKey>Go</Keys.HardKey> is pressed, fixture one starts fading up over 20s

-   After 10s fixture two fades up over 15s

-   Both lights stay on for 5s

-   Both lights go off in 3s

You could program

-   <strong>Cue 1</strong> - Fixture 1 @ 100%, Fade In 20s, Link Wait For Go

-   <strong>Cue 2</strong> - Fixture 2 @ 100%, Fade In 15s, Link With Previous, Link
    Offset 10s

-   <strong>Cue 3</strong> - Fixture 1 AND 2 @ 0%, Fade Out 3s, Link After Previous, Link
    Offset 5s

> To obtain the effect which was called *"cue overlap"* in previous versions of software, use <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey> and set a percentage Link Offset time. Link Offset of 100% is equivalent to Cue Overlap of 0% and vice versa.

Individual Attribute Fade Times
-------------------------------

You can set individual fade times for each <strong>IPCGBES</strong> attribute group. You
can also select which fixtures this is applied to. For example you can
make the position change take 2 seconds, but the colour change take 10
seconds.

Additionally you can set individual times for each attribute so you
could make the pan fade over a different time to the tilt.

To set times for an attribute group, first select the Set Times menu and
go to the cue you want to set as [described above](#time-and-fade-options-for-cue-lists), then press G <Keys.SoftKey>Next</Keys.SoftKey>
to go to the second page of options.

1. Press C <Keys.SoftKey>Attribute times</Keys.SoftKey>.

2. All fixtures in the cue will be selected. *If you don't want to
change the times for any fixtures, deselect them now.* You can press the
&nbsp;<strong>ALL</strong> button (below Next Time) to select all fixtures in the cue or
&nbsp;<strong>Shift + ALL</strong> to deselect all fixtures.

3. Press the softkey for the attribute group you want to change.

4. Press A <Keys.SoftKey>Delay</Keys.SoftKey> to set the <strong>delay time</strong>, or press B <Keys.SoftKey>Fade</Keys.SoftKey> to set
the <strong>fade time</strong>. Press G <Keys.SoftKey>Use global</Keys.SoftKey> to remove the attribute group
timing and go back to the normal delay/fade times for the cue.

>  You can use <Keys.SoftKey>Individual Attributes</Keys.SoftKey> to set times for one attribute
    within the group, for example just Pan from within the Position
    group. You can also use the [Cue View window](editing-cue-lists.md#editing-values-in-cue-view-window) to set times for
    individual attributes.

Fixture Overlap
---------------

For each cue you can set a (linked together) fixture overlap, which
causes Titan to apply the settings in the cue to each fixture
sequentially giving a "rolling" change across the fixtures in the cue.
This can create some great effects without much programming on your
part.

Press <Keys.SoftKey>Fixture Overlap</Keys.SoftKey> *(on the second page of the [Cue Times menu](#time-and-fade-options-for-cue-lists))*
then enter 0-100 on the keypad to change how fixtures overlap in the
cue.

>   <strong>100%</strong> means all fixtures fade together *(the normal setting)*.
>
>   <strong>0%</strong> means that the first fixture will finish its fade before the next
>   one starts.
>
>   <strong>50%</strong> means that the 2^nd^ fixture will start fading when
>   the first one is half way through its fade.

To change the fixture order when using overlap, press <Keys.SoftKey>Set Fixture
Order</Keys.SoftKey>. Normally this is the order in which you selected the
fixtures when you programmed the cue. The Fixture window shows the
fixture order in large green numbers. Reorder the fixtures by
pressing <Keys.SoftKey>Step Number</Keys.SoftKey> then type the start number on the numeric
keys, then press the fixture <strong>Select</strong> buttons in the order you want
them.

For example, to set the order of 8 fixtures, press 1 on the
keypad, then press the <strong>Select</strong> button of the fixture to be first,
then the <strong>Select</strong> button for the second, and so on. You can set
several fixtures to the same number if you want them to change
simultaneously. If you press a fixture button twice, it will show X and be excluded
from the sequence.

Press <Keys.HardKey>Exit</Keys.HardKey> to finish setting the fixture order.

![Fixtures Window showing fixture order](/docs/images/Fixtures-Window-showing-fixture-order.png)

Running a Cue List to Timecode
------------------------------

<Video videoId="1abZT_ffIvs" title="Recording Timecode" />

The console can run a cue list automatically to a timecode. This is very
useful for complex performances which must be exactly the same time
every time, or for unattended operation. Each step in the cue list is
assigned a time at which it will run.

The console can have up to 4 separate timecode sources. For each, the
timecode can be read from the system clock, from an internal timecode
source, from MIDI, SMPTE or from Winamp. Internal timecode is useful for
programming a sequence which will later be triggered by an external
timecode source.

1. <strong>Connect</strong> the cue list for which you want to set timecode.

2. Press <Keys.SoftKey>Timecode</Keys.SoftKey> on the top-level menu.

3. Press <strong>softkey A</strong> to select Timecode 1-4, and <strong>softkey B</strong> to select the desired
timecode source.

4. Press <Keys.SoftKey>Record</Keys.SoftKey>.

5. Start the timecode source. *If using internal timecode, press
<Keys.SoftKey>Play</Keys.SoftKey> to start it.*

6. Press the red <strong>Go</strong> button to step each cue at the time you wish the
cue to start.

7. Press <Keys.SoftKey>Record</Keys.SoftKey> when you have finished.

To play back a timecoded cue list, press <Keys.SoftKey>Connected Cue Lists</Keys.SoftKey> on the
Timecode menu and select the cue list which is to be played. Then press
<Keys.SoftKey>Timer Disabled/Enabled</Keys.SoftKey> to enable the timecode input.

When you start the timecode source (or press <Keys.SoftKey>Play</Keys.SoftKey> if using internal
timecode), each cue will fire as the timecode matches its programmed
time.

You can edit the timecode for each cue by using <strong>Wheel A</strong> to select the
cue, then press <Keys.HardKey>Enter</Keys.HardKey> and type the new timecode for the cue.

![Playback View Window showing timecoded cues](/docs/images/Playback-View-Window-showing-timecoded-cues.png)

While editing a time you can also use <strong>Wheel B</strong> to select multiple cues,
and use the softkey options to enter a value to change the time of all
the cues (offset, add a fixed time or subtract a fixed time).

You can open a timecode display window for each of the four possible
sources to show you the incoming timecode - press <Keys.SoftKey>Open Workspace
Window</Keys.SoftKey> then <Keys.SoftKey>Timecode x</Keys.SoftKey> where x is 1 to 4.

![Timecode 1 Workspace Window](/docs/images/Timecode-1-Workspace-Window.png)
