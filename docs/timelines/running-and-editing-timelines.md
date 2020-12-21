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

- On consoles with motorised faders and on virtual faders, the faders will move as programmed.

- If you start the timecode at a point part way through the timeline, any active triggers will fire, but previous triggers will not - this might result in fixtures starting from a different state and changing the look.

### Testing a timeline

You can test a timeline without running the timecode source by setting the **timecode link** button to **Unlinked**. You can then use the Play/Pause/Rewind buttons
in the Timeline View window to run the timeline sequence. This can be useful when you don't have control of the timecode source.                  

Timeline Editing
--------------------------
 
### Selecting triggers

To edit a trigger, you need to select it. There are several different ways to do this.
-   Click on a trigger block to select all the trigger points within the block. You will see selection 
    handles appear.  Click again on a selected trigger block to step through the
    trigger points within the block. 

![Timeline trigger handles](/docs/images/Timeline-Handles.png)

- Click on more triggers to add them to the selection.

- Draw a selection marquee box over the trigger points you want to select. Only the trigger points enclosed by the selection box will be selected, so if you want to select all points in a block they all need to be inside the box. This is a quick way to select one trigger point without having to "multi-click" on a block.

### Using arrow buttons to move trigger selection

The left/right arrow buttons for the track will move your selection to the previous trigger point or the next trigger point.

- Left arrow - moves selection to the previous trigger point on the track.
- Right arrow - moves selection to the next trigger point on the track.

If nothing is selected, the right arrow will select the first trigger on the track and the left arrow will select the last.

### Using the wheels to edit triggers

When you have one or more trigger points selected, the wheels control the time, level and fade of those triggers.

- Left hand wheel sets the time.
- Middle wheel sets the level.
- Right hand wheel sets the fade.

You can change multiple triggers at the same time using the wheels.

### Using the overview bar

The **Overview Bar** at the bottom of the Timeline View gives you a miniature view of all the events in the track.

![Timeline overview bar](/docs/images/Timeline-Overview-Bar.png)

- The handles at the left and right of the Overview Bar set the start and end points of the main view above. This gives you an easy way to zoom in on a particular area.

- When you are zoomed in you can drag on the zoomed area in the bar to move the main view (the same as using the Hand tool and dragging on the main view).

- The edit cursor is shown in grey.

- The current live time is shown in blue.

### Deleting triggers

You can delete trigger blocks by pressing \<Delete\> then tapping on the block you want to delete.

You can also delete tracks or delete rows from tracks using this method.

### Setting track legends and halo colours on tracks

To help you identify different tracks, you can set a halo colour for each track. This colour outlines the track and also sets the colours of the trigger blocks which makes them easier to see in the overview bar.

![Timeline halo](/docs/images/Timeline-Halo.png)

1. Press \[Set Legend\] at the top level main menu.

2. Tap on the Track number in the Timeline View.

3. Change \[Legend\] to set the track legend or press \[Halo\].

4. Select a halo colour from the colour picker.

- You can remove a halo colour by pressing \[Remove Halo\] at step 4.

### Snap options

Using the context menu option \{Snap Options\} you can configure whether new triggers will
snap to existing objects when you enter them by clicking on the Timeline View.
The snap options are
- Snap To Triggers
- Snap To Markers
- Snap To Cursor.


### Collapsing track view

If you have a lot of tracks, you can collapse them to a single line to show more tracks on the screen, by clicking the arrow button to the left of the track name.

### Table view

You can switch the Timeline View to a table version using the \{Open Table View\} context button. 
This shows details for each trigger in time order, in the same format as a cue list. Buttons down the left hand side allow you to filter which tracks are shown in the list.

![Timeline table view](/docs/images/Timeline-Table-View.png)

- You can edit any of the settings, except the trigger Action type, by clicking on the grid and using the softkey options.

- You can add new triggers using the \{+\} button.

- You can delete triggers by pressing \<Delete\> then the table row you want to delete.


