---
id: creating-a-cue
title: Creating a Cue
sidebar_label: Creating a Cue
original_id: creating-a-cue
---

import Keys from '@site/src/components/key.ts';

How Titan Works When Programming
--------------------------------

When you select one or more dimmers or fixtures for control, they are
loaded into the ***Editor***. You can then use the 
[wheels](../controlling-fixtures/using-the-select-buttons-and-wheels.md#changing-attributes-using-the-wheels)
and [palettes](../palettes.md) to
change the settings on the fixture. You can also apply shapes to it.

If a fixture is selected after you have changed some attributes then the
current list of fixtures in the Editor is emptied and a new list is
started.

All fixtures and attributes that have been edited since the last Clear
are stored in the ***Programmer***. The order in which you selected the
fixtures is also stored, and is used with [shapes](../effects.md) and the
[Fixture Overlap](cue-timing.md#setting-fade-times-and-overlap-for-a-cue)
function. When you record a cue, the contents of the Programmer are
saved into the cue.

When you press <Keys.HardKey>Clear</Keys.HardKey>, the programmer and editor are emptied. This
makes sure you don't record fixtures you don't want. You also need to
press <Keys.HardKey>Clear</Keys.HardKey> when you finish programming, because any attributes in
the programmer will override playbacks.

Fixtures which are in the programmer are shown in mid blue on the [touch
buttons](../controlling-fixtures/using-the-select-buttons-and-wheels.md#selecting-fixtures-and-dimmers-for-control).
Attributes in the programmer (the things you have changed) are
shown in cyan on the [attribute displays](../controlling-fixtures/using-the-select-buttons-and-wheels.md#attribute-wheel-display).

Firing a cue does not place the values from the cue in the programmer,
so you can't just turn on a playback and record what you see to another
cue *(although the Include function lets you do this, see
[Using Parts of Existing Cues - the Include Function](editing-cues.md#using-parts-of-existing-cues-the-include-function))*.

Creating a Cue
--------------

[Video cover recording playbacks and the different modes](https://youtu.be/X5g6DMVwlZU?t=20)

1. Press <Keys.HardKey>Clear</Keys.HardKey> to clear the programmer.\
*This ensures that you are starting with a clean slate.*

2. Set up the look using the fixtures. You can save shapes in a cue.
Remember that only fixtures which are selected or have been modified
will be saved in the cue (in <Keys.SoftKey>Record by Fixture</Keys.SoftKey> mode).

3. Press the <Keys.HardKey>Record</Keys.HardKey> button *(<Keys.HardKey>Record Cue</Keys.HardKey> on Pearl Expert)*.

4. Press the **Swop** button of an empty Playback to record the cue. The
handles where you can record the cue will flash. You can also record a
cue onto a touch button in the Playbacks window.

5. Press <Keys.HardKey>Clear</Keys.HardKey> to clear the programmer

Other useful things to know about recording cues:

-   Cues can be recorded to any fader, the macro/executor buttons or the
    on-screen Playbacks window.

-   <Keys.SoftKey>Record Mode</Keys.SoftKey> lets you select:
    -   <Keys.SoftKey>Record By Fixture</Keys.SoftKey> - All attributes of any modified or selected
    fixture are saved
    -   <Keys.SoftKey>Record By Channel</Keys.SoftKey> - Only modified attributes are saved
    -   <Keys.SoftKey>Record Stage</Keys.SoftKey> - All fixtures with a non-zero dimmer channel are saved
    -   <Keys.SoftKey>Quick Build</Keys.SoftKey> - see [next section](#quick-build-cues)

-   <Keys.SoftKey>Record By Channel</Keys.SoftKey> is useful if you want to layer multiple cues to
    create an effect.

-   If you are recording a lot of cues, you can press <Keys.HardKey>Menu Latch</Keys.HardKey> to
    keep the Record Cue menu active. Press <Keys.HardKey>Exit</Keys.HardKey> to leave Record Cue
    mode.

-   The screen immediately above each fader shows a legend for the
    playback. To set this, from the top-level menu press <Keys.SoftKey>Set Legend</Keys.SoftKey>, 
    then the playback **Swop** button (or the touch select button), then enter a legend on the
    keyboard or draw a picture legend. Press <Keys.HardKey>Enter</Keys.HardKey> to store it. *If
    the fader or button does not have an associated screen you will have
    to resort to the old fashioned method of white tape and Sharpie.*

![Playbacks stored on playback faders](/docs/images/Playbacks-stored-on-playback-faders.png)

-   A Static Playbacks workspace is available to show the contents of
    the macro/executor buttons and (on the Tiger Touch) the 10 static
    playback faders.

Quick Build Cues
----------------

Setting <Keys.SoftKey>Record Mode</Keys.SoftKey> to **Quick Build** allows you to build a cue from
existing playbacks or palettes (you can also use the
[Include function](editing-cues.md#using-parts-of-existing-cues-the-include-function) to
do this).

After setting the record mode to Quick Build, the console will wait for
you to select playbacks or palettes.

To insert specific fixtures from a palette or playback, select the
fixtures first and then select the palette or playback.

Press <Keys.SoftKey>OK</Keys.SoftKey> once you have selected all the playbacks or palettes
required.

Using Shapes/Effects in Cues
----------------------------

As you would expect, any [shapes or Pixel Mapper effects](../effects.md) you have set up
will be saved as part of the cue.

You can create a cue which contains a shape with no base reference
values; a shape cue like this can then be fired with other cues to
overlay the shape on the cue and give you instant effects based around
the settings in that cue. When recording the cue, use **Record by Channel**
mode or use the ["Off" function](editing-cues.md#removing-attributes-from-cues-using-off)
to remove the other attributes from the programmer.

Blind Mode
----------

Blind mode allows you to program cues without affecting the current look
on the stage. This can be very useful for making changes during a live
show. Your changes are still shown in the
[Visualiser window](../capture-visualiser.md).

To put the console into blind mode, just press the <Keys.HardKey>Blind</Keys.HardKey> button *(on
consoles without a dedicated button, hold down <Keys.HardKey>Avo</Keys.HardKey> and select the
<Keys.SoftKey>Blind</Keys.SoftKey> option)*.

If you want to preview a playback on the visualiser without affecting
the stage, playbacks can be set to Blind mode using \[Playback
Options\]. To quickly set a playback to blind mode, hold <Keys.HardKey>Blind</Keys.HardKey> and
press the playback **select** button. Repeat to make it Live again.

You can fade your blind state to the live output by typing in a fade
time number then pressing <Keys.HardKey>Blind</Keys.HardKey>. This allows you to recall several
palettes together, or create a live state to be output without needing
to save it to a cue.

Recording Cue with a Mask
-------------------------

You can set a mask when recording a cue so that only certain attributes
are recorded, the same as you can when
[recording a palette](../palettes/creating-palettes.md#storing-a-palette). In the
Record menu, select the <Keys.SoftKey>Set Mask</Keys.SoftKey> option.

There is an additional option <Keys.SoftKey>Clear Record Mask</Keys.SoftKey>, if this is enabled
the mask will automatically be cleared after this record operation. This
is good to stop you accidentally leaving the mask set and causing havoc
with future cues.

Convert Cue to Chase or Cue List
--------------------------------

If you want to convert an existing cue into [chase](../chases.md) or 
[cue list](../cue-lists.md) by adding
further steps, press <Keys.HardKey>Record</Keys.HardKey>, select the cue, then select \[Convert
to Chase\] (or Cue List). The existing cue will become cue 1 and the
contents of the programmer will become a new cue 2.