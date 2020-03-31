---
id: cue-list-timing
title: Cue List Timing
sidebar_label: Cue List Timing
---

Time and Fade Options for Cue Lists
-----------------------------------

Time settings are independent for each cue in the cue list. The display
shows which cue you are working with. You can select which cue is active
using **Wheel A** or **softkey A** of the **Cue Times menu**.

*See the [diagram below](#cue-linking--link-offset) for more information about overlaps and fade times.*

1. Press **Softkey A** \[Edit Times\] at the root menu then the **Swop** button
of the Cue List.

2. To change which cue you are editing, scroll through the list using
**Wheel A** or press \[Cue Number\] then type the cue number you want to
edit and press \<Enter\>. *The Chase arrow buttons to the right of the
Connect button also step through the cues.*

> You can select a range of cues, enabling you to alter the timings of
    multiple cues all in one go, by using **Wheel B**, or in the [Playback
    View window](editing-cue-lists.md#playback-view-window), dragging across the cues you want to select in the
    grid.

3. **Setting times**

    -   To set the **delay time** between pressing \<Go\> and the cue starting,
    press \[Delay In\] then type a time in seconds and press \<Enter\>.

    -   To set the **fade in time** of the cue, press \[Fade In\] then type a
    time in seconds and press \<Enter\>. *Both HTP and LTP channels are
    affected by the fade.*

    -   The **fade out time** of the cue is set by default to be the same as the
    fade in time. You can change the fade out time by pressing \[Fade
    Out\], then type the time in seconds and press \<Enter\>. To set
    equal to Fade In time, delete the time and leave the box blank.\
    *The fade out time starts when the next cue fires, so if you set the
    time to 1 second, the outgoing cue would start a 1 second fade out
    as the new cue begins its fade in.*

    -   The \[Delay Out\] setting of the cue would normally be used if the
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
**\[Link Wait For Go\]** | The cue waits for the Go button to be pressed then fires immediately. *Link Offset is disabled.*
**\[Link After Previous Cue\]** | The cue fires when the previous cue has finished its delay in and fade in times. A Link Offset can be set to add a delay between the previous cue finishing and this cue firing. The offset can be given as a time in seconds, or as a percentage of the fade time of the previous cue.
**\[Link With Previous Cue\]** | The cue fires at the same time as the previous cue fires. A Link Offset can be set to add a delay between the previous cue firing and this cue firing, set either in seconds or as a percentage of the fade time of the previous cue.

![Cue List Linking Diagram](/docs/images/image262.png)

These options allow you to create complex
self timed sequences by building up simple steps. For example if you
wanted the following effect:

-   \<Go\> is pressed, fixture one starts fading up over 20s

-   After 10s fixture two fades up over 15s

-   Both lights stay on for 5s

-   Both lights go off in 3s

You could program

-   **Cue 1** - Fixture 1 @ 100%, Fade In 20s, Link Wait For Go

-   **Cue 2** - Fixture 2 @ 100%, Fade In 15s, Link With Previous, Link
    Offset 10s

-   **Cue 3** - Fixture 1 AND 2 @ 0%, Fade Out 3s, Link After Previous, Link
    Offset 5s

> To obtain the effect which was called *"cue overlap"* in previous versions of software, use \[Link With Previous Cue\] and set a percentage Link Offset time. Link Offset of 100% is equivalent to Cue Overlap of 0% and vice versa.

Individual Attribute Fade Times
-------------------------------

You can set individual fade times for each **IPCGBES** attribute group. You
can also select which fixtures this is applied to. For example you can
make the position change take 2 seconds, but the colour change take 10
seconds.

Additionally you can set individual times for each attribute so you
could make the pan fade over a different time to the tilt.

To set times for an attribute group, first select the Set Times menu and
go to the cue you want to set as [described above](#time-and-fade-options-for-cue-lists), then press G \[Next\]
to go to the second page of options.

1. Press C \[Attribute times\].

2. All fixtures in the cue will be selected. *If you don't want to
change the times for any fixtures, deselect them now.* You can press the
**ALL** button (below Next Time) to select all fixtures in the cue or
**Shift + ALL** to deselect all fixtures.

3. Press the softkey for the attribute group you want to change.

4. Press A \[Delay\] to set the **delay time**, or press B \[Fade\] to set
the **fade time**. Press G \[Use global\] to remove the attribute group
timing and go back to the normal delay/fade times for the cue.

>  You can use \[Individual Attributes\] to set times for one attribute
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

Press \[Fixture Overlap\] *(on the second page of the [Cue Times menu](#time-and-fade-options-for-cue-lists))*
then enter 0-100 on the keypad to change how fixtures overlap in the
cue.

>   **100%** means all fixtures fade together *(the normal setting)*.
>
>   **0%** means that the first fixture will finish its fade before the next
>   one starts.
>
>   **50%** means that the 2^nd^ fixture will start fading when
>   the first one is half way through its fade.

To change the fixture order when using overlap, press \[Set Fixture
Order\]. Normally this is the order in which you selected the
fixtures when you programmed the cue. The Fixture window shows the
fixture order in large green numbers. Reorder the fixtures by
pressing \[Step Number\] then type the start number on the numeric
keys, then press the fixture **Select** buttons in the order you want
them.

For example, to set the order of 8 fixtures, press 1 on the
keypad, then press the **Select** button of the fixture to be first,
then the **Select** button for the second, and so on. You can set
several fixtures to the same number if you want them to change
simultaneously. If you press a fixture button twice, it will show X and be excluded
from the sequence.

Press \<Exit\> to finish setting the fixture order.

![Fixtures Window showing fixture order](/docs/images/image241.png)

Running a Cue List to Timecode
------------------------------

[](https://youtu.be/1abZT_ffIvs?t=20)

The console can run a cue list automatically to a timecode. This is very
useful for complex performances which must be exactly the same time
every time, or for unattended operation. Each step in the cue list is
assigned a time at which it will run.

The console can have up to 4 separate timecode sources. For each, the
timecode can be read from the system clock, from an internal timecode
source, from MIDI, SMPTE or from Winamp. Internal timecode is useful for
programming a sequence which will later be triggered by an external
timecode source.

1. **Connect** the cue list for which you want to set timecode.

2. Press \[Timecode\] on the top-level menu.

3. Press **softkey A** to select Timecode 1-4, and **softkey B** to select the desired
timecode source.

4. Press \[Record\].

5. Start the timecode source. *If using internal timecode, press
\[Play\] to start it.*

6. Press the red **Go** button to step each cue at the time you wish the
cue to start.

7. Press \[Record\] when you have finished.

To play back a timecoded cue list, press \[Connected Cue Lists\] on the
Timecode menu and select the cue list which is to be played. Then press
\[Timer Disabled/Enabled\] to enable the timecode input.

When you start the timecode source (or press \[Play\] if using internal
timecode), each cue will fire as the timecode matches its programmed
time.

You can edit the timecode for each cue by using **Wheel A** to select the
cue, then press \<Enter\> and type the new timecode for the cue.

![Playback View Window showing timecoded cues](/docs/images/image263.png)

While editing a time you can also use **Wheel B** to select multiple cues,
and use the softkey options to enter a value to change the time of all
the cues (offset, add a fixed time or subtract a fixed time).

You can open a timecode display window for each of the four possible
sources to show you the incoming timecode - press \[Open Workspace
Window\] then \[Timecode x\] where x is 1 to 4.

![Timecode 1 Workspace Window](/docs/images/image264.png)