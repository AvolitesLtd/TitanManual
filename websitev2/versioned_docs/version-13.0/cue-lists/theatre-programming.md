---
id: theatre-programming
title: Theatre Programming Quick Guide
sidebar_label: Theatre Programming
original_id: theatre-programming
---

If you are used to programming other theatre-style consoles, you will be
more familiar with using a keypad/syntax style interface, rather than the Titan
touchscreen. But fear not because you can program a theatre show on
Titan using the keypad and this is how you do it.

Labelled buttons on the console are shown like this: \<Enter\>. The
\<Cue\> button is labelled \<Connect\> on some consoles. The \<@\>
button is the one next to the numeric keypad.

Dimmers/Fixtures have a User Number *(which is equivalent to the Channel
Number on other consoles)*, shown in the top left corner of the fixture
button. This is the number **"n"** shown in the keypad commands below. You can
change this number using the \[Set Legend\] softkey, see section [Changing the Patch](../patching/changing-the-patch.md#setting-legends).
Groups also have a User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

## Setting Dimmer/Fixture Levels

````xml
n <@> <@>
````

Set fixture **n** to 100%

---

````xml
n <@> v <Enter>
````

Set fixture **n** to **v%** *(you need to enter 2 digits so "50" for 50%)*

---

````xml
n <Thro> m <@> v <Enter>
````

Set fixtures **n - m** to **v%**

---

````xml
n <And> m <And> p <@> v <Enter>
````

Set fixtures **n**, **m**, **p** to **v%**

---

````xml
<Group> n <@> v <Enter>
````

Set fixtures in group **n** to **v%**

---

````xml
<Clear>
````

Snap release edited channels back to programmed state -
*like Cheat on ETC*

---

````xml
t <Clear>
````

Release edited channels fading over time **t**

## Setting Other Attributes of Intelligent Fixtures

Select fixtures for control using
````xml
n <Enter>

n <Thro> m <Enter>

<Group> n <Enter>
````

-   Press one of the **Attribute Bank buttons** \<Colour\> \<Gobo\> etc. The
    current function of the wheels is shown bottom right on the screen.
    Press the same Attribute Bank again to page through different
    attributes *e.g. if there are 2 gobo wheels keep pressing \<Gobo\> to
    access the other attributes*.

-   Use the **wheels** to set the value. Or press the \<@\> button next to
    the wheel and type in a value on the keypad.

## Programming Cues

Titan can have multiple cue lists. To start a cue list press \<Record\>
then select \[Create Cue List\] from the touch screen. Then press a **blue**
button above the fader where you want to store the cue list.

Titan will record into the cue only the dimmers/fixtures you have changed
since you last pressed \<Clear\>, and that have changed from the
previous cue *(so if you put up another playback, that won't get
recorded)*. To record everything with intensity above zero, switch
\[Record Mode\] to "Record by Stage" (see [Creating a Cue](../cues/creating-a-cue.md#creating-a-cue)).

---

````xml
<Record> {blue fader button} {blue fader button}
````

Record the next cue onto the end of the cue list on this fader

---

````xml
<Record> <Cue> n <Enter>
````

Record cue **n** *(will prompt for merge/overwrite if it exists already)*

---

````xml
<Time> t <Enter>
````

Set fade time into programmer *(does not
affect stored cues; will save with the cue when you record it)*

---

````xml
<Cue> n <Time> t <Enter>
````

Set fade time of cue **n** to **t** seconds

---

````xml
<Delete> <Cue> n <Enter> <Enter>
````

Delete cue **n** *(2^nd^ \<Enter\> confirms)*

---

````xml
<Copy> <Cue> n <@> <Cue> m <Enter>
````

Copy cue **n** to new cue **m**

---

````xml
<Copy> <Cue> n <@> <Enter>
````

Copy cue **n** onto the end of the cue list

> Can also use \<Move\> to move cues, and \<Thro\>, \<And\> to change
multiple cues

---

You can show the list of cues on screen, click on individual times to
edit them:

````xml
<View> {blue fader button}
````

---

To make a **Block** cue (changes do not track), view the cue list as above,
in the Tracking column click the cell for the cue you want to change and
select \[Block\] from the softkeys.

---

To [link cues](cue-list-timing.md#cue-linking--link-offset), the easiest way is on the screen. Click on the "Link" cell
(which normally shows "Wait For Go". Then select from the softkeys
\[Link After Previous Cue\] or \[Link With Previous Cue\]. For Link
After, set the "Delay Out" time to set how long the cue will remain
before the next cue starts.

## Running Cues

Push up the fader of the cue list to make it active *("connected")*.

---

````xml
<Cue> {blue button}
````

If another cue list is active, connect this cue
list as the current list

---

````xml
<Go>
````
Run next cue with programmed times

---

````xml
<Cue> n <Go>
````
Go cue **n** with programmed times

---

````xml
t <Go>
````
Next cue go with fade time **t**

---

````xml
n <Cue> t <Go>
````
Jump to cue **n** with fade time **t**

---

> If you want moving fixtures to automatically position themselves ready
for the next cue, enable the \[Move In Dark\] option, see previous
section. This is Off by default.

## Editing Cues While Running

Often you need to make changes to cues while the cue is active in a
running show. Press \<Clear\> before you make changes to be sure that
the programmer does not contain any previous changes.

---

````xml
<Record> <Cue> <Cue>
````
Update current cue by merging programmer

---

````xml
<Time> t <Enter>, <Record> <Cue> <Cue>
````
Set fade in time of current cue

> It is probably easier to use \<View\> and click on the time on
    screen to edit it

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

Shapes will record into cues, and will track through subsequent cues
while they are active in the programmer, until you stop them by pressing
\<Clear\>.