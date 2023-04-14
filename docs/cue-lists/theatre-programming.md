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
- For commands with a + you hold down the first button while pressing the second. For example <Keys.HardKey>Clear</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> means hold down <Keys.HardKey>Clear</Keys.HardKey> then press <Keys.HardKey>All</Keys.HardKey>.
- The <Keys.HardKey>@</Keys.HardKey> button is the one next to the numeric keypad, not the ones near the wheels.
- The <Keys.HardKey>Cue</Keys.HardKey> button is labelled <Keys.HardKey>Connect</Keys.HardKey> or <Keys.HardKey>Connect/Cue</Keys.HardKey> on some consoles.
- The <Keys.HardKey>Through</Keys.HardKey> button is labelled <Keys.HardKey>Thro</Keys.HardKey> on some consoles.
- The <Keys.HardKey>And</Keys.HardKey> and <Keys.HardKey>Through</Keys.HardKey> buttons are not provided as fixed buttons on some consoles, softkey <Keys.SoftKey>And</Keys.SoftKey> and <Keys.SoftKey>Through</Keys.SoftKey> options are provided instead.

Each Fixture (or dimmer channel) has a User Number *(which is equivalent to the Channel
Number on other consoles)*, shown in the top left corner of the fixture
button. This is the number **n** shown in the keypad commands below. You can
change this number using the <Keys.SoftKey>Set Legend</Keys.SoftKey> softkey, see section [Changing the Patch](../patching/changing-the-patch.md#setting-legends).
Groups also have a User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

- Commands can be joined together, until you press <Keys.HardKey>Enter</Keys.HardKey> which executes the command. So you can for example select fixtures and then set an intensity level on them in the same command. 
- Once fixtures have been selected you can continue to make changes to them until you press <Keys.HardKey>Clear</Keys.HardKey> or select different fixtures.
- Intensity values are normally set as a 2-digit percentage (so "50" for 50%) but you can change this to single-digit mode in the [Formatting tab of the User Settings](../system-settings/user-settings.md#formatting)

## Selecting Fixtures to be controlled

 Keypresses | Action
------------|-------------------
 **n** <Keys.HardKey>Enter</Keys.HardKey> | Select fixture n for control
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey>	| Select fixtures **n** through **m** for control
<Keys.HardKey>Group</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> | Select fixture group **n** for control
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** | Select fixtures **n** through **m** and **p** for control
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** <Keys.HardKey>Through</Keys.HardKey> **q** | Select fixtures **n** through **m** and **p** through **q** for control
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>Not</Keys.HardKey> **p** | Select fixtures **n** through **m**, but miss out fixture **p**

- If fixtures have cells or subfixtures (for example, pixel bars) you can individually select cells using the "dot" notation, for example **n** <Keys.HardKey>.</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 4  <Keys.HardKey>Enter</Keys.HardKey> would select the first 4 cells of fixture **n**. See [Celled Fixtures](../titan-reference.md#celled-fixtures-sub-fixtures).

## Setting Fixture intensity levels

 Keypresses | Action
------------|-------------------
 <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set the currently selected fixtures to **v%** *(see note above about 2-digit %)*
 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Set the currently selected fixtures to 100%
 **n** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixture **n** to **v%**
 **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Set fixture **n** to 100%
 **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures **n - m** to **v%**
 **n** <Keys.HardKey>And</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures **n**, **m**, **p** to **v%**
 <Keys.HardKey>Group</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures in group **n** to **v%**
 

## Setting Other Attributes of Intelligent Fixtures

 Keypresses | Action
------------|-------------------
 <Keys.HardKey>@</Keys.HardKey> **b** <Keys.HardKey>/</Keys.HardKey> **v** | Set gel colour **v** from brand **b** to selected fixtures. (1=Lee, 2=Roscolux, 3=GamColor)
 <Keys.HardKey>Gobo</Keys.HardKey> (Turn Wheels) | Set gobo values of selected fixtures as shown above the wheels.
 <Keys.HardKey>Gobo</Keys.HardKey> <Keys.HardKey>Wheel @</Keys.HardKey> <Keys.SoftKey>Gobo1</Keys.SoftKey> | Set gobo values of selected fixtures as shown on the softkeys. (This uses the <Keys.HardKey>Wheel @</Keys.HardKey> button next to each wheel)

-   For setting gel colours, if the console does not have a hardware <Keys.HardKey>/</Keys.HardKey> button you need to use an external qwerty keyboard or the touch keyboard. See [Selecting gel colours](../controlling-fixtures/changing-fixture-attributes.md#colour-mix-filters). 

## Clear functions

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Clear</Keys.HardKey> | Snap clear the programmer - this will release edited channels back to programmed state and deselect fixtures *(like Cheat on ETC)*
 **t** <Keys.HardKey>Clear</Keys.HardKey> | Clear edited channels fading over time **t**
 <Keys.HardKey>Clear</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> | Deselect all fixtures, but keep edited values in the programmer

- The Clear function can be changed to operate in a 2-step mode where the first press deselects fixtures, then the 2nd press clears edited values, or the other way around. See [Action Precedence](../system-settings/user-settings.md#clear) option in the Clear tab of User Settings.

While you hold down <Keys.HardKey>Clear</Keys.HardKey>, other functions are available on the softkeys, allowing you to clear the edited values from only selected fixtures, or to clear values using a mask. See [Clear button hold down options](../controlling-fixtures.md#clear-button-hold-down-options)
 

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
<Keys.HardKey>Record</Keys.HardKey> <Keys.SoftKey>Create Cue List</Keys.SoftKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Start recording a new cue list on this fader
<Keys.HardKey>Record</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Record the next cue onto the end of the cue list on this fader
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> | Record cue **n** *(will prompt for merge/overwrite if it exists already)*
<Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Set fade time into programmer *(does not affect stored cues; will save with the next cue you record)*
<Keys.HardKey>View</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Show the list of cues on screen, click on individual times in the grid to edit them

### Copy, Move and Delete commands

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** to new cue **m**
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Copy cue **n** onto the end of the cue list
<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Delete cue **n** *(2nd <Keys.HardKey>Enter</Keys.HardKey> confirms)*

- For the **copy** commands, you can use <Keys.HardKey>Move</Keys.HardKey> in place of <Keys.HardKey>Copy</Keys.HardKey>to **move** cues. For consoles
  which don't have a <Keys.HardKey>Move</Keys.HardKey> button you can press (<Keys.HardKey>Avo</Keys.HardKey> and <Keys.HardKey>Copy</Keys.HardKey>) together to get Move.

- You can select multiple cues using <Keys.HardKey>Through</Keys.HardKey>, <Keys.HardKey>And</Keys.HardKey> and <Keys.SoftKey>Not</Keys.SoftKey>. For example to copy cues 3, 4 ,5 ,7, 10
  into a new block of cues starting at cue 20 you could do 

  <Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **3** <Keys.HardKey>Through</Keys.HardKey> **7** <Keys.SoftKey>Not</Keys.SoftKey> **6** <Keys.HardKey>And</Keys.HardKey> **10** <Keys.HardKey>@</Keys.HardKey> **20** <Keys.HardKey>Enter</Keys.HardKey>

### Block and Follow-On cues

Use the Cue List window to set Block or Follow-On cues (using <Keys.HardKey>View</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey>).

- To make a **Block** cue (changes from previous cues do not track), 
	in the Tracking column click the cell for the cue you want to change and
	select <Keys.SoftKey>Block</Keys.SoftKey> from the softkeys.

- To make a Follow-On or [linked cue](cue-list-timing.md#cue-linking--link-offset) so they automatically run after each other,
	click on the "Link" cell
	(which normally shows "Wait For Go". Then select from the softkeys <Keys.SoftKey>Link After Previous Cue</Keys.SoftKey> or <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>. For Link After, set the "Delay Out" time to set how long the cue will remain before the next cue starts.

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
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Update cue **n** by merging the contents of the programmer and track forwards *(will add the cue if it does not already exist)*. 
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Update cue **n** only by merging the contents of the programmer, no forward tracking. 
<Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Set fade time of cue **n** to **t** seconds
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Merge</Keys.SoftKey> | Merge the contents of the programmer into cues **n** to **m** inclusive. *(Will add any whole number cues which are missing in that range)*
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Update</Keys.SoftKey> | Updates cues **n** to **m** inclusive with the contents of the programmer *(Will not add any cues, or any attributes which were not originally in the cue - see note below about Add Channels option)*
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Update</Keys.SoftKey> | Updates cues **n** to **m** inclusive with the contents of the programmer *(Will not add any whole number cues which are missing, but will add attributes which were not originally in the cue)*

- For the **Update** commands you can decide whether or not you want to add attributes which do not already exist in the cues using the <Keys.SoftKey>Add Channels</Keys.SoftKey> option. If this is set to On, then new attributes will be added to the cue, otherwise only pre-existing attributes will be updated. The **Record Update** command overrides this option to "On".

## Updating the current live cue

Often you need to make changes to a cue while the cue is active in a
running show. Press <Keys.HardKey>Clear</Keys.HardKey> before you make your changes in the programmer, to be sure that
the programmer does not contain any unwanted previous changes.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Update current live cue by merging the contents of the programmer and track forwards. 
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Update live cue only by merging the contents of the programmer, no forward tracking. 
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Update currently existing values in live cue with the contents of the programmer and track forwards *(for tracked values, will go back through cues to find the most recent hard value and update that)*.
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Update currently existing values in the live cue only, don't track forwards *(for tracked values, will go back through cues to find the most recent hard value and update that)*.
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Update live cue with the contents of the programmer and track forwards *(will add attributes which were not originally in the cue, and go back through cues to update tracked values at the source cue)*
<Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Set fade in time of current cue (You can also edit this in the Cue List Window).

## Advanced Time options

Keypresses | Action
------------|-------------------
<Keys.HardKey>Time</Keys.HardKey> **t1** <Keys.HardKey>And</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> | Add fade-in time **t1** and fade-out time **t2** to programmer, ready to record.
<Keys.HardKey>Time</Keys.HardKey> **t1** <Keys.HardKey>And</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Set fade-in time **t1** and fade-out time **t2** of currently active cue.
<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Set fade-in time **t** of currently selected fixtures, ready to record.
<Keys.HardKey>Time</Keys.HardKey> **t1** <Keys.HardKey>@</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> | Add fade-in time **t1** and delay time **t2** to programmer, ready to record.
<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> **t1** <Keys.HardKey>@</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Set fade-in time **t1** and delay time **t2** of currently selected fixtures.

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

Shapes will record into cues, and will track through subsequent cues until you stop them.
You can stop tracked shapes in the Cue List View window using the **T/B** switch in the View Shape column, see 
[Shape Tracking in Cue Lists](../cue-lists/creating-a-cue-list.md#shape-tracking-in-cue-lists).

## Macros

You can record a sequence of keypresses as a *Macro*, so that the console can automatically replay your actions.
See [Macros](../titan-basics/front-panel-buttons.md#key-macro-buttons).

You can include macros in Cue Lists by clicking on the Macros column in the Cue List View window.