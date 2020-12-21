---
id: timeline-options
title: Timeline Options
sidebar_label: Timeline options
---

Timelines have a number of options which set how they operate. 
Press \<Options\> (or the \[Options\] softkey on the top level menu then the **select** button for the timeline you wish to edit.

--- 

## Handle Tab

All options are the same as for a cue, see [Options](../cues/playback-options.md#handle-tab).

--- 

## Times Tab

![Timeline Options: Times](/docs/images/Timeline-Options-Times.png)

These options let you set the end time and start time of the timeline. These times set the loop points when you are using the 
[Loop function](../timelines/timeline-options.md#timecode-tab) or can be used to set limits on the timeline so you can be sure nothing will happen if you get sent some wayward timecode.

--- 

## Fader Tab

![Timeline Options: Fader](/docs/images/Timeline-Options-Fader.png)

Sets what happens to an internal timecode source when the playback fader containing the timeline is raised or zeroed. If an external
timecode source is being used then this option has no effect.

Option              | Action
--------------------|---
Fader Raised Action | **No Action**: The internal timecode source is not changed (default).<br>Play: The internal timecode source is started.
Fader Zero Action   | **No Action**: The internal timecode source is not changed (default).<br>Stop: The internal timecode source is stopped. <br>Pause: The internal timecode source is paused at the current time.


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
Timeline-Global Release Mask | Sets the Global Release Mask for playbacks triggered by the timeline.
Timeline-Global Release Time | Sets the Global Release Time for playbacks triggered by the timeline (default **2 seconds**).

--- 

## Timecode Tab

![Timeline Options: Timecode](/docs/images/Timeline-Options-Timecode.png)

Option              | Action
--------------------|---
Loop | **Off**: Internal timecode source continues to run<br>On: Internal timecode source will loop back to Start Time when it reaches End Time.
Timecode Source | Sets the timecode source for the Timeline from 1-4 (see [Running a Cue List to Timecode](../cue-lists/cue-list-timing#running-a-cue-list-to-timecode))
Timecode Source Unlinked | This is the same as the Link button in the timeline view - see [Local timecode controls](../timelines.md#local-timecode-controls)

- The Loop option only operates when timecode is set to an internal timecode source.