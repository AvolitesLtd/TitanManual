---
id: editing-cue-lists
title: Editing Cue Lists
sidebar_label: Editing Cue Lists
original_id: editing-cue-lists
---

import Keys from '@site/src/components/key.ts';

Playback View Window
--------------------

The easiest way to edit a cue list is using the Playback View window
(press <Keys.HardKey>View/Open</Keys.HardKey> then the <strong>select</strong> button for the cue list to open
it). This shows a grid with each cue and allows you to change most
features of the cue. Select the item you want to change in the grid,
and the softkeys will offer you the different options.

To change multiple cues at once, draw a box across the items you want to
change.

The [Intensity View window](../controlling-fixtures/viewing-and-editing-fixture-values.md#intensity-window) is useful for seeing the state of all
fixtures, see [Intensity View](../controlling-fixtures/viewing-and-editing-fixture-values.md#intensity-window) in [Viewing and Editing Fixture Values](../controlling-fixtures/viewing-and-editing-fixture-values.md).

Editing Values in Cue View Window
---------------------------------

You can edit the value of every fixture in each cue using the Cue View
window. Press the <strong>View Cue</strong> button at the right hand end of the [Playback
View window](#playback-view-window).

![Cue View Window](/docs/images/Cue-View-Window.png)

You can then click on the values you want to change and edit them using
the softkeys.

-   The context menu buttons allow you to view levels, shapes, effects
    and times for each attribute of each fixture in each cue.

-   If levels are set from a palette, the <strong>View Palettes</strong> button either
    shows you the palette used, or the underlying value.

-   If the <strong>View Tracking Values</strong> button is selected, [tracking values](cue-list-playback.md#tracking)
    (values which have tracked through from another cue rather than
    being stored directly in this cue) are shown in light grey.

Moving and Copying Cues
-----------------------

You can copy or move cues within a cue list or to other cue lists.
Either click and drag the cue in the [Playback
View window](#playback-view-window) (press
Open/View then the <strong>select</strong> button for the cue list), or use <strong>Unfold</strong> ([next
section](#editing-a-cue-list-using-unfold)), or you can use a `command-line` style series of keypresses.

<strong>Copy/Move within the same playback:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] @ <cue> ENTER`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>][AND <cue>] ENTER <cue> ENTER`

<strong>Copy/Move to the end of the same playback:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] @ @`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] ENTER ENTER`

<strong>Copy/Move to a different playback:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> <cue> ENTER`

<strong>Copy/Move to the end of a different playback:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> ENTER`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> <playback>`

> <strong><Keys.HardKey>playback</Keys.HardKey></strong> is a playback swop key, <strong><Keys.HardKey>cue</Keys.HardKey></strong> is the cue number and
sections in square brackets are optional)

Editing a Cue List using Unfold
-------------------------------

The <Keys.HardKey>Unfold</Keys.HardKey> button places each cue of the cue list on one of the
playback faders. This allows you to fire and edit each step individually
as if it was a stand-alone cue.

1. Press <Keys.HardKey>Unfold</Keys.HardKey>, then the <strong>Select</strong> button of the cue list to be
edited.

2. Cues are loaded into the <strong>playback faders</strong>. The display shows the cue
numbers and legends *(see more cues using softkeys F and G)*.

3. Raise a <strong>playback fader</strong> to output the contents of that cue *(fade
times will operate as programmed)*.

4. *Various Unfold options are available, detailed below.*

5. Press <Keys.HardKey>Unfold</Keys.HardKey> again to exit unfold mode.

---

-   To <strong>edit</strong> the contents of a cue: Press <Keys.HardKey>Clear</Keys.HardKey> to empty the
    programmer, raise the fader to output the cue, make the changes,
    press <Keys.SoftKey>Record Step</Keys.SoftKey>, then the <strong>Select</strong> button for the cue number.

-   To <strong>merge</strong> the programmer into the live step, double tap <Keys.SoftKey>Record
    Step</Keys.SoftKey>.

-   To change the times or cue linking for the cue, press <Keys.SoftKey>Edit
    Times</Keys.SoftKey>, then the <strong>Select</strong> button for the cue, then set the times (see
    [Cue List Timing](cue-list-timing.md))

-   To <strong>insert</strong> a new cue, set up the look for the new cue, press B
    <Keys.SoftKey>Insert Step</Keys.SoftKey>, then press the playback button where you want the
    new cue to go. All following cues will be shifted on by one and the
    new cue will be given a number in between the two existing cues *(for
    example, if you press playback 3, your new cue will be 2.5)*.

-   To <strong>move</strong> or <strong>copy</strong> a cue, press the <Keys.HardKey>Move</Keys.HardKey> or <Keys.HardKey>Copy</Keys.HardKey> button, press
    the <strong>select</strong> button for the cue you want to move or copy, then press
    the <strong>select</strong> button where you want it to go.

-   To <strong>delete</strong> a cue, press the <Keys.HardKey>Delete</Keys.HardKey> button then the <strong>select</strong> button
    for the cue you want to delete. Press the <strong>select</strong> button again to
    confirm.

-   To change the <strong>cue legend</strong>, press <Keys.SoftKey>Set Step Legend</Keys.SoftKey> then the
    playback <strong>select</strong> for the step you want to change.

-   If the cue list has more cues than there are playback faders, you
    can swop to the next page using softkeys F and G.

Using Update to Change Tracked Cues
-----------------------------------

Because fixture settings in a cue list are [tracked](cue-list-playback.md#tracking) through from previous
cues, if you want to edit a setting you need to find the cue where it
was originally set.

The <strong>Update</strong> function will go back through the cue list from the currently
fired cue and automatically update the correct cue.

1. With the cue list fired, select the fixtures and change them to the
settings you want to store.

2. Press <Keys.HardKey>Update</Keys.HardKey> *(<Keys.HardKey>Record Cue</Keys.HardKey>, <Keys.SoftKey>Update</Keys.SoftKey> if the console doesn't
have an Update button)*.

3. Press <Keys.HardKey>Enter</Keys.HardKey> to immediately store the new values to the cue list.

> Alternatively, the softkeys show a list of palettes and playbacks which
can be updated. Select or deselect these as required.
>
> If you have used the softkey options, press <Keys.HardKey>Enter</Keys.HardKey> to complete
the update.

If the attributes you have changed were [tracked](cue-list-playback.md#tracking) through from a
previous cue, Update will update that cue rather than the current one.

Editing a Cue List Which is Running
-----------------------------------

You can also edit cues in a cue list while you are running it without
using [Unfold](#editing-a-cue-list-using-unfold).

1. <strong>Fire the cue list</strong> by raising its fader.

2. Use <strong>Wheel A</strong> to select the cue number you want to change then the
<Keys.HardKey>Go</Keys.HardKey> button to jump to it. *(On Pearl Expert/Tiger Touch 1 press the white ↔
button above the Snap Back button instead of <Keys.HardKey>Go</Keys.HardKey>)*

3. Press <Keys.HardKey>Clear</Keys.HardKey> to make sure the programmer is empty.

4. Make the changes that you want to the current step.

5. Press <Keys.HardKey>Record</Keys.HardKey> then <Keys.HardKey>Connect</Keys.HardKey>, then select <Keys.SoftKey>Replace</Keys.SoftKey>,
<Keys.SoftKey>Merge</Keys.SoftKey> or <Keys.SoftKey>Insert After</Keys.SoftKey> to save the changes. *(On Pearl Expert and
Tiger Touch 1 use the Rec Step button)*

6. Press the <Keys.HardKey>Go</Keys.HardKey> button *(on Pearl Expert and Tiger Touch 1 the white ↔
button)* to jump on to the next step.

### Edit Times of a Running Cue List

You can edit the times for a cue using the <Keys.HardKey>Live Time</Keys.HardKey> and <Keys.HardKey>Next
Time</Keys.HardKey> buttons *(not on all consoles)* as follows:

1. <strong>Fire the cue list</strong> by raising its fader.

2. Use <strong>Wheel A</strong> to select the cue number you want to change then the
<Keys.HardKey>Go</Keys.HardKey> button to jump to it (on Pearl Expert and Tiger Touch 1 the white ↔
button)

3. Press <Keys.HardKey>Live Time</Keys.HardKey> to set the times for the current step, or
<Keys.HardKey>Next Time</Keys.HardKey> for the next step. The Live and Next step numbers are
shown on the display above the controller wheel.

4. Use the softkeys to set the times, linking and overlap settings
you want (see [Cue List Timing](cue-list-timing.md) for a description of the
times). If you set the <Keys.SoftKey>Link to next step</Keys.SoftKey> option to On, then the
next cue will not wait for the <Keys.HardKey>Go</Keys.HardKey> button.

5. Press the <Keys.HardKey>Go</Keys.HardKey> button *(on Pearl Expert and Tiger Touch 1 the white ↔
button)* to jump on to the next step.

The <strong>Review</strong> button lets you test the live step with the new timings.

*You can also use <Keys.HardKey>Unfold</Keys.HardKey> to set the times as described in the
[Unfold section above](#editing-a-cue-list-using-unfold).*

Editing a Cue List While Recording
----------------------------------

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
<strong>Forwards</strong> ![Cue List Update Mode Forwards](/docs/images/Cue-List-Update-Mode-Forwards.png) | Updates the channels in the current cue and tracks following cues until the channels are next changed. The values in cues before this one will not be changed.
<strong>Backwards</strong> ![Cue List Update Mode Backwards](/docs/images/Cue-List-Update-Mode-Backwards.png) | Updates the current cue and tracks backwards through cues until the channels were last changed.
<strong>Both</strong> ![Cue List Update Mode Both](/docs/images/Cue-List-Update-Mode-Both.png) | Updates the current cue, tracking backwards through previous cues from the previous change and forwards through following cues to the next change.
<strong>Cue Only</strong> ![Cue List Update Mode Cue Only](/docs/images/Cue-List-Update-Mode-Cue-Only.png) |  Just sets the current cue.


> You can't change the cue number using this menu - if you press
<Keys.SoftKey>Cue Number</Keys.SoftKey> this will change the cue you are editing. Use
<Keys.SoftKey>Advanced Options</Keys.SoftKey> to change cue numbers.

Updating Values in a Range of Cues
----------------------------------

You can <strong>merge</strong> or <strong>replace</strong> values in a range of cues in a cue list (or a
chase). This can be done either from the keypad or from the [Playback
View](#playback-view-window).

From [Playback View](#playback-view-window), press <Keys.HardKey>Record</Keys.HardKey> then select a cue or range of cues
by touching and dragging over the required cues. Select <Keys.SoftKey>Merge</Keys.SoftKey> or
<Keys.SoftKey>Replace</Keys.SoftKey> (or press <Keys.HardKey>Enter</Keys.HardKey> to merge). The current programmer will
be merged into all of the selected cues.

From the keypad, connect the cue list (or chase) and press <Keys.HardKey>Rec Step</Keys.HardKey>.
Then use the syntax `<Keys.HardKey>n</Keys.HardKey> THRU <Keys.HardKey>m</Keys.HardKey>` to select a range or `<Keys.HardKey>n</Keys.HardKey> AND
<Keys.HardKey>m</Keys.HardKey>` to select cues which aren't together. The selected cues will
highlight in red in the [Playback View](#playback-view-window) if you have it open. When you have
selected all desired cues press <Keys.HardKey>Enter</Keys.HardKey>, then select <Keys.SoftKey>Merge</Keys.SoftKey> or
<Keys.SoftKey>Replace</Keys.SoftKey> (or just press <Keys.HardKey>Enter</Keys.HardKey> again to merge).

Disabling a Cue
---------------

You can temporarily disable a cue using the <strong>Disable</strong> option at the right
hand end of the [Playback View window](#playback-view-window). Select the <strong>Disabled</strong> box and the
softkeys let you set <Keys.SoftKey>Cue Disabled</Keys.SoftKey>. When a cue is set to <strong>Disabled</strong> it
will be skipped. This can be a useful way to remove a cue, but still be
able to put it back in later.

Extracting a Cue from a Cue List with Include
---------------------------------------------

You can reload a single cue out of a cue list into the programmer using
<strong>[Include](../cues/editing-cues.md#using-parts-of-existing-cues-the-include-function)</strong>. Press <Keys.HardKey>Include</Keys.HardKey>, select the cue list, enter the cue number to
be included, then press <Keys.SoftKey>Include Cue</Keys.SoftKey>.

If you want to do this from the currently connected cue list, Press
<Keys.HardKey>Include</Keys.HardKey>, <Keys.HardKey>Connect</Keys.HardKey>, type the cue number, <Keys.SoftKey>Include Cue</Keys.SoftKey>.

This is useful if you want to reuse a state from a cue list in another
playback. It is also useful if you want to edit shapes/effects in a cue,
although you can also do this from the [Playback View window](#playback-view-window).
