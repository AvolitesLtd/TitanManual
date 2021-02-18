---
id: theatre-programming
title: Theatre Programming Quick Guide
sidebar_label: Theatre Programming
---

If you are used to programming other theatre-style consoles, you will be
more familiar with using a keypad/syntax style interface, rather than the Titan
touchscreen. But fear not because you can program a theatre show on
Titan using keypad syntax and this is how you do it.

- Labelled buttons on the console are shown like this: \<Enter\>. 
- The \<@\> button is the one next to the numeric keypad. 
- The \<Cue\> button is labelled \<Connect\> or \<Connect/Cue\> on some consoles. 
- The \<Thru\> button is labelled \<Thru\> or \<Through\> on some consoles. 
- The \<And\> and \<Thru\> buttons are not provided as fixed buttons on some consoles, softkey \[And\] and \[Through\] options are provided instead.

Dimmers/Fixtures have a User Number *(which is equivalent to the Channel
Number on other consoles)*, shown in the top left corner of the fixture
button. This is the number **n** shown in the keypad commands below. You can
change this number using the \[Set Legend\] softkey, see section [Changing the Patch](../patching/changing-the-patch.md#setting-legends).
Groups also have a User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

## Setting Dimmer/Fixture Levels

 Keypresses | Action
------------|-------------------
 **n** \<@\> \<@\> | Set fixture **n** to 100%
 **n** \<@\> **v** \<Enter\> | Set fixture **n** to **v%** *(you need to enter 2 digits so "50" for 50%)*
 **n** \<Thru\> **m** \<@\> **v** \<Enter\> | Set fixtures **n - m** to **v%**
 **n** \<And\> **m** \<And\> **p** \<@\> **v** \<Enter\> | Set fixtures **n**, **m**, **p** to **v%**
 \<Group\> **n** \<@\> **v** \<Enter\> | Set fixtures in group **n** to **v%**
 \<Clear\> | Snap release edited channels back to programmed state - *like Cheat on ETC*
 **t** \<Clear\> | Release edited channels fading over time **t**

## Setting Other Attributes of Intelligent Fixtures

 Keypresses | Action
------------|-------------------
 **n** \<Enter\> | Select fixture **n** for control
 **n** \<Thru\> m \<Enter\> | Select fixtures **n** to **m** for control
 \<Group\> **n** \<Enter\> | Select all fixtures in group **n** for control

Once you have selected the fixtures:
-   Press one of the **Attribute Bank buttons** \<Colour\> \<Gobo\> etc. The
    current function of the wheels is shown bottom right on the screen.
    Press the same Attribute Bank again to page through different
    attributes *e.g. if there are 2 gobo wheels keep pressing \<Gobo\> to
    access the other attributes*.

-   Use the **wheels** to set the value. Or press the \<@\> button next to
    the wheel and type in a value on the keypad.

## Programming Cues

Titan can have multiple cue lists. To start a cue list press \<Record\>
then select \[Create Cue List\] from the touch screen. Then press a **Select**
button above the fader where you want to store the cue list.

Titan will record into the cue only the dimmers/fixtures you have changed
since you last pressed \<Clear\>, and that have changed from the
previous cue *(so if you put up another playback, that won't get
recorded)*. To record everything with intensity above zero, switch
\[Record Mode\] to "Record by Stage" (see [Creating a Cue](../cues/creating-a-cue.md#creating-a-cue)).

 Keypresses | Action
------------|-------------------
\<Record\> {fader select} {fader select} | Record the next cue onto the end of the cue list on this fader
<Record> \<Cue\> **n** \<Enter\> | Record cue **n** *(will prompt for merge/overwrite if it exists already)*
\<Time\> **t** \<Enter\> | Set fade time into programmer *(does not affect stored cues; will save with the cue when you record it)*
\<Cue\> **n** \<Time\> **t** \<Enter\> | Set fade time of cue **n** to **t** seconds
\<Delete\> \<Cue\> **n** \<Enter\> \<Enter\> | Delete cue **n** *(2^nd^ \<Enter\> confirms)*
\<Copy\> \<Cue\> **n** \<@\> \<Cue\> **m** \<Enter\> | Copy cue **n** to new cue **m**
\<Copy\> \<Cue\> **n** \<@\> \<Enter\> | Copy cue **n** onto the end of the cue list
\<Open/View\> {fader select} | Show the list of cues on screen, click on individual times to edit them

- For the **copy** commands, you can use \<Move\> in place of \<Copy\>to **move** cues. For consoles
  which don't have a \<Move\> button you can press (\<Avo\> and \<Copy\>) together to get Move.
    
- You can select multiple cues using \<Thru\>, \<And\> and \[Not\]. For example to copy cues 3, 4 ,5 ,7, 10 
  into a new block of cues starting at cue 20 you could do \
  \<Copy\> {fader select} **3** \<Thru\> **7** \[Not\] **6** \<And\> **10** \<@\> **20** \<Enter\>

- To make a **Block** cue (changes from previous cues do not track), view the cue list as above,
	in the Tracking column click the cell for the cue you want to change and
	select \[Block\] from the softkeys.

- To [link cues](cue-list-timing.md#cue-linking--link-offset) so they automatically run after each other, 
	the easiest way is on the screen. Click on the "Link" cell
	(which normally shows "Wait For Go". Then select from the softkeys
	\[Link After Previous Cue\] or \[Link With Previous Cue\]. For Link
	After, set the "Delay Out" time to set how long the cue will remain
	before the next cue starts.

## Running Cues

Push up the fader of the cue list to make it active. Titan calls this the *connected* cue list and the control buttons
such as Go will operate on this cue list.

 Keypresses | Action
------------|-------------------
\<Cue\> {fader select} |If another cue list is active, connect this cue list as the current list
\<Go\> | Run next cue with programmed times
\<Cue\> **n** \<Go\> | Go cue **n** with programmed times
**t** \<Go\> | Next cue go with fade time **t**
**n** \<Cue\> **t** \<Go\> | Jump to cue **n** with fade time **t**

-   If you want moving fixtures to automatically position themselves ready
    for the next cue, enable the \[Move In Dark\] option, see [Move In Dark](cue-list-options.md#move-in-dark).
    This option is Off by default.

## Editing Cues While Running

Often you need to make changes to cues while the cue is active in a
running show. Press \<Clear\> before you make changes to be sure that
the programmer does not contain any previous changes.

 Keypresses | Action
------------|-------------------
\<Record\> \<Cue\> \<Cue\> | Update current cue by merging programmer
\<Time\> **t** \<Enter\> \<Record\> \<Cue\> \<Cue\> | Set fade in time of current cue (It is probably easier to use \<View\> and click on the time on  screen to edit it)

## Effects/Shapes

You can't select Effects/Shapes from the keypad on Titan, but it's still
easy:

1. Select fixtures for control

2. At the top level menu press \[Shapes and Effects\], \[Shape
    Generator\], \[Create\]

3. Select the type of shape \[Dimmer\], \[Pan/Tilt\] etc

4. Select a shape from the softkeys *or from the Shapes window which
    appears*

5. Set the *Speed*, *Size*, *Spread* using the wheels

Shapes will record into cues, and will track through subsequent cues.
You can deactivate tracked shapes in the Playback View, or set the 
Shape Tracking in the Playback Options.
