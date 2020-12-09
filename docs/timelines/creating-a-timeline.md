---
id: creating-a-timeline
title: Creating a Timeline
sidebar_label: Creating a Timeline
---

Timeline features
------------------

### Triggers

To program a timeline you record actions, or **Triggers**, at specific times
which can then be replayed by the console with the same timing.

The following types of trigger can be recorded. You can record these actions in real time using **Live Record**
or enter them as manual triggers at specified times using the touch screen.

Trigger             | Action
--------------------|----------
Set Level           | Set playback to a level over a fade time. This is like pushing up the fader over 2 seconds for example.
Go to cue           | Go to a cue in a cue list. You can either specify a cue number or just record a *Go* trigger to run the next cue, which will follow the fade times programmed in the cue list.
Flash               | Flash a playback
Timed Flash         | Flash a playback with programmed fade times
Timed Flash and Go  | Timed flash with Go, for a cue list
Swop                | Swop a playback (cancels all other playbacks while active)
Preload             | Preload the LTP values of a playback over a number of seconds
Marker              | Mark a point in the timecode for information
Wait for go         | Pause the timeline until you press Go to resume (only on internal timecode)

 

### Tracks

The timeline is split into **Tracks** which can be used to organise triggers into different groups or sections. Each different trigger in the timeline gets its own row in the track. 
- You can mute tracks to prevent them playing back using the \{Power\} button.
- You can lock tracks to prevent accidental changes to sections you've finished using the \{Lock\} button.
- Tracks can be collapsed so they take up less room on the screen, using the arrow button to the left of the track name.

### Local timecode controls

The \{Link\} button in the bottom left of the Timeline View window links or unlinks the timeline with the timecode source. Especially with external timecode, it's useful when recording and editing to be able to control the timecode yourself rather than having to continually ask the video guys to rewind the source. So when this button is set to unlinked, you can control the timeline playback using the buttons in the top left corner of the Timeline View window as you would with an audio player. If you are using Internal Timecode as a timecode source then these buttons will also operate the Internal Timecode source while linked.

- \{ |< \} sets the live timecode back to zero.
- \{ |> \} starts playing from the start timecode.
- \{ > \} and \{ || \} are play / pause controls.
- \{ Stop \} stops playing and sets the live timecode back to zero.
- \{ Record \} enters live record mode but doesn't start timecode playback.

When you are linked to a timecode (except Internal Timecode), the first four buttons are replaced by the timecode source name and only the Record button is shown.

### The overview bar

The overview bar at the bottom of the screen gives you a view of the whole timeline from start to end. Triggers and markers are shown in miniature on the bar. It's a good way of moving quickly around the timeline, and zooming in and out.

### Cursor types

The \{Arrow\} and \{Hand\} buttons let you select different cursors for editing.
- \{Arrow\} is for marquee editing, where you select items by clicking on them or drawing a marquee selection box around them.
- \{Hand\} allows you to drag the timeline left and right.

### Table view

You can switch the Timeline View to a table version which shows details for each trigger in time order, in the same format as a cue list. Buttons down the left hand side allow you to filter which tracks are shown in the list.


Programming a Timeline using Live Record
----------------------

Live record is useful to capture a busked show, where you are operating the playbacks manually in time with music or other live cues. You can do a live record multiple times on the same timeline to build up a more complex show.

>  Recall of Palettes will not be recorded using timeline Live Record. You need to save looks to a playback to use them on a timeline.

This is how you program a timeline using Live Record, from playbacks which you have previously programmed:

1. If you want to use internal timer rather than feeding in a timecode source, ensure the "Timecode Disconnect" \{Link\} button is selected to show a broken link.

2. Press \<Record\>, \[Timeline\], then the **Select button** of the fader where you want to store the timeline. The Timeline View window will automatically open.

3. Press the \{Record\} button in the top left of the Timeline View window.

4. Select which track on the timeline you want to record onto using the \[Track\] softkey. By default Titan will create a new track.

5. When you are ready to start, press the \[Start Live Record\] softkey. 

6. For internal timecode source, press the \{>\} button in the top left of the timeline window to start the timecode running. If you are using an external timecode source, start it.

7. Now when you make any of the above trigger actions on the console, you will see a trigger recording appear on the timeline.

8. When you have finished recording press \[Cancel Live Record\] and stop the timecode.

Normally while you are recording, the \[Auto Simplify\] option is enabled. When you stop the recording, this will simplify your fader movements to a few fade points rather than a large number of points which are difficult to edit and can slow Titan down. If you really need to capture an exotic fader movement you can turn this option off, but to help keep playback responsive we advise to leave it on where you can.

- When you select a trigger, there are also context menu options in the \{Tools\} context menu to \{Simplify Selected Triggers\} and \{Smooth Selected Triggers\}. The Smooth option will smoothly fade between selected triggers using the fade time of the following trigger.

Adding manual triggers
-----------------

If you are programming a show where you have been given a list of timecodes for each cue point, you will want to enter the triggers manually at those specific times.

You can manually add triggers to the timeline using the \{+\} button at the bottom of the timeline tracks. Use the buttons to select which type of trigger you want to add, then softkey options allow you to set a specific trigger time, or to enter it at the current live time.

- You can also add a new track or a marker using this function.

![Timeline add trigger window](/docs/images/Timeline-Add-Item.png)



- To add the trigger at the current timecode time, 


