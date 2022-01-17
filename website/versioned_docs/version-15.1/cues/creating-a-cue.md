---
id: creating-a-cue
title: Creating a Cue
sidebar_label: Creating a Cue
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## How Titan Works When Programming

When you select one or more dimmers or fixtures for control, they are
loaded into the **Programmer**. You can then use the 
[wheels](../controlling-fixtures/changing-fixture-attributes.md#changing-attributes-using-the-wheels),
[palettes](../palettes.md) and [effects](../effects.md) to 
change the attributes on the fixture and your changes will be
stored in the Programmer.

The order in which you selected the
fixtures is also stored, and is used with [effects](../effects.md) and the
[Fixture Overlap](cue-timing.md#fade-times-and-fixture-overlap)
function. 

When you record a cue, the contents of the Programmer are
saved into the cue. This might be different to what you see on stage as you
are only saving your changes, not the output of the console. See **Record
Mode** in the next section for different options of what gets saved.

If another fixture is selected after you have changed some attributes then the
current list of fixtures in the Programmer is emptied and a new list is
started, but any attributes you've changed remain in the Programmer.

When you press <Keys.HardKey>Clear</Keys.HardKey>, the Programmer is emptied. This
makes sure you don't record fixtures you don't want. You also need to
press <Keys.HardKey>Clear</Keys.HardKey> when you finish programming, because intensity attributes in
the programmer will override playbacks.

Fixtures which are in the programmer are shown in mid blue on the [touch
buttons](../controlling-fixtures.md#selecting-fixtures-and-dimmers-for-control).
Attributes in the programmer (the things you have changed) are
shown in cyan on the [attribute displays](../controlling-fixtures/changing-fixture-attributes.md#changing-attributes-using-the-wheels).

Firing a cue does not place the values from the cue in the programmer,
so you can't just turn on a playback and record what you see to another
cue *(although the Include function lets you do this, see
[Using Parts of Existing Cues - the Include Function](editing-cues.md#using-parts-of-existing-cues---the-include-function). 
You can also use Record Stage mode to record what you see on stage*).

## Creating a Cue

<Video videoId="X5g6DMVwlZU" title="Creating a Cue" />

1. Press <Keys.HardKey>Clear</Keys.HardKey> to clear the programmer. *This ensures that you are starting with a clean slate.*
2. Set up the look using the fixtures. You can save shapes in a cue.
Remember that only fixtures which are selected or have been modified
will be saved in the cue (in <Keys.SoftKey>Record by Fixture</Keys.SoftKey> mode).
3. Press the <Keys.HardKey>Record</Keys.HardKey> button.
4. Press the **Select** button of an empty playback to record the cue. The
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

    -   &nbsp;<Keys.SoftKey>Quick Build</Keys.SoftKey> - see [next section](#quick-build-cues)


-   <Keys.SoftKey>Record By Channel</Keys.SoftKey> is useful if you want to layer multiple cues to
    create an effect.

-   If you are recording a lot of cues, you can press <Keys.HardKey>Menu Latch</Keys.HardKey> to
    keep the Record Cue menu active. Press <Keys.HardKey>Menu Latch</Keys.HardKey> again to unlatch
    the Record Cue menu, press <Keys.HardKey>Exit</Keys.HardKey> to leave the menu.

-   The screen immediately above each fader shows a legend for the
    playback. To set this, from the top-level menu press <Keys.SoftKey>Set Legend</Keys.SoftKey>, 
    then the playback **Select** button, then enter a legend on the
    keyboard or draw a picture legend. Press <Keys.HardKey>Enter</Keys.HardKey> to store it.

   ![Playbacks stored on playback faders](/docs/images/Playbacks-stored-on-playback-faders.png)

    On the Diamond 9, setting <Keys.SoftKey>Halo</Keys.SoftKey> in the Legend menu will set the illumination colour 
    of the playback fader.


-   A **Static Playbacks** workspace is available to show the contents of
    the macro/executor buttons and (on the Tiger Touch) the 10 static
    playback faders.

## Quick Build Cues

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

## Using Shapes/Effects in Cues

As you would expect, any [shapes or Pixel Mapper effects](../effects.md) you have set up
will be saved as part of the cue.

You can create a cue which contains a shape with no base reference
values; a shape cue like this can then be fired with other cues to
overlay the shape on the cue and give you instant effects based around
the settings in that cue. When recording the cue, use **Record by Channel**
mode or use the ["Off" function](editing-cues.md#removing-attributes-from-cues-using-off)
to remove the other attributes from the programmer.

## Blind Mode

Blind mode allows you to program cues without affecting the current look
on the stage. This can be very useful for making changes during a live
show. Your changes are still shown in the
[Visualiser window](../capture-visualiser.md).

To put the console into blind mode, just press the <Keys.HardKey>Blind</Keys.HardKey> button *(on
consoles without a dedicated button, hold down <Keys.HardKey>Avo</Keys.HardKey> and toggle the
option between <Keys.SoftKey>Blind Inactive</Keys.SoftKey> and <Keys.SoftKey>Blind Active</Keys.SoftKey>  )*.

If you want to preview a playback on the visualiser without affecting
the stage, playbacks can be set to Blind mode using <Keys.SoftKey>Playback
Options</Keys.SoftKey>. To quickly set a playback to blind mode, hold <Keys.HardKey>Blind</Keys.HardKey> and
press the playback **select** button. Repeat to make it Live again.

You can fade your blind state to the live output by typing in a fade
time number then pressing <Keys.HardKey>Blind</Keys.HardKey>. This allows you to recall several
palettes together, or create a live state to be output without needing
to save it to a cue.

## Recording Cue with a Mask

You can set a mask when recording a cue so that only certain attributes
are recorded, the same as you can when
[recording a palette](../palettes/creating-palettes.md#storing-a-palette). In the
Record menu, select the <Keys.SoftKey>Set Mask</Keys.SoftKey> option.

There is an additional option <Keys.SoftKey>Clear Record Mask</Keys.SoftKey>, if this is enabled
the mask will automatically be cleared after this record operation. This
is good to stop you accidentally leaving the mask set and causing havoc
with future cues.

## Convert Cue to Chase or Cue List

If you want to convert an existing cue into [chase](../chases.md) or 
[cue list](../cue-lists.md) by adding
further steps, press <Keys.HardKey>Record</Keys.HardKey>, select the cue, then select <Keys.SoftKey>Convert
to Chase</Keys.SoftKey> (or Cue List). The existing cue will become cue 1 and the
contents of the programmer will become a new cue 2.
