---
id: timelines
title: Timelines introduction
sidebar_label: Timelines introduction
---

Timelines allow you to create a precisely timed light show which you can either
run from the console's internal timer or synchronise to an external timecode
source. This can be useful for an opening sequence for a corporate
event, a complex song in a show where the song is pre-recorded or run to 
a click track or timecode, or a multimedia event run to a playback track. You
can also use it to create [complicated one-shot effects](./timelines/timeline-options.md#fader-tab) for busking.

> You can also create timed shows by creating timecoded cues in 
[cue-lists](./cue-lists/cue-list-timing.md#running-a-cue-list-to-timecode), but Timeline 
recording allows much easier creation and editing of a timed show.

Timelines can be built either from cues or chases you have already recorded, or by creating
new cues as you go along. You can record them in real time by operating the console
or by adding cues manually at specific times. You can think of a timeline as an automatic replay
system to push the faders and buttons on the console. The actions recorded in a timeline
are called **triggers**.

To show the Timeline View window for a playback containing a timeline, touch the playback 
information area relating to the fader or press \<Open/View\> then the **select button** 
of the playback.

![Playback View of Timeline](/docs/images/Timeline-Window.png)

Triggers
------------------

To program a timeline you record actions at specific times
which can then be replayed by the console with the same timing. These
are called **Triggers**.

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

- **Wait for go** triggers are useful when you have a preset sequence followed by an unknown delay, for
example a win/walk-up sequence for an awards ceremony when you don't know how long the winner
will take to reach the stage. Shapes will continue to run while the timeline is paused.

Tracks
------------------

The timeline is split into **Tracks** which can be used to organise triggers into different groups or sections. Each different trigger in the timeline gets its own row in the track. 
- You can mute tracks to prevent them playing back using the \{Power\} button.
- You can lock tracks to prevent accidental changes to sections you've finished using the \{Lock\} button.
- Tracks can be collapsed so they take up less room on the screen, using the arrow button to the left of the track name.

Selecting timecode source
------------------

You can select one of the four available timecode sources to control your timeline from the [Timeline Options](./timelines/timeline-options.md#timecode-tab).

To set up and enable each of the timecode sources as Internal, MIDI, Clock or SMPTE use the \[Timecode\] softkey at the top level main menu.

Timecode linking and local timecode controls
------------------

The \{Link\} button in the bottom left of the Timeline View window links or unlinks the timeline with the timecode source. Especially with external timecode, it's useful when recording and editing to be able to control the timecode yourself rather than having to continually ask the video guys to rewind the source. So when this button is set to unlinked, you can control the timeline playback using the buttons in the top left corner of the Timeline View window as you would with an audio player. 

- If you are using Internal Timecode or Winamp as a timecode source then these buttons will also operate the local Timecode source while linked (and will play/pause Winamp if that is the timecode source).

![Timeline transport controls](/docs/images/Timeline-Timecode-Transport.png)

- \{ |< \} sets the live timecode back to zero.
- \{ |> \} starts playing from the start timecode.
- \{ > \} and \{ || \} are play / pause controls.
- \{ Stop \} stops playing and sets the live timecode back to zero.
- \{ Record \} enters live record mode but doesn't start timecode playback.

When you are linked to a timecode (except Internal Timecode and Winamp), the first four buttons are replaced by the timecode source name and only the Record button is shown.

![Timeline external timecode controls](/docs/images/Timeline-Timecode-ExternalTransport.png)

If the timecode source is disabled in the **Timecode** menu, the time is shown in red.

![Timeline disabled](/docs/images/Timeline-Timecode-Disabled.png)

- If your timecode source starts at a big number, you can set a time offset to allow you to use zero-referenced times on your timeline.
See [Time Offset](./timelines/timeline-options.md#time-options).

The overview bar
------------------

The overview bar at the bottom of the screen gives you a view of the whole timeline from start to end. Triggers and markers are shown in miniature on the bar. You can make the main view zoom in and out by dragging the end markers of the bar to enclose a particular section. It's a good way of moving quickly around the timeline.

![Timeline overview bar](/docs/images/Timeline-Overview-Bar-Cropped.png)

Moving around the timeline view with the wheels
-----------------

Using the context menu option \{Timeline Wheels\} you can set the wheels to control your view, when no triggers are selected.
The wheel functions are
- Wheel A: Horizontal scroll
- Wheel B: Vertical scroll
- Wheel C: Zoom

If any triggers are selected, the wheels control Time, Level and Fade of the selected trigger(s).

Cursor
-----------------

The grey user cursor on the Timeline View sets the entry position for new triggers. It can also be used as a "play head" to 
manually move the play position along the timeline while testing. You can position the cursor by tapping the screen in the ruler
area at the top of the Timeline View.

The \{Select Cursor\} context menu option sets Wheel A to control the cursor position.

Selection tool types
------------------

The \{Arrow\} and \{Hand\} buttons let you choose different selection tools for editing.
- \{Arrow\} is for marquee editing, where you select items by drawing a marquee selection box around them (or direct clicking).
- \{Hand\} allows you to drag the timeline left and right or select by direct clicking.

You can also select the tool using the \{Tool Pan\}/\{Tool Select\} context menu button.

Table view
------------------

Using the \{Open Table View\} context menu button, you can open the timeline as a **table** which shows details for each trigger in time order, in the same format as a cue list. Buttons down the left hand side allow you to filter which tracks are shown in the list.
See [Table View](./timelines/running-and-editing-timelines.md#table-view).

![Timeline table view](/docs/images/Timeline-Table-View.png)

- You can show both the Timeline Table View and the graphical Timeline View at the same time.
