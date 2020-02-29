---
id: creating-a-cue 
title: Creating a cue
sidebar_label: Creating a cue
---

How Titan works when programming
--------------------------------

When you select one or more dimmers or fixtures for control, they are
loaded into the *Editor*. You can then use the wheels and palettes to
change the settings on the fixture. You can also apply shapes to it.

If a fixture is selected after you have changed some attributes then the
current list of fixtures in the Editor is emptied and a new list is
started.

All fixtures and attributes that have been edited since the last Clear
are stored in the *Programmer*. The order in which you selected the
fixtures is also stored, and is used with shapes and the Fixture Overlap
function. When you record a cue, the contents of the Programmer are
saved into the cue.

When you press \<Clear\>, the programmer and editor are emptied. This
makes sure you don't record fixtures you don't want. You also need to
press \<Clear\> when you finish programming, because any attributes in
the programmer will override playbacks.

Fixtures which are in the programmer are shown in mid blue on the touch
buttons. Attributes in the programmer (the things you have changed) are
shown in cyan on the attribute displays.

Firing a cue does not place the values from the cue in the programmer,
so you can't just turn on a playback and record what you see to another
cue (although the Include function lets you do this, see section 8.3.4
on page 205).

Creating a cue
--------------

1. Press \<Clear\> to clear the programmer. This ensures that you are
starting with a clean slate.

2. Set up the look using the fixtures. You can save shapes in a cue.
Remember that only fixtures which are selected or have been modified
will be saved in the cue (in Record by Fixture mode).

3. Press the \<Record\> button (\<Record Cue\> on Pearl Expert).

4. Press the Swop button of an empty Playback to record the cue. The
handles where you can record the cue will flash. You can also record a
cue onto a touch button in the Playbacks window.

5. Press \<Clear\> to clear the programmer. Repeat from 2 to program
more cues.

Other useful things to know about recording cues:

-   Cues can be recorded to any fader, the macro/executor buttons or the
    onscreen Playbacks window.

-   \[Record Mode\] lets you select Record By Fixture (all attributes of
    any modified or selected fixture are saved), Record By Channel (only
    modified attributes are saved), Record Stage (all fixtures with a
    non-zero dimmer channel are saved) or Quick Build (see next
    section).

-   Record By Channel is useful if you want to layer multiple cues to
    create an effect.

-   If you are recording a lot of cues, you can press \<Menu Latch\> to
    keep the Record Cue menu active. Press \<Exit\> to leave Record Cue
    mode.

-   The screen immediately above each fader shows a legend for the
    playback. To set this, press \[Set Legend\], then the playback Swop
    button (or the touch select button), then enter a legend on the
    keyboard or draw a picture legend. Press \<Enter\> to store it. If
    the fader or button does not have an associated screen you will have
    to resort to the old fashioned method of white tape and sharpie.

![](/docs/images/image234.png)

-   A Static Playbacks workspace is available to show the contents of
    the macro/executor buttons and (on the Tiger Touch) the 10 static
    playback faders.

Quick Build cues
----------------

Setting \[Record Mode\] to Quick Build allows you to build a cue from
existing playbacks or palettes (you can also use the Include function to
do this).

After setting the record mode to Quick Build, the console will wait for
you to select playbacks or palettes.

To insert specific fixtures from a palette or playback, select the
fixtures first and then select the palette or playback.

Press \[OK\] once you have selected all the playbacks or palettes
required.

Using shapes/effects in cues
----------------------------

As you would expect, any shapes or Pixel Mapper effects you have set up
will be saved as part of the cue.

You can create a cue which contains a shape with no base reference
values; a shape cue like this can then be fired with other cues to
overlay the shape on the cue and give you instant effects based around
the settings in that cue. When recording the cue, use Record by Channel
mode or use the "Off" function to remove the other attributes from the
programmer as described on page 209.

Blind mode
----------

Blind mode allows you to program cues without affecting the current look
on the stage. This can be very useful for making changes during a live
show. Your changes are still shown in the Visualiser window.

To put the console into blind mode, just press the \<Blind\> button (on
consoles without a dedicated button, hold down \<Avo\> and select the
\[Blind\] option).

If you want to preview a playback on the visualiser without affecting
the stage, playbacks can be set to Blind mode using \[Playback
Options\]. To quickly set a playback to blind mode, hold \<Blind\> and
press the playback select button. Repeat to make it Live again.

You can fade your blind state to the live output by typing in a fade
time number then pressing \<Blind\>. This allows you to recall several
palettes together, or create a live state to be output without needing
to save it to a cue.

Recording cue with a mask
-------------------------

You can set a mask when recording a cue so that only certain attributes
are recorded, the same as you can when recording a palette. In the
Record menu, select the \[Set Mask\] option.

There is an additional option \[Clear Record Mask\], if this is enabled
the mask will automatically be cleared after this record operation. This
is good to stop you accidentally leaving the mask set and causing havoc
with future cues.

Convert cue to chase or cue list
--------------------------------

If you want to convert an existing cue into chase or cue list by adding
further steps, press \<Record\>, select the cue, then select \[Convert
to Chase\] (or Cue List). The existing cue will become cue 1 and the
contents of the programmer will become a new cue 2.


