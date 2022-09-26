---
id: editing-cue-lists
title: Editing Cue Lists
sidebar_label: Editing Cue Lists
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

This section describes how to edit cues within a cue list. 
To copy, move or delete an entire cue list see the section 
[Copying, Moving, Linking and Deleting](../cue-lists/copying-moving-linking-and-deleting.md).

## Playback View Window

The easiest way to edit a cue list is using the Playback View window
(press <Keys.HardKey>Open/View</Keys.HardKey> then the **Select** button for the cue list to open
it). This shows a grid with each cue and allows you to change most
features of the cue. Select the item you want to change in the grid,
and the softkeys will offer you options for what you can change.

![Playback view](/docs/images/Cue-List-Window-with-Autoload-playback.png)

To change multiple cues at once, draw a box across the items you want to
change.

Also, the [Intensity View window](../controlling-fixtures/viewing-and-editing-fixture-values.md#the-intensity-view-window) is useful for seeing the state of all
fixtures.

## Editing Values in Cue View Window

You can edit the value of every fixture in each cue using the Cue View
window. Press the **View** button in the column *View Cue* at the right hand end of the [Playback
View window](#playback-view-window).

![Cue View Window](/docs/images/Cue-View-Window.png)

You can then click on the values you want to change and edit them using
the softkeys.

-   The context menu buttons allow you to view levels, shapes, effects
    and times for each attribute of each fixture in each cue.

-   If levels are set from a palette, the **View Palettes** button either
    shows you the palette used, or the underlying value.

-   If the **View Tracking Values** button is selected, [tracking values](cue-list-playback.md#tracking)
    (values which have tracked through from another cue rather than
    being stored directly in this cue) are shown in light grey.

## Moving, Copying and Deleting Individual Cues

There are several ways to copy or move cues within a cue list. You can also move cues to other cue lists.

You can use **Unfold** ([as described in the next
section](#editing-a-cue-list-using-unfold)).

To move a cue you can either click and drag the cue in the [Playback
View window](#playback-view-window), or click on the cue number and use the <Keys.SoftKey>Change To</Keys.SoftKey> softkey
to enter the new cue number - once you have changed the number the cue will move to
its correct position in the list.

To delete a cue press <Keys.HardKey>Delete</Keys.HardKey>, select the cue in the window, and tap the cue again, or press <Keys.HardKey>Enter</Keys.HardKey> or <Keys.SoftKey>Confirm</Keys.SoftKey> to confirm.

You can also use a command-line style series of keypresses:

- **<Keys.ContextKey>fader select</Keys.ContextKey>** is a playback fader select button, **n** is the cue number and
  sections in square brackets are optional. The <Keys.HardKey>@</Keys.HardKey> button is the one by the numeric keypad.
 

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>@</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** as new cue **m** in the same cue list
<Keys.HardKey>Move</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>@</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Move cue **n** to cue **m** in the same cue list
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Copy cue **n** as new cue at end of same cue list
<Keys.HardKey>Delete</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Delete cue **n**
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.ContextKey>fader select</Keys.ContextKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** as new cue **m** in a different cue list
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.ContextKey>fader select</Keys.ContextKey> <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** as new cue at the end of a different cue list

- For the **copy** commands, you can use <Keys.HardKey>Move</Keys.HardKey> in place of <Keys.HardKey>Copy</Keys.HardKey>to **move** cues. For consoles
  which don't have a <Keys.HardKey>Move</Keys.HardKey> button you can press (<Keys.HardKey>Avo</Keys.HardKey> and <Keys.HardKey>Copy</Keys.HardKey>) together to get Move.

- You can change multiple cues using <Keys.HardKey>Thru</Keys.HardKey>, <Keys.HardKey>And</Keys.HardKey> and <Keys.SoftKey>Not</Keys.SoftKey>. For example to copy cues 3, 4 ,5 ,7, 10 
  into a new block of cues starting at cue 20 you could do 

  <Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> 3 <Keys.HardKey>Thru</Keys.HardKey> 7 <Keys.SoftKey>Not</Keys.SoftKey> 6 <Keys.HardKey>And</Keys.HardKey> 10 <Keys.HardKey>@</Keys.HardKey> 20 <Keys.HardKey>Enter</Keys.HardKey>
  
- You can press <Keys.HardKey>Enter</Keys.HardKey> instead of <Keys.HardKey>@</Keys.HardKey> if you are more familiar with that key sequence, for example to copy a cue onto 
  the end of a cue list you can do <Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey>


## Editing a Cue List using Unfold

The <Keys.HardKey>Unfold</Keys.HardKey> button places each cue of the cue list on one of the
playback faders. This allows you to fire and edit each step individually
as if it was a stand-alone cue.

1. Press <Keys.HardKey>Unfold</Keys.HardKey>, then the **Select** button of the cue list to be
edited.
2. Cues are loaded into the **playback faders**. The display shows the cue
numbers and legends *(see more cues using softkeys F and G)*.
3. Raise a **playback fader** to output the contents of that cue *(fade
times will operate as programmed)*.
4. *Various Unfold options are available, detailed below.*
5. Press <Keys.HardKey>Unfold</Keys.HardKey> again to exit unfold mode.

-   To **edit** the contents of a cue: Press <Keys.HardKey>Clear</Keys.HardKey> to empty the
    programmer, raise the fader to output the cue, make the changes,
    press <Keys.SoftKey>Record Step</Keys.SoftKey>, then the **Select** button for the cue number.

-   To **merge** the programmer into the live step, double tap <Keys.SoftKey>Record
    Step</Keys.SoftKey>.

-   To change the times or cue linking for the cue, press <Keys.SoftKey>Edit
    Times</Keys.SoftKey>, then the **Select** button for the cue, then set the times (see
    [Cue List Timing](cue-list-timing.md))

-   To **insert** a new cue, set up the look for the new cue, press B <Keys.SoftKey>Insert Step</Keys.SoftKey>, then press the playback button where you want the new cue to go. All following cues will be shifted on by one and the new cue will be given a number in between the two existing cues *(for example, if you press playback 3, your new cue will be 2.5)*.

-   To **move** or **copy** a cue, press the <Keys.HardKey>Move</Keys.HardKey> or <Keys.HardKey>Copy</Keys.HardKey> button, press
    the **select** button for the cue you want to move or copy, then press
    the **select** button where you want it to go.

-   To **delete** a cue, press the <Keys.HardKey>Delete</Keys.HardKey> button then the **select** button
    for the cue you want to delete. Press the **select** button again to
    confirm.

-   To change the **cue legend**, press <Keys.SoftKey>Set Step Legend</Keys.SoftKey> then the
    playback **select** for the step you want to change.

-   If the cue list has more cues than there are playback faders, you
    can swop to the next page using softkeys F and G.

## Editing tracked cues using Tracking View

The Tracking View window allows you to see and edit how dimmer levels and other attributes are tracked between cues in a cue list. This is really useful to tidy up a show after a frantic programming session if you've saved hard values  accidentally instead of using tracking, or to work out where an incorrectly tracked value is coming from. 

To show the Tracking View, use the context menu in the Playback View to select <Keys.Context>View Tracking</Keys.Context>. 

- You can also double-press <Keys.HardKey>Open/View</Keys.HardKey> and select Tracking View from the workspaces menu, but then you need to select which Cue List you want to view, from the list on the softkeys.
- You can select a different cue list to view using the context menu <Keys.Context>Select Cue List</Keys.Context> option.

![Tracking View Window](/docs/images/Tracking-View.png)

The cues are listed in the grid showing the attribute values stored in each cue. The tracking state is shown by colour:
-  **White** means an unchanged hard (untracked) value.
-  **Green** means a hard value where the level has reduced.
-  **Cyan** means an initial value or a hard value where the level has increased.
-  **Magenta** means a tracked value.
-  **Red** means a block.

On the left side of the window, you can filter the fixtures and attributes shown in the grid to show only: 
- one of the IPCGBES attribute banks, or All
- the current attribute bank as selected on the console buttons
- the currently selected fixtures
- a particular type of fixture patched in the show.

By selecting one or more values in the grid, you can do the following from the softkey options. Press <Keys.HardKey>Exit</Keys.HardKey> to deselect all values in the grid.

- <Keys.SoftKey>Select Function</Keys.SoftKey> gives a submenu with various levels or fixture functions. 
- <Keys.SoftKey>Tracking</Keys.SoftKey> gives a submenu where you can change the tracking mode.
- <Keys.SoftKey>Set Hard Value</Keys.SoftKey> will record the values in the selected cells as hard values.
- <Keys.SoftKey>Delete</Keys.SoftKey> will remove all hard (untracked) values in selected cells. Has no effect on tracked values. 
- <Keys.SoftKey>Delete Redundant</Keys.SoftKey> will remove hard values if the same value would have tracked into the cue. You can use this to delete hard values and return cues to being tracked in multiple columns / rows by selecting the column / row headers.
- <Keys.SoftKey>Off</Keys.SoftKey> Set selected attributes to Off.
- <Keys.SoftKey>On</Keys.SoftKey> Set selected attributes to On (for more information about On/Off see [Off](../cues/editing-cues.md#deactivate-attributes-from-cues-using-off)).

If any fixture or attribute has been set to non-global, then a letter after the value shows T (Track), B (Block), C (Cue Only) or S (Solo).

### Tracking View display options

Using the window appearance menu button <Keys.Context>Cog</Keys.Context> you can change the following display options for the Tracking View:

- <Keys.Context>Column Size</Keys.Context> can be set to Small, Normal, Large, Super Size.
- <Keys.Context>Window Scroll</Keys.Context> can be set to automatically scroll on the <Keys.Context>Next Cue</Keys.Context>, or require <Keys.Context>Manual</Keys.Context> scrolling.
- <Keys.Context>Scroll offset from top</Keys.Context> sets how many past cues are visible above the current cue.
- <Keys.Context>Palettes</Keys.Context> sets how attributes display when a palette has been stored. You can choose <Keys.Context>Hidden</Keys.Context> (displays value only), <Keys.Context>Legend Only</Keys.Context> (shows the palette legend), or <Keys.Context>Legend and Value</Keys.Context> (shows legend, and also value if the column is wide enough).

You can also show or hide various parts of the display to make more space in the window:
- <Keys.Context>Attribute Filters</Keys.Context>
- <Keys.Context>Selection Filters</Keys.Context>
- <Keys.Context>Fixture Filters</Keys.Context>
- <Keys.Context>Tracking Column</Keys.Context>
- <Keys.Context>Legend Column</Keys.Context>
- <Keys.Context>Fixture Legends</Keys.Context>
- <Keys.Context>Scroll Bars</Keys.Context>

In the Context menu for the Tracking View screen there are Sort and Filter options:
- <Keys.Context>Attributes</Keys.Context> can be sorted in IPCGBES Bank Order or by Current Bank First where the selected attribute bank shows first, followed by the others.
- <Keys.Context>Window Scroll</Keys.Context> can be sorted by User Number, Last Selected and DMX Address.
- <Keys.Context>Columns</Keys.Context> can be sorted as Fixture then Attribute (each fixture listed with all its attributes) or Attribute then Fixture (same attributes listed together).

For the Filter options
- <Keys.Context>By Current Wheels</Keys.Context> links the Attribute filters to the currently selected attribute bank (also changing the attribute bank filter in the Tracking View window will change the attribute bank for the wheels when this option is enabled) .
- <Keys.Context>By Fixture Selection</Keys.Context> links the window to currently selected fixtures when enabled.


## Using Update to Change Tracked Cues

Because fixture settings in a cue list are [tracked](cue-list-playback.md#tracking) through from previous
cues, if you want to edit a setting you need to find the cue where it
was originally set.

The **Update** function will go back through the cue list from the currently
fired cue and automatically update the correct cue.

1. With the cue list fired, select the fixtures and change them to the
settings you want to store.
2. Press <Keys.HardKey>Update</Keys.HardKey> *(<Keys.HardKey>Record Cue</Keys.HardKey>, <Keys.SoftKey>Update</Keys.SoftKey> if the console doesn't have an Update button)*.
3. Press <Keys.HardKey>Enter</Keys.HardKey> to immediately store the new values to the cue list.

> Alternatively, the softkeys show a list of palettes and playbacks which 
can be updated. Select or deselect these as required.

If you have used the softkey options, press <Keys.HardKey>Enter</Keys.HardKey> to complete
the update.

If the attributes you have changed were [tracked](cue-list-playback.md#tracking) through from a
previous cue, Update will update that cue rather than the current one.

## Editing a Cue List Which is Running

You can also edit cues in a cue list while you are running it without
using [Unfold](#editing-a-cue-list-using-unfold).

1. **Fire the cue list** by raising its fader.
2. Use **Wheel A** to select the cue number you want to change then the <Keys.HardKey>Go</Keys.HardKey> button to jump to it. *(On Pearl Expert/Tiger Touch 1 press the white ↔
button above the Snap Back button instead of <Keys.HardKey>Go</Keys.HardKey>)*
3. Press <Keys.HardKey>Clear</Keys.HardKey> to make sure the programmer is empty.
4. Make the changes that you want to the current step.
5. Press <Keys.HardKey>Record</Keys.HardKey> then <Keys.HardKey>Connect/Cue</Keys.HardKey>, then select <Keys.SoftKey>Replace</Keys.SoftKey>, <Keys.SoftKey>Merge</Keys.SoftKey> or <Keys.SoftKey>Insert After</Keys.SoftKey> to save the changes. *(On Pearl Expert and
Tiger Touch 1 use the Rec Step button)*
6. Press the <Keys.HardKey>Go</Keys.HardKey> button *(on Pearl Expert and Tiger Touch 1 the white ↔
button)* to jump on to the next step.

-	You can merge your changes into the current live cue by
	pressing <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Connect/Cue</Keys.HardKey> <Keys.HardKey>Connect/Cue</Keys.HardKey>.

## Edit Times of a Running Cue List

You can edit the times for a cue using the <Keys.HardKey>Live Time</Keys.HardKey> and <Keys.HardKey>Next
Time</Keys.HardKey> buttons *(not on all consoles)* as follows:

1. **Fire the cue list** by raising its fader.
2. Use **Wheel A** to select the cue number you want to change then the <Keys.HardKey>Go</Keys.HardKey> button to jump to it (on Pearl Expert and Tiger Touch 1 the white ↔
button)
3. Press <Keys.HardKey>Live Time</Keys.HardKey> to set the times for the current step, or <Keys.HardKey>Next Time</Keys.HardKey> for the next step. The Live and Next step numbers are
shown on the display above the controller wheel.
4. Use the softkeys to set the times, linking and overlap settings
you want (see [Cue List Timing](cue-list-timing.md) for a description of the
times). If you set the link option to <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey> or <Keys.SoftKey>Link after Previous Cue</Keys.SoftKey> 
then this cue will not wait for the <Keys.HardKey>Go</Keys.HardKey> button but will start automatically.
5. Press the <Keys.HardKey>Go</Keys.HardKey> button *(on Pearl Expert and Tiger Touch 1 the white ↔
button)* to jump on to the next step.

- The <Keys.HardKey>Review</Keys.HardKey> button lets you test the live step with the new timings.

*You can also use <Keys.HardKey>Unfold</Keys.HardKey> to set the times as described in the
[Unfold section above](#editing-a-cue-list-using-unfold).*

## Editing a Cue List While Recording

You can edit cues while you are in the Record Cue List menu.

1. Press <Keys.SoftKey>Cue Number=x</Keys.SoftKey> and type the cue number to be edited.
2. The console will jump to the cue and show the output.
3. Make the changes that you want to the programming of the current
step, or to the timings using <Keys.SoftKey>Edit Cue x Times</Keys.SoftKey>.
4. Press <Keys.SoftKey>Update Cue x</Keys.SoftKey> or the Rec Step button to save the changes.

### Update Mode

The <Keys.SoftKey>Update Mode</Keys.SoftKey> softkey allows you to set how changes in the cue
will be tracked. 

Update Mode | Action
---|---
**Forwards**<br/> ![Cue List Update Mode Forwards](/docs/images/Cue-List-Update-Mode-Forwards.png) | Updates the channels in the current cue and tracks following cues until the channels are next changed. The values in cues before this one will not be changed.
**Backwards**<br/> ![Cue List Update Mode Backwards](/docs/images/Cue-List-Update-Mode-Backwards.png) | Updates the current cue and tracks backwards through cues until the channels were last changed.
**Both**<br/> ![Cue List Update Mode Both](/docs/images/Cue-List-Update-Mode-Both.png) | Updates the current cue, tracking backwards through previous cues from the previous change and forwards through following cues to the next change.
**Cue Only**<br/> ![Cue List Update Mode Cue Only](/docs/images/Cue-List-Update-Mode-Cue-Only.png) |  Just sets the current cue.


> You can't change the cue number using this menu - if you press <Keys.SoftKey>Cue Number</Keys.SoftKey> this will change the cue you are editing. Use <Keys.SoftKey>Advanced Options</Keys.SoftKey> to change cue numbers.

## Updating Values in a Range of Cues

You can **merge** or **replace** values in a range of cues in a cue list (or a
chase). This can be done either from the keypad or from the [Playback
View](#playback-view-window).

From [Playback View](#playback-view-window), press <Keys.HardKey>Record</Keys.HardKey> then select a cue or range of cues
by touching and dragging over the required cues. Select <Keys.SoftKey>Merge</Keys.SoftKey> or <Keys.SoftKey>Replace</Keys.SoftKey> (or press <Keys.HardKey>Enter</Keys.HardKey> to merge). The current programmer will
be merged into all of the selected cues.

From the keypad, connect the cue list (or chase) and press <Keys.HardKey>Rec Step</Keys.HardKey>.
Then use the syntax **n** <Keys.HardKey>THRU</Keys.HardKey> **m** to select a range or **n** <Keys.HardKey>And</Keys.HardKey> **m** to select cues which aren't together. The selected cues will highlight in red in the [Playback View](#playback-view-window) if you have it open. When you have selected all desired cues press <Keys.HardKey>Enter</Keys.HardKey>, then select <Keys.SoftKey>Merge</Keys.SoftKey> or <Keys.SoftKey>Replace</Keys.SoftKey> (or just press <Keys.HardKey>Enter</Keys.HardKey> again to merge).

## Disabling a Cue

You can temporarily disable a cue using the **Disable** option at the right
hand end of the [Playback View window](#playback-view-window). Tick the **Disabled** checkbox and the
softkeys let you set <Keys.SoftKey>Cue Disabled Yes</Keys.SoftKey>. When a cue is set to **Disabled** it
will be skipped. This can be a useful way to remove a cue, but still be
able to put it back in later.

## Extracting a Cue from a Cue List with Include

You can reload a single cue out of a cue list into the programmer using the [Include function](../cues/editing-cues.md#using-parts-of-existing-cues---the-include-function). Press <Keys.HardKey>Include</Keys.HardKey>, select the cue list, enter the cue number to be included, then press <Keys.SoftKey>Include Cue</Keys.SoftKey>.

If you want to do this from the currently connected cue list, Press <Keys.HardKey>Include</Keys.HardKey>, <Keys.HardKey>Connect/Cue</Keys.HardKey>, type the cue number, <Keys.SoftKey>Include Cue</Keys.SoftKey>.

This is useful if you want to reuse a state from a cue list in another
playback. It is also useful if you want to edit shapes/effects in a cue,
although you can also do this from the [Playback View window](#playback-view-window).
