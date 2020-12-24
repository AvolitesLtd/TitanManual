---
id: timeline-options
title: Timeline Options
sidebar_label: Timeline options
---

Timelines have a number of options which set how they operate. 
Press \<Options\> (or the \[Options\] softkey on the top level menu) then the **select** button for the timeline you wish to edit.

--- 

## Handle Tab

All options are the same as for a cue, see [Options](../cues/playback-options.md#handle-tab).

--- 

## Times Tab

![Timeline Options: Times](/docs/images/Timeline-Options-Times.png)

These options let you set the duration and start time of the timeline. These set the loop points when you are using the 
[Loop function](../timelines/timeline-options.md#timecode-tab) or are used to fire the timeline automatically when the timecode is in the correct range.
They can also be used to set limits on the timeline so you can be sure nothing will happen if you get sent some wayward timecode.

--- 

## Fader Tab

![Timeline Options: Fader](/docs/images/Timeline-Options-Fader.png)

Sets what happens to an internal timecode source when the playback fader containing the timeline is raised or zeroed. If an external
timecode source is being used then this option has no effect.

Option              | Action
--------------------|---
Fader Raised Action | **No Action**: The internal timecode source is not changed (default).<br>Play: The internal timecode source is started.
Fader Zero Action   | **No Action**: The internal timecode source is not changed (default).<br>Stop: The internal timecode source is stopped. <br>Pause: The internal timecode source is paused at the current time.

> This option is useful for creating a complicated one-shot effect for busking. Create the effect as a timeline using internal timecode and set these options to **Play**/**Stop** - you can fire your effect just by raising the fader and when you lower the fader to zero the effect will reset.

--- 

## Release Tab

![Timeline Options: Release](/docs/images/Timeline-Options-Release.png)

Sets what happens to LTP attributes in playbacks which are killed by the timeline. This can be useful to make the output
more predictable when you are skipping around the timeline, otherwise you can get confusing LTP values
persisting from previous playbacks.

Option              | Action
--------------------|---
Override Playback Release | **Off**: The playback's own release settings are used.<br>On: The Timeline-Global release settings override the playback settings.
Release Playbacks to Home | Off: LTP attributes are left when when killing playbacks.<br>**On**: Attributes will return to home if no previous LTP values are set.
Timeline-Global Release Mask | Sets the Global Release Mask for playbacks triggered by the timeline (default **no attributes released**).
Timeline-Global Release Time | Sets the Global Release Time for playbacks triggered by the timeline (default **2 seconds**).

--- 

## Timecode Tab

![Timeline Options: Timecode](/docs/images/Timeline-Options-Timecode.png)

Option              | Action
--------------------|---
Autoload In Range | Off: Timeline must be fired manually. <br>**On:** Timeline will be fired automatically when timecode comes within the Start/End time range.
Kill At Zero | **Off:** Timeline will remain active when the timeline fader is zeroed. <br>On: Timeline will be killed when the timeline fader is zeroed. 
Kill Out Of Range | Off: Timeline will remain active when the timecode goes outside the Start/End time range. <br>**On:** Timeline will be killed when the timecode goes outside the Start/End time range.
Loop | **Off**: Internal timecode source continues to run<br>On: Internal timecode source will loop back to Start Time when it reaches End Time.
Timecode Source | Sets the timecode source for the Timeline from 1-4 (see [Running a Cue List to Timecode](../cue-lists/cue-list-timing#running-a-cue-list-to-timecode))
Timecode Source Unlinked | This is the same as the Link button in the timeline view - see [Local timecode controls](../timelines.md#local-timecode-controls)

- The Loop option only operates when timecode is set to an internal timecode source.

---

## Time options

You can also set some options from the Edit Times menu - press \<Time\> (or the \[Edit Times\] softkey on the top level menu) then the **select** button for the timeline you wish to edit.

### Set Offset

If the timecode you are using has a large offset or you have been given cue timings that don't match up
with the timecode source, you can set an offset to make the cues match up instead of having to change
all the timings. You can also enter small offsets if the lighting cues are not quite synchronised properly.

1. In the Edit Times menu press \[Set Offset\].

2. Using the \[Nudge Amount\] softkey enter a time amount to change the offset by.

3. Press the \[Add\] or \[Subtract\] softkeys to change the current offset by the amount you set. 

4. The current offset time is shown in the prompt area while you are setting it.

Once an offset has been set it is shown below the main timecode display in the Timeline View. In the
picture below a small offset of 45 seconds is set.

![Timeline timecode offset](/docs/images/Timeline-Offset.png)


### Start Time & Duration

These options are a different way of setting the Duration / Start Time options in the [Options - Times tab](../timelines/timeline-options.md#times-tab).