---
id: cue-list-timing
title: Cue List Timing
sidebar_label: Cue List Timing
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Time and Fade Options for Cue Lists

The easiest way to set timing options for cues in cue lists is using the Playback View grid display (press <Keys.HardKey>Open/View</Keys.HardKey> then the **Select** button of the playback). Tap on the value you want to change, or drag to select multiple values to change. You can also select the *active cue* using **Wheel A** or by pressing <Keys.SoftKey>Select Cue Number</Keys.SoftKey> softkey in the **Edit Times** menu for the cue list. You can select a range of values using **Wheel B**.

Once you have selected values to change, the softkeys show you what you are setting.

![Cue List Timings](/docs/images/Cue-View-Timings.png)

For each cue you can independently set fade times for fixtures which are fading in (to a higher dimmer level) and fixtures which are fading out/down (to a lower dimmer level). The fade-out times are normally set to be "As In", so the "Fade In" time will be used for all fixtures.

LTP channels (all attributes other than brightness) will fade using the "Fade In" time.

-   <Keys.SoftKey>Fade In</Keys.SoftKey> sets the fade time of fixtures which are fading to a higher dimmer level than in the previous cue, and also fade time of LTP channels. If the Fade/Delay Out times are set to "As In" (default) then this will also set the fade time of fixtures which are fading to a lower dimmer level. Type a time in seconds and press <Keys.HardKey>Enter</Keys.HardKey>.
-   <Keys.SoftKey>Delay In</Keys.SoftKey> sets the delay time between pressing <Keys.HardKey>Go</Keys.HardKey> (or other cue trigger) and the start of the fade-in. 
-   <Keys.SoftKey>Fade Out</Keys.SoftKey> sets the fade time of fixtures which are fading out/down to a lower dimmer level than in the previous cue. It is set by default to be "As In", the same as the fade in time. To go back to "As In", delete the time and leave the box blank. 
-   <Keys.SoftKey>Delay Out</Keys.SoftKey> sets the delay time between pressing <Keys.HardKey>Go</Keys.HardKey> (or other cue trigger) and the start of the fade-out. It is set by default to be "As In", the same as the delay in time. To go back to "As In", delete the time and leave the box blank. 

## Cue Linking & Link Offset

Cues in cue lists may be linked together, allowing you to build up
complex self-timed sequences. The link options are set using the
softkeys and are:

Link Option | Action
---|---
**<Keys.SoftKey>Link Wait For Go</Keys.SoftKey>** | The cue waits for the Go button to be pressed then fires immediately. *Link Offset is disabled.*
**<Keys.SoftKey>Link After Previous Cue</Keys.SoftKey>** | The cue fires when the previous cue has finished its delay in and fade in times. A Link Offset can be set to add a delay between the previous cue finishing and this cue firing. The offset can be given as a time in seconds, or as a percentage of the fade time of the previous cue.
**<Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>** | The cue fires at the same time as the previous cue fires. A Link Offset can be set to add a delay between the previous cue firing and this cue firing, set either in seconds or as a percentage of the fade time of the previous cue.

![Cue List Linking Diagram](/docs/images/Cue-List-Linking-Diagram.png)

These options allow you to create complex
self timed sequences by building up simple steps. For example if you
wanted the following effect:

-   <Keys.HardKey>Go</Keys.HardKey> is pressed, fixture one starts fading up over 20s
-   After 10s fixture two fades up over 15s
-   Both lights stay on for 5s
-   Both lights go off in 3s

You could program

-   **Cue 1** - Fixture 1 @ 100%, Fade In 20s, Link Wait For Go
-   **Cue 2** - Fixture 2 @ 100%, Fade In 15s, Link With Previous, Link Offset 10s
-   **Cue 3** - Fixture 1 AND 2 @ 0%, Fade Out 3s, Link After Previous, Link Offset 5s

> To obtain the effect which was called *"cue overlap"* in previous versions of software, use <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey> and set a percentage Link Offset time. Link Offset of 100% is equivalent to Cue Overlap of 0% and vice versa.

## Individual Attribute Fade Times

You can set individual fade times for each **IPCGBES** attribute group. You
can also select which fixtures this is applied to. For example you can
make the position change take 2 seconds, but the colour change take 10
seconds.

Additionally you can set individual times for each attribute so you
could make the pan fade over a different time to the tilt.

To set times for an attribute group, first select the <Keys.SoftKey>Edit Times</Keys.SoftKey> menu and
go to the cue you want to set as [described above](#time-and-fade-options-for-cue-lists), then press <Keys.SoftKey>Next</Keys.SoftKey>
to go to the second page of options.

1. Press <Keys.SoftKey>Attribute times</Keys.SoftKey>.
2. All fixtures in the cue will be selected. *If you don't want to
change the times for any fixtures, deselect them now.* You can press the <Keys.HardKey>ALL</Keys.HardKey> button (below Next Time) to select all fixtures in the cue or <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>ALL</Keys.HardKey> to deselect all fixtures.
3. Press the softkey for the attribute group you want to change.
4. Press <Keys.SoftKey>Delay</Keys.SoftKey> to set the **delay time**, or press <Keys.SoftKey>Fade</Keys.SoftKey> to set
the **fade time**. Press <Keys.SoftKey>Use Global</Keys.SoftKey> to remove the attribute group
timing and go back to the normal delay/fade times for the cue.

>  You can use <Keys.SoftKey>Individual Attributes</Keys.SoftKey> to set times for one attribute
    within the group, for example just Pan from within the Position
    group. You can also use the [Cue View window](editing-cue-lists.md#editing-values-in-cue-view-window) to set times for
    individual attributes.

## Fixture Overlap

For each cue you can set a fixture overlap, which creates an effect where 
the fixtures in the cue are changed in sequence rather than all at the 
same time. This is described in more detail in
[Cue Timing](../cues/cue-timing.md#fade-times-and-fixture-overlap).

## Running a Cue List to Timecode

<Video videoId="1abZT_ffIvs" title="Recording Timecode" />

The console can run a cue list automatically to a timecode. This is very
useful for complex performances which must be exactly the same time
every time, or for unattended operation. Each step in the cue list is
assigned a time at which it will run.

> See also [Timelines](../timelines.md) which offer a more streamlined way of producing a show to timecode.

The console can have up to 4 separate timecode sources. For each, the
timecode can be read from the system clock, from an internal timecode
source, from MIDI, SMPTE or from Winamp. Internal timecode is useful for
programming a sequence which will later be triggered by an external
timecode source.

1. **Connect** the cue list for which you want to set timecode.
2. Press <Keys.SoftKey>Timecode</Keys.SoftKey> on the top-level menu.
3. Press **softkey A** to select Timecode 1-4, and **softkey B** to select the desired
timecode source.
4. Press <Keys.SoftKey>Record</Keys.SoftKey>.
5. Start the timecode source. *If using internal timecode, press <Keys.SoftKey>Play</Keys.SoftKey> to start it.*
6. Press the red <Keys.HardKey>Go</Keys.HardKey> button to step each cue at the time you wish the
cue to start.
7. Press <Keys.SoftKey>Record</Keys.SoftKey> when you have finished.

To play back a timecoded cue list, press <Keys.SoftKey>Connected Cue Lists</Keys.SoftKey> on the
Timecode menu and select the cue list which is to be played. Then press <Keys.SoftKey>Timer Disabled/Enabled</Keys.SoftKey> to enable the timecode input. Note that the **Timer Disabled/Enabled** toggle affects all four timecode streams as it is a general timecode switch. If you just want to disable a specific timecode stream then set its source to **No Timecode** at Step 3.

When you start the timecode source (or press <Keys.SoftKey>Play</Keys.SoftKey> if using internal
timecode), each cue will fire as the timecode matches its programmed
time.

In order to edit a cue's timecode, select the cue's timecode cell in Playback View
and enter the correct time, or - using the menu buttons - press <Keys.SoftKey>Edit Times</Keys.SoftKey>,
enter the cue number, toggle to the 3rd page of this menu with <Keys.SoftKey>Next</Keys.SoftKey>, click <Keys.SoftKey>Timecode = </Keys.SoftKey> and enter the new timestamp.


![Playback View Window showing timecoded cues](/docs/images/Playback-View-Window-showing-timecoded-cues.png)

While editing a time you can also use **Wheel B** to select multiple cues,
and use the softkey options to enter a value to change the time of all
the cues: <Keys.SoftKey>Timecode = </Keys.SoftKey> sets the timecode directly while a value set with <Keys.SoftKey>Offset = </Keys.SoftKey> 
can be used in <Keys.SoftKey>Add + </Keys.SoftKey> or <Keys.SoftKey>Subtract - </Keys.SoftKey>, to shift all selected timestamps by this timespan.

You can open a timecode display window for each of the four possible
sources to show you the incoming timecode - double press <Keys.HardKey>Open/View</Keys.HardKey> 
then press <Keys.SoftKey>Timecode x</Keys.SoftKey> (where x is 1 to 4) from the workspace select buttons.

![Timecode 1 Workspace Window](/docs/images/Timecode-1-Workspace-Window.png)
