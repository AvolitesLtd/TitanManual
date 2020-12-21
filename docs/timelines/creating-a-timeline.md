---
id: creating-a-timeline
title: Creating a Timeline
sidebar_label: Creating a Timeline
---

You can create a timeline by using Live Record mode, by entering triggers manually at specified times, or a combination of the two.

Programming a Timeline using Live Record
----------------------

Live record is useful to capture a busked show, where you are operating the playbacks manually in time with music or other live cues. You can do a live record multiple times on the same timeline to build up a more complex show.

>  Recall of Palettes will not be recorded using timeline Live Record. You need to save looks to a playback to use them on a timeline.

This is how you program a timeline using Live Record, from playbacks which you have previously programmed:

1. If you want to use internal timer rather than feeding in a timecode source, ensure the "Timecode Disconnect" \{Link\} button is selected to show a broken link.

2. Press \<Record\>, \[Timeline\], then the **Select button** of the fader where you want to store the timeline. The Timeline View window will automatically open.

3. Press the \{Record\} button in the top left of the Timeline View window. The Titan screen will be outlined in red.

4. Select which track on the timeline you want to record onto using the \[Track\] softkey. 
You can add triggers to an existing track or create a new track - by default Titan will create a new track.

5. When you are ready to start, press the \[Start Live Record\] softkey. 

6. For internal timecode source, press the \{>\} button in the top left of the timeline window to start the timecode running. If you are using an external timecode source, start it.

7. Now when you make any of the above trigger actions on the console, you will see a trigger recording appear on the timeline. The time range you have recorded is highlighted in red on the timeline view.

8. When you have finished recording press the \{Record\} button again and stop the timecode.

You should now see all the triggers you have created laid out on the timeline.

### Auto Simplify

Normally while you are recording, the \[Auto Simplify\] option is enabled. When you stop the recording, this will simplify your fader movements to a few fade points rather than a large number of points which are difficult to edit and can slow Titan down. If you really need to capture an exotic fader movement you can turn this option off, but to help keep playback responsive we advise to leave it on where you can.

Trigger with multiple points during Live Record:

![Timeline before auto simplify](/docs/images/Timeline-Live-Record.png)

The same trigger after Auto Simplify:

![Timeline after auto simplify](/docs/images/Timeline-Live-Record-Simplified.png)

- When you select a trigger (by clicking on it), there are also context menu options in the \{Tools\} context menu to \{Simplify Selected Triggers\} and \{Smooth Selected Triggers\}. The Smooth option will smoothly fade between selected triggers using the fade time of the following trigger.

Adding manual triggers
-----------------

If you are programming a show where you have been given a list of timecodes for each cue point, you will want to enter the triggers manually at those specific times.

You can manually add triggers to the timeline using the \{+\} button at the bottom of the timeline tracks. Use the buttons to select which type of trigger you want to add, then softkey options allow you to set a specific trigger time, or to enter it at the current live time.

- See the [Triggers](../timelines/timeline-features.md#triggers) section for details of the different types of trigger.

- You can also add a new track or a marker using this function.

![Timeline add trigger window](/docs/images/Timeline-Add-Item.png)






