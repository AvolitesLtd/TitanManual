---
id: version-13.0-editing-cue-lists
title: Editing Cue Lists
sidebar_label: Editing Cue Lists
original_id: editing-cue-lists
---

Playback View Window
--------------------

The easiest way to edit a cue list is using the Playback View window
(press \<View/Open\> then the **select** button for the cue list to open
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
window. Press the **View Cue** button at the right hand end of the [Playback
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

Moving and Copying Cues
-----------------------

You can copy or move cues within a cue list or to other cue lists.
Either click and drag the cue in the [Playback
View window](#playback-view-window) (press
Open/View then the **select** button for the cue list), or use **Unfold** ([next
section](#editing-a-cue-list-using-unfold)), or you can use a `command-line` style series of keypresses.

**Copy/Move within the same playback:**

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] @ <cue> ENTER`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>][AND <cue>] ENTER <cue> ENTER`

**Copy/Move to the end of the same playback:**

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] @ @`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] ENTER ENTER`

**Copy/Move to a different playback:**

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> <cue> ENTER`

**Copy/Move to the end of a different playback:**

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> ENTER`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> <playback>`

> **\<playback\>** is a playback swop key, **\<cue\>** is the cue number and
sections in square brackets are optional)

Editing a Cue List using Unfold
-------------------------------

The \<Unfold\> button places each cue of the cue list on one of the
playback faders. This allows you to fire and edit each step individually
as if it was a stand-alone cue.

1. Press \<Unfold\>, then the **Select** button of the cue list to be
edited.

2. Cues are loaded into the **playback faders**. The display shows the cue
numbers and legends *(see more cues using softkeys F and G)*.

3. Raise a **playback fader** to output the contents of that cue *(fade
times will operate as programmed)*.

4. *Various Unfold options are available, detailed below.*

5. Press \<Unfold\> again to exit unfold mode.

---

-   To **edit** the contents of a cue: Press \<Clear\> to empty the
    programmer, raise the fader to output the cue, make the changes,
    press \[Record Step\], then the **Select** button for the cue number.

-   To **merge** the programmer into the live step, double tap \[Record
    Step\].

-   To change the times or cue linking for the cue, press \[Edit
    Times\], then the **Select** button for the cue, then set the times (see
    [Cue List Timing](cue-list-timing.md))

-   To **insert** a new cue, set up the look for the new cue, press B
    \[Insert Step\], then press the playback button where you want the
    new cue to go. All following cues will be shifted on by one and the
    new cue will be given a number in between the two existing cues *(for
    example, if you press playback 3, your new cue will be 2.5)*.

-   To **move** or **copy** a cue, press the \<Move\> or \<Copy\> button, press
    the **select** button for the cue you want to move or copy, then press
    the **select** button where you want it to go.

-   To **delete** a cue, press the \<Delete\> button then the **select** button
    for the cue you want to delete. Press the **select** button again to
    confirm.

-   To change the **cue legend**, press \[Set Step Legend\] then the
    playback **select** for the step you want to change.

-   If the cue list has more cues than there are playback faders, you
    can swop to the next page using softkeys F and G.

Using Update to Change Tracked Cues
-----------------------------------

Because fixture settings in a cue list are [tracked](cue-list-playback.md#tracking) through from previous
cues, if you want to edit a setting you need to find the cue where it
was originally set.

The **Update** function will go back through the cue list from the currently
fired cue and automatically update the correct cue.

1. With the cue list fired, select the fixtures and change them to the
settings you want to store.

2. Press \<Update\> *(\<Record Cue\>, \[Update\] if the console doesn't
have an Update button)*.

3. Press \<Enter\> to immediately store the new values to the cue list.

> Alternatively, the softkeys show a list of palettes and playbacks which 
can be updated. Select or deselect these as required.
>
> If you have used the softkey options, press \<Enter\> to complete
the update.

If the attributes you have changed were [tracked](cue-list-playback.md#tracking) through from a
previous cue, Update will update that cue rather than the current one.

Editing a Cue List Which is Running
-----------------------------------

You can also edit cues in a cue list while you are running it without
using [Unfold](#editing-a-cue-list-using-unfold).

1. **Fire the cue list** by raising its fader.

2. Use **Wheel A** to select the cue number you want to change then the
\<Go\> button to jump to it. *(On Pearl Expert/Tiger Touch 1 press the white ↔
button above the Snap Back button instead of \<Go\>)*

3. Press \<Clear\> to make sure the programmer is empty.

4. Make the changes that you want to the current step.

5. Press \<Record\> then \<Connect\>, then select \[Replace\],
\[Merge\] or \[Insert After\] to save the changes. *(On Pearl Expert and
Tiger Touch 1 use the Rec Step button)*

6. Press the \<Go\> button *(on Pearl Expert and Tiger Touch 1 the white ↔
button)* to jump on to the next step.

### Edit Times of a Running Cue List

You can edit the times for a cue using the \<Live Time\> and \<Next
Time\> buttons *(not on all consoles)* as follows:

1. **Fire the cue list** by raising its fader.

2. Use **Wheel A** to select the cue number you want to change then the
\<Go\> button to jump to it (on Pearl Expert and Tiger Touch 1 the white ↔
button)

3. Press \<Live Time\> to set the times for the current step, or
\<Next Time\> for the next step. The Live and Next step numbers are
shown on the display above the controller wheel.

4. Use the softkeys to set the times, linking and overlap settings
you want (see [Cue List Timing](cue-list-timing.md) for a description of the
times). If you set the \[Link to next step\] option to On, then the
next cue will not wait for the \<Go\> button.

5. Press the \<Go\> button *(on Pearl Expert and Tiger Touch 1 the white ↔
button)* to jump on to the next step.

The **Review** button lets you test the live step with the new timings.

*You can also use \<Unfold\> to set the times as described in the
[Unfold section above](#editing-a-cue-list-using-unfold).*

Editing a Cue List While Recording
----------------------------------

You can edit cues while you are in the Record Cue List menu.

1. Press \[Cue Number=x\] and type the cue number to be edited.

2. The console will jump to the cue and show the output.

3. Make the changes that you want to the programming of the current
step, or to the timings using \[Edit Cue x Times\].

4. Press \[Update Cue x\] or the Rec Step button to save the changes.

### Update Mode

The \[Update Mode\] softkey allows you to set how changes in the cue
will be tracked. 

Update Mode | Action
---|---
**Forwards** ![Cue List Update Mode Forwards](/docs/images/Cue-List-Update-Mode-Forwards.png) | Updates the channels in the current cue and tracks following cues until the channels are next changed. The values in cues before this one will not be changed.
**Backwards** ![Cue List Update Mode Backwards](/docs/images/Cue-List-Update-Mode-Backwards.png) | Updates the current cue and tracks backwards through cues until the channels were last changed.
**Both** ![Cue List Update Mode Both](/docs/images/Cue-List-Update-Mode-Both.png) | Updates the current cue, tracking backwards through previous cues from the previous change and forwards through following cues to the next change.
**Cue Only** ![Cue List Update Mode Cue Only](/docs/images/Cue-List-Update-Mode-Cue-Only.png) |  Just sets the current cue.


> You can't change the cue number using this menu - if you press
\[Cue Number\] this will change the cue you are editing. Use
\[Advanced Options\] to change cue numbers.

Updating Values in a Range of Cues
----------------------------------

You can **merge** or **replace** values in a range of cues in a cue list (or a
chase). This can be done either from the keypad or from the [Playback
View](#playback-view-window).

From [Playback View](#playback-view-window), press \<Record\> then select a cue or range of cues
by touching and dragging over the required cues. Select \[Merge\] or
\[Replace\] (or press \<Enter\> to merge). The current programmer will
be merged into all of the selected cues.

From the keypad, connect the cue list (or chase) and press \<Rec Step\>.
Then use the syntax `<n> THRU <m>` to select a range or `<n> AND
<m>` to select cues which aren't together. The selected cues will
highlight in red in the [Playback View](#playback-view-window) if you have it open. When you have
selected all desired cues press \<Enter\>, then select \[Merge\] or
\[Replace\] (or just press \<Enter\> again to merge).

Disabling a Cue
---------------

You can temporarily disable a cue using the **Disable** option at the right
hand end of the [Playback View window](#playback-view-window). Select the **Disabled** box and the
softkeys let you set \[Cue Disabled\]. When a cue is set to **Disabled** it
will be skipped. This can be a useful way to remove a cue, but still be
able to put it back in later.

Extracting a Cue from a Cue List with Include
---------------------------------------------

You can reload a single cue out of a cue list into the programmer using
**[Include](../cues/editing-cues.md#using-parts-of-existing-cues-the-include-function)**. Press \<Include\>, select the cue list, enter the cue number to
be included, then press \[Include Cue\].

If you want to do this from the currently connected cue list, Press
\<Include\>, \<Connect\>, type the cue number, \[Include Cue\].

This is useful if you want to reuse a state from a cue list in another
playback. It is also useful if you want to edit shapes/effects in a cue,
although you can also do this from the [Playback View window](#playback-view-window).