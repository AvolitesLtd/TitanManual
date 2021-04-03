---
id: editing-a-chase
title: Editing a Chase
sidebar_label: Editing a Chase
---

import Keys from '/src/components/key.ts';

Opening a Chase for Editing
---------------------------

You can open a chase for editing by pressing <Keys.HardKey>Record</Keys.HardKey> then the **Select**
button of an existing chase. This does not affect any existing cues in
the chase. You can then save new cues at the end by pressing the Select
button just like normal recording.

To see a list of the cues in the chase, use Playback view (touch the
playback display above the fader or press <Keys.HardKey>Open/View</Keys.HardKey> then the **Select**
button of the playback). To edit any of the time settings in each cue,
select the setting to be modified by touching or dragging in the grid,
then use the softkey options to change the setting.

![Playback View of a chase](/docs/images/Playback-View-for-chase.png)

Editing a Chase Using Unfold
----------------------------

Unfold provides another way to edit chases. The <Keys.HardKey>Unfold</Keys.HardKey> button places
each cue in a chase on one of the playback faders, allowing you to fire
and edit each cue individually as if it was a stand-alone cue. Unfold
also allows you to set individual timing for cues in the chase.

1. Press the <Keys.HardKey>Unfold</Keys.HardKey> button, then the **Select** button of the chase to be
edited

2. The first 10 or 15 cues of the chase (depending how many playback faders
you console has on each page) are loaded into the playback faders

3. Raise a playback fader to output the contents of that cue *(fade
times will operate as programmed)*

4. Various Unfold options are available, the details are below

5. Press <Keys.HardKey>Unfold</Keys.HardKey> again to get out of unfold mode

---

-   To **edit** the contents of a cue: Press <Keys.HardKey>Clear</Keys.HardKey> to empty the programmer,
    raise the fader to output the cue, make the changes, press \[Record
    Step\], then the **Select** button for the cue number.

-   To **insert** a cue between two other cues, set up the look for the new
    cue, press <Keys.SoftKey>Insert Step</Keys.SoftKey>, then type the cue number for the new cue
    (such as 1.5 to go between 1 and 2). If this cue number already
    exists it will be merged with the look you have created. Otherwise a
    new cue is inserted.

-   To **insert** a new cue at the end of the chase, set up the look for the
    new cue, press <Keys.SoftKey>Insert Step</Keys.SoftKey>, then press the **Select** button of the
    first free playback.

-   To **merge** the programmer into the live step, double tap \[Record
    Step\].

-   To change individual times for the cue, press <Keys.SoftKey>Edit Times</Keys.SoftKey>, then
    the **Select** button for the cue (or type the cue number), then set the
    times. This is described in detail in [Chase Timing](chase-timing.md).

-   If the chase has more steps than there are playback faders, you can
    go between pages using the <Keys.SoftKey>Previous Page</Keys.SoftKey> and <Keys.SoftKey>Next Page</Keys.SoftKey>
    buttons.

Extracting a step from a chase with Include
-------------------------------------------

You can reload a single cue/step from a chase into the programmer using
Include. Press <Keys.HardKey>Include</Keys.HardKey>, select the chase, then enter the step number to
be included, then press <Keys.SoftKey>Include Cue</Keys.SoftKey>.

This is useful if you want to reuse a state from a cue in another
chase or as a stand-alone cue. It is also useful if you want to edit
shapes/effects in a step, although you can also do this from the
[Playback View window](#opening-a-chase-for-editing).