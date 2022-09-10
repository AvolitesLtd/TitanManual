---
id: theatre-programming
title: Theatre Programming Quick Guide
sidebar_label: Theatre Programming
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

If you are used to programming other theatre-style consoles, you will be
more familiar with using a keypad/syntax style interface, rather than the Titan
touchscreen. But fear not because you can program a theatre show on
Titan using keypad syntax and this is how you do it.

- Labelled buttons on the console are shown like this: <Keys.HardKey>Enter</Keys.HardKey>.
- The <Keys.HardKey>@</Keys.HardKey> button is the one next to the numeric keypad.
- The <Keys.HardKey>Cue</Keys.HardKey> button is labelled <Keys.HardKey>Connect</Keys.HardKey> or <Keys.HardKey>Connect/Cue</Keys.HardKey> on some consoles.
- The <Keys.HardKey>Thru</Keys.HardKey> button is labelled <Keys.HardKey>Thru</Keys.HardKey> or <Keys.HardKey>Through</Keys.HardKey> on some consoles.
- The <Keys.HardKey>And</Keys.HardKey> and <Keys.HardKey>Thru</Keys.HardKey> buttons are not provided as fixed buttons on some consoles, softkey <Keys.SoftKey>And</Keys.SoftKey> and <Keys.SoftKey>Through</Keys.SoftKey> options are provided instead.

Dimmers/Fixtures have a User Number *(which is equivalent to the Channel
Number on other consoles)*, shown in the top left corner of the fixture
button. This is the number **n** shown in the keypad commands below. You can
change this number using the <Keys.SoftKey>Set Legend</Keys.SoftKey> softkey, see section [Changing the Patch](../patching/changing-the-patch.md#setting-legends).
Groups also have a User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

## Setting Dimmer/Fixture Levels

 Keypresses | Action
------------|-------------------
 **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Set fixture **n** to 100%
 **n** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixture **n** to **v%** *(you need to enter 2 digits so "50" for 50%)*
 **n** <Keys.HardKey>Thru</Keys.HardKey> **m** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures **n - m** to **v%**
 **n** <Keys.HardKey>And</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures **n**, **m**, **p** to **v%**
 <Keys.HardKey>Group</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures in group **n** to **v%**
 <Keys.HardKey>Clear</Keys.HardKey> | Snap release edited channels back to programmed state - *like Cheat on ETC*
 **t** <Keys.HardKey>Clear</Keys.HardKey> | Release edited channels fading over time **t**

## Setting Other Attributes of Intelligent Fixtures

 Keypresses | Action
------------|-------------------
 **n** <Keys.HardKey>Enter</Keys.HardKey> | Select fixture **n** for control
 **n** <Keys.HardKey>Thru</Keys.HardKey> m <Keys.HardKey>Enter</Keys.HardKey> | Select fixtures **n** to **m** for control
 <Keys.HardKey>Group</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> | Select all fixtures in group **n** for control

Once you have selected the fixtures:
-   Press one of the **Attribute Bank buttons** <Keys.HardKey>Colour</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> etc. The
    current function of the wheels is shown bottom right on the screen.
    Press the same Attribute Bank again to page through different
    attributes *e.g. if there are 2 gobo wheels keep pressing <Keys.HardKey>Gobo</Keys.HardKey> to
    access the other attributes*.

-   Use the **wheels** to set the value. Or press the <Keys.HardKey>@</Keys.HardKey> button next to
    the wheel and type in a value on the keypad.

-   You can directly set fixtures to a preset gel/filter colour by gel number, see [Selecting gel colours](../controlling-fixtures/changing-fixture-attributes.md#colour-mix-filters). 

## Programming Cues

Titan can have multiple cue lists. To start a cue list press <Keys.HardKey>Record</Keys.HardKey>
then select <Keys.SoftKey>Create Cue List</Keys.SoftKey> from the touch screen. Then press a **Select**
button above the fader where you want to store the cue list.

When programming, Titan uses a concept called "the Programmer". This keeps track of the dimmers/fixture attributes which you have manually changed (or changed with a palette) since you last pressed <Keys.HardKey>Clear</Keys.HardKey>. 

The <Keys.SoftKey>Record Mode</Keys.SoftKey> softkey lets you choose the following ways of programming changes:

- **Record by Channel** will record the individual attributes of fixtures which are in the programmer. So if you have a fixture where you have only changed the pan/tilt, only the pan/tilt will be recorded and the other attributes will not be affected by the cue. This is best for cues which are used to modify other cues (for example a colour-changing cue).

- **Record by Fixture** will record the complete state of fixtures which have any changed attributes in the programmer. So if you have a fixture where you have only changed the pan/tilt, all the other attributes of the fixture will be recorded as well. This is best for cues where you want to be sure that the fixture looks like it was when you programmed it, regardless of its previous state.

- **Record by Stage** will ignore the programmer and record everything which has its intensity set above zero.

Note this means that *if you put up another playback, that won't get
recorded* unless you are using "Record by Stage" mode, since the playback isn't in the programmer (see [Creating a Cue](../cues/creating-a-cue.md#creating-a-cue)). You can use the [Include](../cues/editing-cues.md#using-parts-of-existing-cues---the-include-function) function to get a playback into the programmer for recording elsewhere.

In addition to the above, if you have [Tracking Mode](../cue-lists/cue-list-playback.md#tracking) enabled for the Cue List (the default setting) then the console will not record dimmers/attributes unless they have changed from the previous cue in the Cue List. This is the normal operation of theatrical lighting consoles and makes editing cues easier, since you only have the change the cue where the attribute was originally set.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Record</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Record the next cue onto the end of the cue list on this fader
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> | Record cue **n** *(will prompt for merge/overwrite if it exists already)*
<Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Set fade time into programmer *(does not affect stored cues; will save with the cue when you record it)*
<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Delete cue **n** *(2^nd^ <Keys.HardKey>Enter</Keys.HardKey> confirms)*
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** to new cue **m**
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** onto the end of the cue list
<Keys.HardKey>Open/View</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Show the list of cues on screen, click on individual times to edit them

- For the **copy** commands, you can use <Keys.HardKey>Move</Keys.HardKey> in place of <Keys.HardKey>Copy</Keys.HardKey>to **move** cues. For consoles
  which don't have a <Keys.HardKey>Move</Keys.HardKey> button you can press (<Keys.HardKey>Avo</Keys.HardKey> and <Keys.HardKey>Copy</Keys.HardKey>) together to get Move.

- You can select multiple cues using <Keys.HardKey>Thru</Keys.HardKey>, <Keys.HardKey>And</Keys.HardKey> and <Keys.SoftKey>Not</Keys.SoftKey>. For example to copy cues 3, 4 ,5 ,7, 10
  into a new block of cues starting at cue 20 you could do 

  <Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **3** <Keys.HardKey>Thru</Keys.HardKey> **7** <Keys.SoftKey>Not</Keys.SoftKey> **6** <Keys.HardKey>And</Keys.HardKey> **10** <Keys.HardKey>@</Keys.HardKey> **20** <Keys.HardKey>Enter</Keys.HardKey>

- To make a **Block** cue (changes from previous cues do not track), view the cue list as above,
	in the Tracking column click the cell for the cue you want to change and
	select <Keys.SoftKey>Block</Keys.SoftKey> from the softkeys.

- To [link cues](cue-list-timing.md#cue-linking--link-offset) so they automatically run after each other,
	the easiest way is on the screen. Click on the "Link" cell
	(which normally shows "Wait For Go". Then select from the softkeys
	<Keys.SoftKey>Link After Previous Cue</Keys.SoftKey> or <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>. For Link
	After, set the "Delay Out" time to set how long the cue will remain
	before the next cue starts.

## Running Cues

Push up the fader of the cue list to make it active. Titan calls this the *connected* cue list and the control buttons
such as Go will operate on this cue list.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Cue</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> |If another cue list is active, connect this cue list as the current list
<Keys.HardKey>Go</Keys.HardKey> | Run next cue with programmed times
<Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Go</Keys.HardKey> | Go cue **n** with programmed times
**t** <Keys.HardKey>Go</Keys.HardKey> | Next cue go with fade time **t**
**n** <Keys.HardKey>Cue</Keys.HardKey> **t** <Keys.HardKey>Go</Keys.HardKey> | Jump to cue **n** with fade time **t**

-   If you want moving fixtures to automatically position themselves ready
    for the next cue, enable the <Keys.SoftKey>Move In Dark</Keys.SoftKey> option, see [Move In Dark](cue-list-options.md#move-in-dark).
    This option is Off by default.


## Updating Cues 

You can update a single cue with the contents of the programmer, or add the same changes to a range of cues.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.SoftKey>Merge</Keys.SoftKey> | Update cue **n** with the contents of the programmer *(will add the cue if it does not already exist)*. You can press <Keys.HardKey>Enter</Keys.HardKey> twice instead of <Keys.SoftKey>Merge</Keys.SoftKey>.
<Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Set fade time of cue **n** to **t** seconds
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Merge</Keys.SoftKey> | Merge the contents of the programmer into cues **n** to **m** inclusive. *(Will add any whole number cues which are missing in that range)*
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Update</Keys.SoftKey> | Updates cues **n** to **m** inclusive with the contents of the programmer *(Will not add any whole number cues which are missing, but will add attributes which were not originally in the cue)*
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Update</Keys.SoftKey> | Updates cues **n** to **m** inclusive with the contents of the programmer *(Will not add any cues or any attributes which were not originally in the cue)*

- For the **Update** commands you can decide whether or not you want to add attributes which do not already exist in the cues using the <Keys.SoftKey>Add Channels</Keys.SoftKey> option. If this is set to On, then new attributes will be added to the cue, otherwise only pre-existing attributes will be updated.

## Editing Cues While Running

Often you need to make changes to cues while the cue is active in a
running show. Press <Keys.HardKey>Clear</Keys.HardKey> before you set your changes in the programmer, to be sure that
the programmer does not contain any unwanted previous changes.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Update current cue by merging programmer
<Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Set fade in time of current cue (It is probably easier to use <Keys.HardKey>View</Keys.HardKey> and click on the time on  screen to edit it)

## Effects/Shapes

You can't select Effects/Shapes from the keypad on Titan, but it's still
easy:

1. Select fixtures for control

2. At the top level menu press <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Shape
    Generator</Keys.SoftKey>, <Keys.SoftKey>Create</Keys.SoftKey>

3. Select the type of shape <Keys.SoftKey>Dimmer</Keys.SoftKey>, <Keys.SoftKey>Pan/Tilt</Keys.SoftKey> etc

4. Select a shape from the softkeys *or from the Shapes window which
    appears*

5. Set the *Speed*, *Size*, *Spread* using the wheels

Shapes will record into cues, and will track through subsequent cues.
You can deactivate tracked shapes in the Playback View, or set the
Shape Tracking in the Playback Options.
