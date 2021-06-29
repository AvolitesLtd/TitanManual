---
id: theatre-programming
title: Theatre Programming Quick Guide
sidebar_label: Theatre Programming
original_id: theatre-programming
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

If you are used to programming other theatre-style consoles, you will be
more familiar with using a keypad/syntax style interface, rather than the Titan
touchscreen. But fear not because you can program a theatre show on
Titan using the keypad and this is how you do it.

Labelled buttons on the console are shown like this: <Keys.HardKey>Enter</Keys.HardKey>. The
<Keys.HardKey>Cue</Keys.HardKey> button is labelled <Keys.HardKey>Connect</Keys.HardKey> on some consoles. The <Keys.HardKey>@</Keys.HardKey>
button is the one next to the numeric keypad.

Dimmers/Fixtures have a User Number *(which is equivalent to the Channel
Number on other consoles)*, shown in the top left corner of the fixture
button. This is the number <strong>"n"</strong> shown in the keypad commands below. You can
change this number using the <Keys.SoftKey>Set Legend</Keys.SoftKey> softkey, see section [Changing the Patch](../patching/changing-the-patch.md#setting-legends).
Groups also have a User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

## Setting Dimmer/Fixture Levels

````xml
n <@> <@>
````

Set fixture <strong>n</strong> to 100%

---

````xml
n <@> v <Enter>
````

Set fixture <strong>n</strong> to <strong>v%</strong> *(you need to enter 2 digits so "50" for 50%)*

---

````xml
n <Thro> m <@> v <Enter>
````

Set fixtures <strong>n - m</strong> to <strong>v%</strong>

---

````xml
n <And> m <And> p <@> v <Enter>
````

Set fixtures <strong>n</strong>, <strong>m</strong>, <strong>p</strong> to <strong>v%</strong>

---

````xml
<Group> n <@> v <Enter>
````

Set fixtures in group <strong>n</strong> to <strong>v%</strong>

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

Release edited channels fading over time <strong>t</strong>

## Setting Other Attributes of Intelligent Fixtures

Select fixtures for control using
````xml
n <Enter>

n <Thro> m <Enter>

<Group> n <Enter>
````

-   Press one of the <strong>Attribute Bank buttons</strong> <Keys.HardKey>Colour</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> etc. The
    current function of the wheels is shown bottom right on the screen.
    Press the same Attribute Bank again to page through different
    attributes *e.g. if there are 2 gobo wheels keep pressing <Keys.HardKey>Gobo</Keys.HardKey> to
    access the other attributes*.

-   Use the <strong>wheels</strong> to set the value. Or press the <Keys.HardKey>@</Keys.HardKey> button next to
    the wheel and type in a value on the keypad.

## Programming Cues

Titan can have multiple cue lists. To start a cue list press <Keys.HardKey>Record</Keys.HardKey>
then select <Keys.SoftKey>Create Cue List</Keys.SoftKey> from the touch screen. Then press a <strong>blue</strong>
button above the fader where you want to store the cue list.

Titan will record into the cue only the dimmers/fixtures you have changed
since you last pressed <Keys.HardKey>Clear</Keys.HardKey>, and that have changed from the
previous cue *(so if you put up another playback, that won't get
recorded)*. To record everything with intensity above zero, switch
&nbsp;<Keys.SoftKey>Record Mode</Keys.SoftKey> to "Record by Stage" (see [Creating a Cue](../cues/creating-a-cue.md#creating-a-cue)).

---

````xml
<Record> &#123;blue fader button&#125; &#123;blue fader button&#125;
````

Record the next cue onto the end of the cue list on this fader

---

````xml
<Record> <Cue> n <Enter>
````

Record cue <strong>n</strong> *(will prompt for merge/overwrite if it exists already)*

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

Set fade time of cue <strong>n</strong> to <strong>t</strong> seconds

---

````xml
<Delete> <Cue> n <Enter> <Enter>
````

Delete cue <strong>n</strong> *(2^nd^ <Keys.HardKey>Enter</Keys.HardKey> confirms)*

---

````xml
<Copy> <Cue> n <@> <Cue> m <Enter>
````

Copy cue <strong>n</strong> to new cue <strong>m</strong>

---

````xml
<Copy> <Cue> n <@> <Enter>
````

Copy cue <strong>n</strong> onto the end of the cue list

> Can also use <Keys.HardKey>Move</Keys.HardKey> to move cues, and <Keys.HardKey>Thro</Keys.HardKey>, <Keys.HardKey>And</Keys.HardKey> to change
multiple cues

---

You can show the list of cues on screen, click on individual times to
edit them:

````xml
<View> &#123;blue fader button&#125;
````

---

To make a <strong>Block</strong> cue (changes do not track), view the cue list as above,
in the Tracking column click the cell for the cue you want to change and
select <Keys.SoftKey>Block</Keys.SoftKey> from the softkeys.

---

To [link cues](cue-list-timing.md#cue-linking--link-offset), the easiest way is on the screen. Click on the "Link" cell
(which normally shows "Wait For Go". Then select from the softkeys
<Keys.SoftKey>Link After Previous Cue</Keys.SoftKey> or <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>. For Link
After, set the "Delay Out" time to set how long the cue will remain
before the next cue starts.

## Running Cues

Push up the fader of the cue list to make it active *("connected")*.

---

````xml
<Cue> &#123;blue button&#125;
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
Go cue <strong>n</strong> with programmed times

---

````xml
t <Go>
````
Next cue go with fade time <strong>t</strong>

---

````xml
n <Cue> t <Go>
````
Jump to cue <strong>n</strong> with fade time <strong>t</strong>

---

> If you want moving fixtures to automatically position themselves ready
for the next cue, enable the <Keys.SoftKey>Move In Dark</Keys.SoftKey> option, see previous
section. This is Off by default.

## Editing Cues While Running

Often you need to make changes to cues while the cue is active in a
running show. Press <Keys.HardKey>Clear</Keys.HardKey> before you make changes to be sure that
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

> It is probably easier to use <Keys.HardKey>View</Keys.HardKey> and click on the time on
    screen to edit it

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

Shapes will record into cues, and will track through subsequent cues
while they are active in the programmer, until you stop them by pressing
<Keys.HardKey>Clear</Keys.HardKey>.