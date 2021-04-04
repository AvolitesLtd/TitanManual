---
id: timelines
title: Timelines introduction
sidebar_label: Timelines introduction
---

import Keys from '/src/components/key.ts';

Timelines allow you to create a precisely timed sequence which you can either
run from the console's internal timer or synchronise to an external timecode
source. This can be useful for an opening sequence for a corporate
event, a complex song in a show where the song is pre-recorded or run to
a click track or timecode, or a multimedia event run to a playback track. You
can also use it to create [complicated one-shot effects](./timelines/timeline-options.md#fader-tab) for busking.

> You can also create timed shows by creating timecoded cues in
[cue-lists](./cue-lists/cue-list-timing.md#running-a-cue-list-to-timecode), but Timeline
recording allows much easier creation and editing of a timed show.

Timelines are stored on a handle using the <Keys.HardKey>Record</Keys.HardKey> button in a similar way to a cue or cue list - they can be built either from playbacks you have already recorded, or by creating
new playbacks as you go along. You can record actions in real time by operating the console
or by adding them manually at specific times. You can think of a timeline as an automatic replay
system to push the faders and buttons on the console. The actions recorded in a timeline
are called **triggers**.

Once you have recorded a timeline there is a **Timeline View** window to show and edit the triggers -  press <Keys.HardKey>Open\/View</Keys.HardKey> then the **select button** of the handle containing the timeline, or tap the playback legend area above the fader. The view also opens automatically when you record a new timeline.

![Playback View of Timeline](/docs/images/Timeline-Window.png)

Triggers
------------------

To program a timeline you record actions at specific times
which can then be replayed by the console with the same timing. These
are called **Triggers**.

The following types of trigger can be created. You can record these actions in real time using **Live Record**
or enter them as manual triggers at specified times using the touch screen.

Trigger             | Action
---|-----
Set Level           | Fades up a playback to a set level over a time. This has the same effect as you pushing up a fader. If the playback has fade times programmed these also run.
Go to cue           | Go to a cue in a cue list. You can either specify a cue number or just record a *Go* trigger to run the next cue. The cue will follow the fade times programmed in the cue list.
Flash               | Flash a playback (see [Flash and Swop](./running-the-show/playback-controls.md#flash-and-swop-buttons))
Timed Flash         | Flash a playback with programmed fade times
Timed Flash and Go  | Timed flash followed by Go action, for a cue list
Swop                | Swop a playback (see [Flash and Swop](./running-the-show/playback-controls.md#flash-and-swop-buttons))
Preload             | Preload the LTP values of a playback over a number of seconds (see [Preload](./running-the-show/playback-controls.md#flash-and-swop-buttons))
Marker              | Mark a point in the timecode for information
Wait for go         | Pause the timeline until you press <Keys.HardKey>Go</Keys.HardKey> to resume (only on internal timecode)

- **Wait for go** triggers are useful when you have a timed sequence followed by an unknown delay, for
example a win/walk-up sequence for an awards ceremony when you don't know how long the winner
will take to reach the stage. Shapes will continue to run while the timeline is paused. The timeline needs to be
[connected](./chases/chase-playback/#connecting-a-playback-for-control) for the <Keys.HardKey>Go</Keys.HardKey> button to work, if the timeline is not connected you can use the <Keys.ContextKey>Play</Keys.ContextKey> transport button to resume the timeline.

Tracks
------------------

The timeline is split into **Tracks** which can be used to organise triggers into different groups or sections. Each different playback in the timeline gets its own row in the track.
- You can mute tracks to prevent them playing back using the <Keys.ContextKey>Mute</Keys.ContextKey> button.
- You can lock tracks to prevent accidental changes to sections you've finished using the <Keys.ContextKey>Lock</Keys.ContextKey> button.
- Tracks can be collapsed so they take up less room on the screen, using the arrow button to the left of the track name. See [more details](./timelines/running-and-editing-timelines.md#collapsing-track-view) here.

Selecting timecode source
------------------

You can select one of the four available timecode sources to control your timeline from the [Timeline Options](./timelines/timeline-options.md#timecode-tab).

To set up and enable each of the timecode sources as Internal, MIDI, Clock or SMPTE use the <Keys.SoftKey>Timecode</Keys.SoftKey> softkey at the top level main menu or double press <Keys.HardKey>Open\/View</Keys.HardKey> and open the appropriate **Timecode window**.

Timecode linking and local timecode controls
------------------

The <Keys.ContextKey>Link</Keys.ContextKey> button at the bottom left of the Timeline View window can be used to temporarily unlink the timeline from its timecode source.

When using external timecode, often the timecode source will be sent to you from elsewhere in the show and will not be under your control - in this situation it's useful to be able to temporarily control the timecode yourself when recording and editing. When this button is set to unlinked, you can control the timeline playback using the transport buttons in the top left corner of the Timeline View window as you would with an audio player.

- If you are using Internal Timecode or Winamp as a timecode source then these buttons will also operate the local Timecode source while linked (and will play/pause Winamp if that is the timecode source).

![Timeline transport controls](/docs/images/Timeline-Timecode-Transport.png)

- <Keys.ContextKey>Rewind</Keys.ContextKey> sets the live timecode back to zero.
- <Keys.ContextKey>Play from cursor</Keys.ContextKey> starts playing from the cursor (or the start time if the cursor is not within the start/end times).
- <Keys.ContextKey>Play</Keys.ContextKey> and <Keys.ContextKey>Pause</Keys.ContextKey> are play / pause controls.
- <Keys.ContextKey>Stop</Keys.ContextKey> stops playing and sets the live timecode back to zero.
- <Keys.ContextKey>Record</Keys.ContextKey> enters live record mode but doesn't start timecode playback.

When you are linked to a timecode (except Internal Timecode and Winamp), the first four buttons are replaced by the timecode source name and only the Record button is shown.

![Timeline external timecode controls](/docs/images/Timeline-Timecode-ExternalTransport.png)

If timecode is disabled in the **Timecode** menu or the Timecode windows, the time is shown in red.

If the timecode time is within the [start and end times](./timelines/timeline-options#times-tab) but the timeline is not active, the time is shown in orange.

![Timeline disabled](/docs/images/Timeline-Timecode-Disabled.png)

- If your timecode source starts at a big number, you can set a time offset to allow you to use zero-referenced times on your timeline. You can also add or subtract a few frames for synchronisation if the timecode source is slightly off.
See [Time Offset](./timelines/timeline-options.md#time-options).

The overview bar
------------------

The overview bar at the bottom of the screen gives you a view of the whole timeline from start to end. Triggers and markers are shown in miniature on the bar. You can make the main view zoom in and out by dragging the end markers of the bar to enclose a particular section. It's a good way of moving quickly around the timeline. See [Using The Overview Bar](./timelines/running-and-editing-timelines.md#using-the-overview-bar) for more details.

![Timeline overview bar](/docs/images/Timeline-Overview-Bar-Cropped.png)

Moving around the timeline view with the wheels
-----------------

Using the context menu option <Keys.ContextKey>Timeline Wheels</Keys.ContextKey> you can set the wheels to control your view, when no triggers are selected.
The wheel functions are
- Wheel A: Horizontal scroll
- Wheel B: Vertical scroll
- Wheel C: Zoom

If any triggers are selected, the wheels control Time, Level and Fade of the selected trigger(s).

Cursor
-----------------

The grey cursor on the Timeline View sets the entry position for new triggers. It can also be used as a "play head" to
manually move the play position along the timeline while testing. You can position the cursor by tapping the screen in the ruler
area at the top of the Timeline View.

Tapping on the arrow at the top of the cursor, or using the <Keys.ContextKey>Select Cursor</Keys.ContextKey> context menu option sets **Wheel A** to control the cursor position.

Selection tool types
------------------

The <Keys.ContextKey>Select</Keys.ContextKey> and <Keys.ContextKey>Pan</Keys.ContextKey> buttons let you choose different selection tools for editing.
- <Keys.ContextKey>Select</Keys.ContextKey> is for marquee editing, where you select items by drawing a marquee selection box around them (or direct clicking).
- <Keys.ContextKey>Pan</Keys.ContextKey> allows you to drag the timeline left and right or select by direct clicking.

You can also select the tool using the <Keys.ContextKey>Tool Pan</Keys.ContextKey>/<Keys.ContextKey>Tool Select</Keys.ContextKey> context menu button.

Table view
------------------

Using the <Keys.ContextKey>Open Table View</Keys.ContextKey> context menu button, you can open the timeline as a **table** which shows details for each trigger in time order, in the same format as a cue list. Buttons down the left hand side allow you to filter which tracks are shown in the list.
See [Table View](./timelines/running-and-editing-timelines.md#table-view).

![Timeline table view](/docs/images/Timeline-Table-View.png)

- You can show both the Timeline Table View and the graphical Timeline View at the same time.
