---
id: running-and-editing-timelines
title: Running and Editing Timelines
sidebar_label: Running and Editing Timelines
---

Running a timeline to timecode
------------------

The HTP (intensity) of fixtures in the timeline is controlled by the fader level of the handle. 

1.  Ensure the **timecode link** button (bottom left of the timeline view) is set to **Linked**.

2.  Push up the fader of the handle where the timeline is stored.

3.  Start the timecode source. 

4.  The cues in the timeline will run when the timecode reaches their programmed times.

- If you start the timecode at a point part way through the timeline, any active triggers will fire, but previous triggers will not - this might result in fixtures starting from a different state and changing the look.

### Testing a timeline

You can test a timeline without running the timecode source by setting the **timecode link** button to **Unlinked**. You can then use the Play/Pause/Rewind buttons
in the Timeline View window to run the timeline sequence. This can be useful when you don't have control of the timecode source.                  

Timeline Editing
--------------------------
 
### Selecting triggers

To edit a trigger, you need to select it. There are several different ways to do this.
- Click on the middle of the trigger to select both start and end points. You will see a selection handle appear at both ends. (**picture)
- Click on the start or end to select only one end of the trigger. (**picture)
- To select multiple triggers, draw a selection marquee box over the triggers you want to select, or hold down ?shift and click on all the triggers you want to select.

**arrow buttons in track

**using overview bar to find the place you want. 
**Collapse tracks

### 2

The \{Link\} button in the bottom left of the Timeline View window links or unlinks the timeline with the timecode source. Especially with external timecode, it's useful when recording and editing to be able to control the timecode yourself rather than having to continually ask the video guys to rewind the source. So when this button is set to unlinked, you can control the timeline playback using the buttons in the top left corner of the Timeline View window as you would with an audio player. If you are using Internal Timecode as a timecode source then these buttons will also operate the Internal Timecode source while linked.

![Timeline transport controls](/docs/images/Timeline-Timecode-Transport.png)

- \{ |< \} sets the live timecode back to zero.
- \{ |> \} starts playing from the start timecode.
- \{ > \} and \{ || \} are play / pause controls.
- \{ Stop \} stops playing and sets the live timecode back to zero.
- \{ Record \} enters live record mode but doesn't start timecode playback.

