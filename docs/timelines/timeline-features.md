---
id: timeline-features
title: Timeline features
sidebar_label: Timeline features
---

This section explains how timelines work, and the various controls and interfaces you have when making or using them.

Triggers
------------------

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

 

Tracks
------------------

The timeline is split into **Tracks** which can be used to organise triggers into different groups or sections. Each different trigger in the timeline gets its own row in the track. 
- You can mute tracks to prevent them playing back using the \{Power\} button.
- You can lock tracks to prevent accidental changes to sections you've finished using the \{Lock\} button.
- Tracks can be collapsed so they take up less room on the screen, using the arrow button to the left of the track name.

Local timecode controls
------------------

The \{Link\} button in the bottom left of the Timeline View window links or unlinks the timeline with the timecode source. Especially with external timecode, it's useful when recording and editing to be able to control the timecode yourself rather than having to continually ask the video guys to rewind the source. So when this button is set to unlinked, you can control the timeline playback using the buttons in the top left corner of the Timeline View window as you would with an audio player. If you are using Internal Timecode as a timecode source then these buttons will also operate the Internal Timecode source while linked.

![Timeline transport controls](/docs/images/Timeline-Timecode-Transport.png)

- \{ |< \} sets the live timecode back to zero.
- \{ |> \} starts playing from the start timecode.
- \{ > \} and \{ || \} are play / pause controls.
- \{ Stop \} stops playing and sets the live timecode back to zero.
- \{ Record \} enters live record mode but doesn't start timecode playback.

When you are linked to a timecode (except Internal Timecode), the first four buttons are replaced by the timecode source name and only the Record button is shown.

![Timeline external timecode controls](/docs/images/Timeline-Timecode-ExternalTransport.png)

If the timecode source is disabled, the time is shown in red.

![Timeline disabled](/docs/images/Timeline-Timecode-Disabled.png)

The overview bar
------------------

The overview bar at the bottom of the screen gives you a view of the whole timeline from start to end. Triggers and markers are shown in miniature on the bar. You can make the main view zoom in and out by dragging the end markers of the bar to enclose a particular section. It's a good way of moving quickly around the timeline.

Cursor types
------------------

The \{Arrow\} and \{Hand\} buttons let you select different cursors for editing.
- \{Arrow\} is for marquee editing, where you select items by clicking on them or drawing a marquee selection box around them.
- \{Hand\} allows you to drag the timeline left and right.

Table view
------------------

You can switch the Timeline View to a table version which shows details for each trigger in time order, in the same format as a cue list. Buttons down the left hand side allow you to filter which tracks are shown in the list.


